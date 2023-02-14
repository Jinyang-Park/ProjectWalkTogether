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
import { BsFillBrushFill } from 'react-icons/bs';
import { FaPen } from 'react-icons/fa';
import CommonStyles from './../../styles/CommonStyles';

interface UserInfoTypes {
  nickname: string | null;
  email: string;
  photoUrl: string | null;
  photoBackImg: string | null;
}
const MyPage = () => {
  const [text, setText] = useState('');
  const user: any = authService.currentUser;
  const [userInfo, setUserInfo] = useState<UserInfoTypes>();
  const [photoURL, setPhotoURL] = useState<any>(user.photoURL);
  const [photoBackImg, setPhotoBackImg] = useState<any>(user.photoURL);
  const [newNickName, setNewNickName] = useState(user.displayName);
  const [showNickNameChangeBtn, setShowNickNameChangeBtn] = useState(false);

  const getUserInfo = () => {
    setUserInfo({
      nickname: user?.displayName ?? '익명',
      email: user?.email ?? '',
      photoUrl: user?.photoURL ?? '/assets/default_profile.png',
      photoBackImg: user?.photoBackImg ?? '',
    });
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  const uploadBackImg = async (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPhotoBackImg(reader.result);
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
      <div>
        <BannerImgWrap>
          <BannerImg
            src={photoBackImg ? photoBackImg : '/assets/thumbnailImg.png'}
          />
          <label htmlFor='back'>
            <input
              type='file'
              onChange={uploadBackImg}
              style={{ display: 'none' }}
              accept='image/*'
              id='back'
            ></input>
            <ImgEditBtn />
          </label>
        </BannerImgWrap>
        <ImgNickNameMannerWrap>
          <ImgAndNameWrap>
            <ImgAndNameContainer>
              <ImgWrap>
                <ImgChange
                  src={photoURL ? photoURL : '/assets/default_profile.png'}
                />
                <label htmlFor='img'>
                  <input
                    type='file'
                    onChange={uploadFB}
                    accept='image/*'
                    id='img'
                    style={{ display: 'none' }}
                  ></input>
                  <ImgChangeBtn />
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
                </NickNameWrap>
                <AlertPhone>xxx-xxxx-xxxx</AlertPhone>
                <DoneCnt>총 15번의 산책을 완료하셨어요!</DoneCnt>
                <MyIntroduce>자기소개</MyIntroduce>
              </NameContainer>
            </ImgAndNameContainer>
          </ImgAndNameWrap>
        </ImgNickNameMannerWrap>
        <MannerWrap>
          <MannerContainer>
            <div>총 20건의 후기를 받으셨어요.</div>
            {/* <ReceiveManner>받은 매너 평가</ReceiveManner> */}
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
          <ChangePost>
            <GoMyPost>내가 쓴 글</GoMyPost>
            <GoLiked>찜</GoLiked>
          </ChangePost>
          <LikedWrapper>
            <LikedContainer>
              {/* <LikePostTitle>좋아요한 글</LikePostTitle> */}
            </LikedContainer>
            <LikePage />
          </LikedWrapper>
        </MyPageWrapper>
      </div>
    </CommonStyles>
  );
};
const ImgNickNameMannerWrap = styled.div``;
const BannerImgWrap = styled.div``;
const BannerImg = styled.img`
  position: relative;
  width: 100%;
  height: 400px;
`;
const ImgEditBtn = styled(BsFillBrushFill)`
  font-size: 60px;
  cursor: pointer;
  position: absolute;
  color: red;
  right: 50px;
  top: 400px;
`;
const ImgChangeBtn = styled(FaPen)`
  position: absolute;
  cursor: pointer;
  left: 20%;
  top: 800px;
`;
const AlertPhone = styled.div`
  margin-left: 1200px;
  font-size: 20px;
  margin-top: -60px;
`;
const DoneCnt = styled.div`
  margin-top: 20px;
`;
const MyIntroduce = styled.div`
  margin-top: 40px;
  height: 170px;
  background-color: gray;
`;
const InputStyle = styled.input`
  padding: 10px;

  background-color: #cab0c0;
  border-radius: 10px;
  border-style: none;
  width: 180px;
  font-size: 15px;
  font-weight: 700;
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
  padding: 30px;
`;
const ImgAndNameWrap = styled.div`
  padding: 10px;
  margin: auto 40px;
`;
const ImgWrap = styled.div``;
const ImgChange = styled.img`
  width: 300px;
  height: 300px;
  margin: auto 40px;
  position: relative;
`;
const NameContainer = styled.div`
  width: 100%;
`;
const NickNameWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 36px;
`;
const NameChange = styled.div`
  font-size: 60px;
`;
const EditIcon = styled(AiFillEdit)`
  font-size: 40px;
  margin-left: 20px;
  cursor: pointer;
`;
const MannerWrap = styled.div`
  padding: 80px;
  margin: auto 40px;
`;
const MannerContainer = styled.div``;
const ReceiveManner = styled.p`
  font-size: 60px;
`;
const MannerBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MannerDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 40px;
  border-radius: 40px;
  background-color: gray;
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
  padding: 10px;
`;
const ChangePost = styled.div`
  display: flex;
  margin-left: 130px;
  font-size: 40px;
  margin-bottom: 20px;
  position: relative;
  text-decoration: none;
`;
const GoMyPost = styled.div`
  cursor: pointer;
  color: #333;
  text-decoration: none;
  display: inline-block;
  padding: 15px 0;
  position: relative;
  &::after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #ffb000;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover::after {
    width: 100%;
    left: 0;
  }
`;
const GoLiked = styled.div`
  margin-left: 100px;
  cursor: pointer;
  color: #333;
  text-decoration: none;
  display: inline-block;
  padding: 15px 0;
  position: relative;
  &::after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #ffb000;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

export const LikedWrapper = styled.div`
  padding: 0 1.23rem;
`;
export const LikedContainer = styled.div`
  margin-left: 6rem;
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
