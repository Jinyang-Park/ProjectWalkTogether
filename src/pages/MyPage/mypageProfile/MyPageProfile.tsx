import { async } from '@firebase/util';
import { deleteUser, getAuth, updateProfile } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { authService, dbService, storage } from '../../../common/firebase';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentUserUid, username } from '../../../Rocoil/Atom';
import MypageDropBox from './MypageDropBox';
const MyPageProfile = (props: { uid: string }) => {
  const navigate = useNavigate();
  const uid = props.uid;

  const [newname, setNewname] = useState('');
  const [newmessage, setNewmessage] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const setUsername = useSetRecoilState(username);

  const [isEditing, setIsEditing] = useState(false);

  const [imageURL, setImageURL] = useState<string>('');
  const userUID = useRecoilValue(currentUserUid);

  const [nameswitch, setNameSwitch] = useState(false);
  const [messageswitch, setMessagesSwitch] = useState(false);

  // 모달창
  const [showBox, setShowBox] = useState<any>(false);

  useEffect(() => {
    getImageURL();
  }, []);

  const getImageURL = async () => {
    console.log(uid);

    const docRef = doc(dbService, 'user', uid);
    const docSnap = await getDoc(docRef);

    setImageURL(docSnap.data().profileImg);
  };
  const onImageChange = (
    e: React.ChangeEvent<EventTarget & HTMLInputElement>
  ) => {
    e.preventDefault();
    const file = e.target.files;
    if (!file) return null;

    const storageRef = ref(
      storage,
      `files/userProfile/${authService.currentUser.uid}`
    ); //user.uid로 저장
    const uploadTask = uploadBytes(storageRef, file[0]);

    uploadTask
      .then((snapshot) => {
        console.log('a');
        e.target.value = '';
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log('b');
          setImageURL(downloadURL);
          updateDoc(doc(dbService, 'user', authService.currentUser.uid), {
            profileImg: downloadURL,
          });
          updateProfile(authService.currentUser, {
            photoURL: downloadURL,
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onEditBtn = async () => {
    if (!isEditing) {
      setNewname(authService.currentUser.displayName);
      const docSnap = await getDoc(doc(dbService, 'user', uid));
      const msg = docSnap.data().introduce || '';
      setNewmessage(msg);
    } else {
      // if (newname === '' || newmessage === '') {
      //   alert(
      //     '빈 칸이면 파이어베이스가 발작 일으켜요 제발 내용 채워주세요ㅠㅠ'
      //   );
      //   return;
      // }
      setNameSwitch(false);
      setMessagesSwitch(false);
      updateProfile(authService.currentUser, {
        displayName: newname,
      });

      await updateDoc(doc(dbService, 'user', uid), {
        nickname: newname,
        introduce: newmessage,
      });

      // window.location.reload();
      setName(newname);
      setMessage(newmessage);
      setUsername(newname);
    }
    sessionStorage.setItem('id', newname);
    setIsEditing(!isEditing);
  };

  const fetchInfo = async () => {
    console.log('Attempted to fetch user info ' + uid);
    const docSnap = await getDoc(doc(dbService, 'user', uid));
    setName(docSnap.data().nickname);
    setMessage(docSnap.data().introduce);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <MyPageProfileWrap>
      <UserProfileContainer>
        <UserProfileImgLabel htmlFor='fileInput'>
          <UserWrapper>
            <UserProfileImg
              src={
                imageURL
                  ? imageURL
                  : require('../../../assets/MypageIcon/carmeraIcon.svg')
                      .default
              }
            />
          </UserWrapper>
          {uid === userUID && (
            <>
              <UserProfileEditIcon
                src={require('../../../assets/MypageIcon/EditIcon.svg').default}
              />
              <UserProfileImgBtn
                type='file'
                id='fileInput'
                onChange={onImageChange}
              />
            </>
          )}
        </UserProfileImgLabel>
      </UserProfileContainer>

      <UserProfileInfoContainer>
        {uid === userUID && (
          <UserModifyBtn onClick={onEditBtn}>
            {!isEditing ? (
              <>
                수정하기
                <UserModifyBtnIcon
                  src={
                    require('../../../assets/MypageIcon/EditPinkIcon.svg')
                      .default
                  }
                />
              </>
            ) : (
              <>
                수정완료
                <UserModifyBtnIcon
                  src={require('../../../assets/MypageIcon/check2.svg').default}
                />
              </>
            )}
          </UserModifyBtn>
        )}
        {/*커스텀 훅 들어올 자리*/}
        <div>
          <MypageMoreBtn
            src={require('../../../assets/MypageIcon/More.svg').default}
            onClick={() => {
              setShowBox(true);
            }}
          />
        </div>
        {showBox && <MypageDropBox />}
        <UserNickNameBox>
          {!isEditing ? (
            <UserNickName>{name}</UserNickName>
          ) : (
            <>
              <input
                value={newname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.target.value.length > 25) {
                    setNameSwitch(true);
                  } else {
                    setNewname(e.currentTarget.value);
                  }
                }}
              ></input>
            </>
          )}
        </UserNickNameBox>
        {nameswitch && <div>닉네임은 25글자를 넘을 수 없습니다.</div>}

        <UserWalkCountBox>
          <UserWalkCountIcon>아이콘</UserWalkCountIcon>
          <UserWalkCountText>
            총 {20}번의 산책을 완료하셨어요!
          </UserWalkCountText>
        </UserWalkCountBox>

        <UserIntroduceAreaBox>
          {!isEditing ? (
            <UserIntroduceText>{message}</UserIntroduceText>
          ) : (
            <textarea
              value={newmessage}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                if (e.currentTarget.value.length > 200) {
                  setMessagesSwitch(true);
                } else {
                  setNewmessage(e.currentTarget.value);
                }
              }}
            ></textarea>
          )}
        </UserIntroduceAreaBox>
        {messageswitch && <div>자기소개는 200글자를 넘을 수 없습니다.</div>}
      </UserProfileInfoContainer>
    </MyPageProfileWrap>
  );
};
export default MyPageProfile;

const MyPageProfileWrap = styled.div`
  /* width: 100%; */
  height: 163px;
  margin: 15px 78px 0px 78px;

  display: flex;
  flex-direction: row;
`;
const UserProfileContainer = styled.div`
  /* width: 25%;
  height: 100%;
  margin: auto; */

  position: relative;

  justify-content: center;
  align-items: center;

  /* border: 1px solid black; */
`;
const UserProfileImg = styled.img`
  /* width: 100%;
  height: 100%; */
  /* width: 163px;
  height: 163px; */
  width: 66px;
  height: 60px;
`;
const UserProfileImgLabel = styled.label``;
const UserProfileEditIcon = styled.img`
  width: 30px;
  height: 30px;
  right: 9px;
  bottom: 9px;
  cursor: pointer;
  position: absolute;
`;
const UserProfileImgBtn = styled.input`
  display: none;
`;
const UserProfileInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 20px;
`;
const UserNickNameBox = styled.div`
  width: 20%;

  justify-content: center;
  align-items: center;

  background: #eef1f7;
`;
const UserNickName = styled.div`
  font-size: 36px;
`;
const UserNickNameBtn = styled.button`
  width: 50px;
  height: 50px;

  background-image: url('../../../assets/editicon.png');
  background-size: cover;
`;
const UserWalkCountBox = styled.div`
  width: 50%;
  margin-bottom: 15px;

  display: flex;
`;
const UserWalkCountIcon = styled.div``;
const UserWalkCountText = styled.div``;
const UserIntroduceAreaBox = styled.div`
  width: 100%;
  height: 49%;

  display: flex;
  position: relative;

  background: #eef1f7;
`;
const UserIntroduceText = styled.div`
  width: 100%;
`;
const UserIntroduceBtn = styled.button`
  width: 50px;
  height: 50px;
  bottom: 0px;
  right: 0px;

  position: absolute;

  background-image: url('../../../assets/editicon.png');
  background-size: cover;
`;
const UserWrapper = styled.div`
  width: 163px;
  height: 163px;
  background: #eeeeee;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const UserModifyBtn = styled.button`
  position: absolute;
  width: 104px;
  height: 40px;
  background: #ffffff;
  /* coral */
  margin-left: 545px;

  border: 1px solid #ff8f8f;
  border-radius: 4px;
  outline: none;

  font-family: 'SUITERegular';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ff8f8f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  letter-spacing: -2px;
`;
export const UserModifyBtnIcon = styled.img`
  margin-left: 8px;
  width: 20px;
  height: 20px;
`;
export const MypageMoreBtn = styled.img`
  width: 10px;
  height: 40px;
  position: absolute;
  margin-left: 675px;
`;
