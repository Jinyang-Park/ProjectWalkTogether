import { async } from '@firebase/util';
import { updateProfile } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { authService, dbService, storage } from '../../../common/firebase';

const MyPageProfile = (props: { uid: string }) => {
  const uid = props.uid;

  const [newname, setNewname] = useState('');
  const [newmessage, setNewmessage] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [isediting, setIsEditing] = useState(false);

  const [imageURL, setImageURL] = useState<string>('');
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
    if (!isediting) {
      setNewname(authService.currentUser.displayName);
      const docSnap = await getDoc(doc(dbService, 'user', uid));
      setNewmessage(docSnap.data().introduce);
    } else {
      updateProfile(authService.currentUser, {
        displayName: newname,
      });
      updateDoc(doc(dbService, 'user', uid), {
        nickname: newname,
        introduce: newmessage,
      });
    }
    setIsEditing(!isediting);
  };
  const fatchInfo = async () => {
    const docSnap = await getDoc(doc(dbService, 'user', uid));
    setName(docSnap.data().nickname);
    setMessage(docSnap.data().introduce);
  };
  useEffect(() => {
    fatchInfo();
  }, []);
  return (
    <MyPageProfileWrap>
      <UserProfileContainer>
        <UserProfileImgLabel htmlFor='fileInput'>
          <UserProfileImg src={imageURL} />
          <UserProfileEditIcon src={'/assets/editicon.png'} />
          <UserProfileImgBtn
            type='file'
            id='fileInput'
            onChange={onImageChange}
          />
        </UserProfileImgLabel>
      </UserProfileContainer>

      <UserProfileInfoContainer>
        <button onClick={onEditBtn}>
          {!isediting ? '수정하기' : '수정완료'}
        </button>
        <UserNickNameBox>
          {!isediting ? (
            <UserNickName>{name}</UserNickName>
          ) : (
            <input
              value={newname}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNewname(e.currentTarget.value);
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
          {!isediting ? (
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
