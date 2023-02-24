import { async } from '@firebase/util';
import { updateProfile } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { authService, dbService, storage } from '../../../common/firebase';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentUserUid, username } from '../../../Rocoil/Atom';
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
          <UserProfileImg src={imageURL} />
          {uid === userUID && (
            <>
              <UserProfileEditIcon src={'/assets/editicon.png'} />
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
          <button onClick={onEditBtn}>
            {!isEditing ? '수정하기' : '수정완료'}
          </button>
        )}
        <UserNickNameBox>
          {!isEditing ? (
            <UserNickName>{name}</UserNickName>
          ) : (
            <input
              value={newname}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value.length > 25) {
                  alert('25자 글자 초과했습니다');
                } else {
                  setNewname(e.currentTarget.value);
                }
              }}
            ></input>
          )}
        </UserNickNameBox>

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
                setNewmessage(e.currentTarget.value);
              }}
            ></textarea>
          )}
        </UserIntroduceAreaBox>
      </UserProfileInfoContainer>
    </MyPageProfileWrap>
  );
};
export default MyPageProfile;

const MyPageProfileWrap = styled.div`
  width: 835px;
  height: 203px;
  margin: 15px auto 0 auto;

  display: flex;
  flex-direction: row;
`;
const UserProfileContainer = styled.div`
  width: 25%;
  height: 100%;
  margin: auto;

  position: relative;

  justify-content: center;
  align-items: center;

  border: 1px solid black;
`;
const UserProfileImg = styled.img`
  width: 100%;
  height: 100%;
`;
const UserProfileImgLabel = styled.label``;
const UserProfileEditIcon = styled.img`
  width: 50px;
  height: 50px;
  right: 0px;
  bottom: 0px;

  cursor: pointer;

  position: absolute;
`;
const UserProfileImgBtn = styled.input`
  display: none;
`;
const UserProfileInfoContainer = styled.div`
  width: 75%;
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
