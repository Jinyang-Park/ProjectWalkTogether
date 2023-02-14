import React from 'react';
import styled from 'styled-components';
import LikePage from './LikePost';
import WhatIWorte from './WhatIWrote';
import { AiFillEdit } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { useState } from 'react';
import { authService, storage } from '../../common/firebase';
import { updateProfile } from 'firebase/auth';
import { useEffect } from 'react';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { FiCheck } from 'react-icons/fi';
import CommonStyles from './../../styles/CommonStyles';

interface UserInfoTypes {
  nickname: string | null;
  email: string;
  photoUrl: string | null;
}
const MyPage = () => {
  const [text, setText] = useState('');
  const user: any = authService.currentUser;
  const [userInfo, setUserInfo] = useState<UserInfoTypes>();
  const [photoURL, setPhotoURL] = useState<any>(user.photoURL);
  const [newNickName, setNewNickName] = useState(user.displayName);
  const [showNickNameChangeBtn, setShowNickNameChangeBtn] = useState(false);

  const getUserInfo = () => {
    setUserInfo({
      nickname: user?.displayName ?? '익명',
      email: user?.email ?? '',
      photoUrl: user?.photoURL ?? '/assets/default_profile.png',
    });
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  const uploadFB = async (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPhotoURL(reader.result);
    };

    const uploaded_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );

    const file_url = await getDownloadURL(uploaded_file.ref);

    updateProfile(user, {
      photoURL: file_url,
    })
      .then(() => {})
      .catch((error) => {
        alert('이미지 업로드 실패');
      });
  };

  const editNickName = async () => {
    setNewNickName(text);
    await updateProfile(user, { displayName: text })
      .then(() => {
        alert('닉네임 변경 완료');
      })
      .catch((error) => {
        alert('닉네임 변경 실패');
      });
  };
  const handleNickNameBtn = () => {
    editNickName();
    setText('');
    setShowNickNameChangeBtn(false);
  };
  return (
    <CommonStyles>
      <ImgAndNameWrap>
        <ImgAndNameContainer>
          <ImgWrap>
            <label htmlFor='img'>
              <ImgChange
                src={photoURL ? photoURL : '/assets/default_profile.png'}
              />
              <input
                type='file'
                onChange={uploadFB}
                accept='image/*'
                id='img'
                style={{ display: 'none' }}
              ></input>
            </label>
          </ImgWrap>
          <NameContainer>
            <NickNameWrap>
              {newNickName ?? '익명'}
              <EditIcon
                onClick={() => {
                  setShowNickNameChangeBtn(!showNickNameChangeBtn);
                }}
              />
            </NickNameWrap>
            <SetNameWrap>
              {showNickNameChangeBtn === true ? (
                <>
                  <InputStyle
                    type='text'
                    placeholder='변경할 닉네임을 입력해주세요.'
                    value={text}
                    maxLength={6}
                    onChange={(event) => {
                      setText(event.target.value);
                    }}
                  />
                  <CheckIcon
                    onClick={() => {
                      handleNickNameBtn();
                    }}
                  >
                    변경
                  </CheckIcon>
                </>
              ) : null}
            </SetNameWrap>
          </NameContainer>
          <div>산책완료 2</div>
        </ImgAndNameContainer>
      </ImgAndNameWrap>
      <MannerWrap>
        <MannerContainer>
          <ReceiveManner>받은 매너 평가</ReceiveManner>
          <MannerBox>
            <MannerDetail>
              <AccountIcon />
              <MannerScore>2</MannerScore>
              <MannerComment>친절하고 매너가 좋아요!</MannerComment>
            </MannerDetail>
            <MannerDetail>
              <AccountIcon />
              <MannerScore>5</MannerScore>
              <MannerComment>재미있어요!</MannerComment>
            </MannerDetail>
            <MannerDetail>
              <AccountIcon />
              <MannerScore>1</MannerScore>
              <MannerComment>자상하고 편안했어요!</MannerComment>
            </MannerDetail>
          </MannerBox>
        </MannerContainer>
      </MannerWrap>
      <MyPageWrapper>
        <LikedWrapper>
          <LikedContainer>
            <LikePostTitle>좋아요한 글</LikePostTitle>
          </LikedContainer>
          <LikePage />
        </LikedWrapper>
        <LikedWrapper>
          <LikedContainer>
            <LikePostTitle>내가 쓴 글</LikePostTitle>
          </LikedContainer>
          <WhatIWorte />
        </LikedWrapper>
      </MyPageWrapper>
    </CommonStyles>
  );
};
const InputStyle = styled.input`
  padding: 10px;
  margin-top: 5px;

  background-color: #cab0c0;
  border-radius: 10px;
  border-style: none;
  width: 210px;
  height: 20px;
  font-size: 15px;
  font-weight: 700;
  outline: 0;
  color: white;

  ::placeholder {
    font-size: 13px;
    color: #494848;
  }
`;
const SetNameWrap = styled.div``;
const CheckIcon = styled(FiCheck)`
  font-size: 30px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    color: #ff0098;
  }
`;
const MyPageWrapper = styled.div`
  margin: 0 auto;
`;

const ImgAndNameContainer = styled.div`
  display: flex;
  /* background-color: #f2d3c9; */
  padding: 50px;
  width: 60%;
  height: 400px;
  margin: 0 auto 50px;
  margin-top: 50px;
`;
const ImgAndNameWrap = styled.div`
  /* background-color: #e5f2c9; */
  height: 600px;
  padding: 10px;
`;
const ImgWrap = styled.div``;
const ImgChange = styled.img`
  cursor: pointer;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: auto 40px;
`;
const NameContainer = styled.div`
  position: relative;
`;
const NickNameWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  margin-left: 20px;
  border-bottom: 1px solid #ddd;
  font-size: 60px;
`;
const NameChange = styled.div`
  font-size: 60px;
`;
const EditIcon = styled(AiFillEdit)`
  font-size: 80px;
  margin-left: 200px;
  cursor: pointer;
`;
const MannerWrap = styled.div`
  /* background-color: #f5e4b8; */
  width: 100%;
`;
const MannerContainer = styled.div`
  /* background-color: #99f2a6; */
  margin: 0 auto;
  width: 30%;
  /* margin: 30px auto; */
  /* text-align: center; */
`;
const ReceiveManner = styled.p`
  font-size: 60px;
`;
const MannerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const MannerDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;
const AccountIcon = styled(MdAccountCircle)`
  font-size: 60px;
`;

const MannerScore = styled.p`
  font-size: 30px;
  padding-left: 10px;
  padding-right: 10px;
`;
const MannerComment = styled.div`
  font-size: 20px;
  padding: 10px 30px;
  border-radius: 40px;
  background-color: gray;
`;

export const LikedWrapper = styled.div`
  width: 100%;
  padding: 0 1.23rem;
  margin: 0 auto 50px;
`;
export const LikedContainer = styled.div`
  padding: 0 19px;
  margin: 0 auto;
  margin-top: 200px;
  margin-bottom: 50px;
  margin-left: 6rem;
  margin-right: 6rem;
`;
const LikePostTitle = styled.h1`
  margin: 0 0 4px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.46;
  letter-spacing: -0.6px;
  text-align: left;
  color: #212121;
  padding: 0 19px;
`;

export default MyPage;
