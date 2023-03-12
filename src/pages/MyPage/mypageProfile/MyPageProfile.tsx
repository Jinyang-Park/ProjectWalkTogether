import { async } from '@firebase/util';
import { deleteUser, getAuth, updateProfile } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { authService, dbService, storage } from '../../../common/firebase';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { currentUserUid, username } from '../../../Rocoil/Atom';
import MypageDropBox from './MypageDropBox';
import useDetectClose from '../../../hooks/useDetectClose';
import * as S from './MyPageProfile.style';
import { UserNickName } from './../../../Rocoil/Atom';

const MyPageProfile = (props: { uid: string }) => {
  const navigate = useNavigate();
  const uid = props.uid;
//
  const [newname, setNewname] = useState('');
  const [newmessage, setNewmessage] = useState('');
  const [name, setName] = useRecoilState(UserNickName);
  const [message, setMessage] = useState('');

  const setUsername = useSetRecoilState(username);

  const [isEditing, setIsEditing] = useState(false);

  const [imageURL, setImageURL] = useState<string>('');
  const userUID = useRecoilValue(currentUserUid);

  const [nameswitch, setNameSwitch] = useState(false);
  const [messageswitch, setMessagesSwitch] = useState(false);

  // 모달창
  const [showBox, setShowBox] = useState<any>(false);

  // 모달 외부 클릭 시 닫기 customhook
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);

  useEffect(() => {
    getImageURL();
  }, []);

  const getImageURL = async () => {
//
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
//        e.target.value = '';
        getDownloadURL(snapshot.ref).then((downloadURL) => {
//          setImageURL(downloadURL);
          updateDoc(doc(dbService, 'user', authService.currentUser.uid), {
            profileImg: downloadURL,
          });
          updateProfile(authService.currentUser, {
            photoURL: downloadURL,
          });
        });
      })
      .catch((error) => {
//      });
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
//    const docSnap = await getDoc(doc(dbService, 'user', uid));
    setName(docSnap.data().nickname);
    setMessage(docSnap.data().introduce);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <S.MyPageProfileWrap>
      <S.UserProfileContainer>
        <S.UserProfileImgLabel htmlFor='fileInput'>
          <S.UserWrapper>
            <S.UserProfileImg
              src={
                imageURL
                  ? imageURL
                  : require('../../../assets/MypageIcon/carmera.svg').default
              }
            />
          </S.UserWrapper>
          {uid === userUID && (
            <>
              <S.UserProfileEditIcon
                src={require('../../../assets/MypageIcon/EditIcon.svg').default}
              />
              <S.UserProfileImgBtn
                type='file'
                id='fileInput'
                onChange={onImageChange}
              />
            </>
          )}
        </S.UserProfileImgLabel>
      </S.UserProfileContainer>

      <S.UserProfileInfoContainer>
        {uid === userUID && (
          <S.UserModifyBtn onClick={onEditBtn}>
            {!isEditing ? (
              <>
                수정하기
                <S.UserModifyBtnIcon
                  src={
                    require('../../../assets/MypageIcon/EditPinkIcon.svg')
                      .default
                  }
                />
              </>
            ) : (
              <>
                수정완료
                <S.UserModifyBtnIcon
                  src={require('../../../assets/MypageIcon/check2.svg').default}
                />
              </>
            )}
          </S.UserModifyBtn>
        )}
        {/*&&는 :()뒤에 넣지 않는다*/}
        {uid === userUID && (
          <>
            <S.MyPageButton onClick={myPageHandler} ref={myPageRef}>
              <S.MypageMoreBtn
                src={require('../../../assets/MypageIcon/More.svg').default}
                onClick={() => {
                  setShowBox(true);
                }}
              />
            </S.MyPageButton>
            {myPageIsOpen && <MypageDropBox />}
          </>
        )}
        <S.UserNickNameBox>
          {!isEditing ? (
            <S.UserNickName>{!name ? '이름없음' : name}</S.UserNickName>
          ) : (
            <>
              <S.ChangeNickName
                value={newname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.target.value.length > 20) {
                    setNameSwitch(true);
                  } else {
                    setNewname(e.currentTarget.value);
                  }
                }}
              />
            </>
          )}
        </S.UserNickNameBox>
        {nameswitch && (
          <S.ShowTitleFlex>
            <S.ShowIcon
              src={require('../../../assets/MypageIcon/Dot.svg').default}
            />
            <S.ShowCheckNickName>
              닉네임은 20자 이내로 해주세요
            </S.ShowCheckNickName>
          </S.ShowTitleFlex>
        )}

        {/*후기 카운트 */}
        {/* <S.UserWalkCountBox>
          <S.UserWalkCountIcon
            src={require('../../../assets/MypageIcon/droplet.svg').default}
          />
          <S.UserWalkCountText>
            총 {20}번의 산책을 완료하셨어요!
          </S.UserWalkCountText>
        </S.UserWalkCountBox> */}

        <S.UserIntroduceAreaBox>
          {!isEditing ? (
            <S.UserIntroduceText>{message}</S.UserIntroduceText>
          ) : (
            <S.ChangeContent
              placeholder='자기소개를 입력해주세요'
              value={newmessage}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                if (e.currentTarget.value.length > 120) {
                  setMessagesSwitch(true);
                } else {
                  setNewmessage(e.currentTarget.value);
                }
              }}
            />
          )}
        </S.UserIntroduceAreaBox>
        {messageswitch && (
          <S.ShowTitleFlex>
            <S.ShowIcon
              src={require('../../../assets/MypageIcon/Dot.svg').default}
            />
            <S.ShowCheckNickName>
              자기소개는 120글자를 넘을 수 없습니다.
            </S.ShowCheckNickName>
          </S.ShowTitleFlex>
        )}
      </S.UserProfileInfoContainer>
    </S.MyPageProfileWrap>
  );
};
export default MyPageProfile;
