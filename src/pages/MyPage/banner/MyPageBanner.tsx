import { async } from '@firebase/util';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { storage } from '../../../common/firebase';
import { dbService, authService } from '../../../common/firebase';

const MyPageBanner = (props: { uid: string }) => {
  const uid = props.uid;

  const [imageURL, setImageURL] = useState<string>('');
  useEffect(() => {
    getImageURL();
  }, []);
  const getImageURL = async () => {
    console.log(uid);

    const docRef = doc(dbService, 'user', uid);
    const docSnap = await getDoc(docRef);

    setImageURL(docSnap.data().bannerImg);
  };
  const onImageChange = (
    e: React.ChangeEvent<EventTarget & HTMLInputElement>
  ) => {
    e.preventDefault();
    const file = e.target.files;
    if (!file) return null;

    const storageRef = ref(
      storage,
      `files/userBanners/${authService.currentUser.uid}`
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
            bannerImg: downloadURL,
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onBannerClick = () => {};
  return (
    <BannerWrap onClick={onBannerClick}>
      <BannerImgLabel htmlFor='bannerInput'>
        <BannerImg src={imageURL} />
        <BannerImgBtn src={'/assets/editicon.png'} />
        <BannerImgInput type='file' id='bannerInput' onChange={onImageChange} />
      </BannerImgLabel>
    </BannerWrap>
  );
};
export default MyPageBanner;

const BannerWrap = styled.div`
  width: 100%;
  height: 293px;

  position: relative;
`;
const BannerImg = styled.img`
  width: 100%;
  height: 100%;

  background: #d1ddf5;
`;
const BannerImgLabel = styled.label``;
const BannerImgBtn = styled.img`
  width: 50px;
  height: 50px;
  right: 40px;
  bottom: 10px;

  cursor: pointer;

  border-radius: 50%;
  position: absolute;
`;
const BannerImgInput = styled.input`
  display: none;
`;
