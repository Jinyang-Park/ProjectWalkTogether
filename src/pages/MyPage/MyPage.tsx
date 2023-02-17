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
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
import { FaHandPeace } from 'react-icons/fa';
import { FaHandPaper } from 'react-icons/fa';
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
      <div>test</div>
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
                <AlertPhone>xxx-xxxx-xxxx</AlertPhone>
              </NickNameWrap>
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
              <ThumbUp />
              <MannerScore>2</MannerScore>
              <MannerComment>친절하고 매너가 좋아요!</MannerComment>
            </MannerDetail>
            <MannerDetail>
              <HandPeace />
              <MannerScore>5</MannerScore>
              <MannerComment>재미있어요!</MannerComment>
            </MannerDetail>
            <MannerDetail>
              <HeartIcon />
              <MannerScore>1</MannerScore>
              <MannerComment>자상하고 편안했어요!</MannerComment>
            </MannerDetail>
            <MannerDetail>
              <HandPaper />
              <MannerScore>2</MannerScore>
              <MannerComment>친절하고 매너가 좋아요!</MannerComment>
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
          <LikePage />
        </LikedWrapper>
      </MyPageWrapper>
    </CommonStyles>
  );
};
const ImgNickNameMannerWrap = styled.div`
  width: 1024px;
`;
const BannerImgWrap = styled.div`
  width: 1024px;
  height: 288px;
`;
const BannerImg = styled.img`
  width: 1024px;
  height: 288px;
  position: relative;
`;
const ImgEditBtn = styled(BsFillBrushFill)`
  font-size: 40px;
  cursor: pointer;
  color: red;
  margin-left: 950px;
  margin-top: -50px;
  position: absolute;
`;
const ImgChangeBtn = styled(FaPen)`
  position: absolute;
  cursor: pointer;
  margin-left: 180px;
  margin-top: -25px;
  color: red;
`;
const AlertPhone = styled.div`
  width: 171px;
  height: 19px;
  margin-left: 300px;
  margin-top: -30px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #515151;
`;
const DoneCnt = styled.div``;
const MyIntroduce = styled.div`
  width: 653px;
  height: 67px;
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
  margin: auto 40px;
`;
const ImgAndNameContainer = styled.div`
  display: flex;
`;
const ImgAndNameWrap = styled.div`
  padding: 10px;
  margin: auto 40px;
`;
const ImgWrap = styled.div``;
const ImgChange = styled.img`
  width: 163px;
  height: 163px;
  margin: auto 40px;
  position: relative;
`;
const NameContainer = styled.div`
  width: 646px;
  height: 64px;
  left: 265px;
  top: 374px;
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
  margin: auto 40px;
`;
const MannerContainer = styled.div`
  margin: auto 40px;
`;
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
  align-items: center;
  margin-bottom: 20px;
  margin-top: 40px;
  border-radius: 40px;
  background-color: gray;
`;
const ThumbUp = styled(BsFillHandThumbsUpFill)`
  font-size: 30px;
  margin: 10px;
`;
const HeartIcon = styled(BsFillSuitHeartFill)`
  font-size: 30px;
  margin: 10px;
`;
const HandPeace = styled(FaHandPeace)`
  font-size: 30px;
  margin: 10px;
`;
const HandPaper = styled(FaHandPaper)`
  font-size: 30px;
  margin: 10px;
`;
const MannerScore = styled.p`
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
`;
const MannerComment = styled.div`
  font-size: 12px;
  padding: 10px;
`;
const ChangePost = styled.div`
  display: flex;
  margin: auto 40px;
  font-size: 20px;
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
export const LikedWrapper = styled.div``;
export const LikedContainer = styled.div``;
const LikePostTitle = styled.h1`
  margin: 0 0 0.25rem;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.46;
  letter-spacing: -0.0375rem;
  text-align: left;
  color: #212121;
  padding: 0 1.1875rem;
`;
export default MyPage;
