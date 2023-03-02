import React from 'react';
import * as S from './MapPage.style';
import InfoList from './InfoList/InfoList';
import MapContainer from './Map/map';
import FilterBar from './InfoList/Filter/Filter';
import Category from '../Category/Category';

import CommonStyles from './../../styles/CommonStyles';

import {
  doc,
  getDocs,
  collection,
  query,
  orderBy,
  where,
} from 'firebase/firestore';
import { dbService } from '../../common/firebase';
import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';
import type { DocumentAny } from '../../../src/assets/constants/types';

import useGeolocation from '../../hooks/useGeoLocation';

import { Cetegory } from '../../Rocoil/Atom';

const MapPage = () => {
  // firestore에서 데이터 'Post' 가져오기
  const [Post, setPosting] = useState<DocumentAny[]>([]);
  const [AllPost, setAllPosting] = useState<DocumentAny[]>([]);
  const cetegory = useRecoilValue(Cetegory);

  // firestore에서 데이터 'Post' 가져오기
  const syncpostingstatewithfirestore = () => {
    console.log(cetegory);
    const q = query(
      collection(dbService, 'Post'),
      // where('Category_Posting', '==', cetegory),
      orderBy('TimeStamp_Posting', 'desc')
    );
    getDocs(q).then((querySnapshot) => {
      // DocumentAny[] 는 any 아닌척 하고 싶어서 대신 작성함 types.d.ts
      // 타입 지정은 아래쪽과 같이 해야함
      const firestorePostingList: DocumentAny[] = [];
      querySnapshot.forEach((doc) => {
        firestorePostingList.push({
          id: doc.id,
          UID: doc.data().UID,
          Title_Posting: doc.data().Title_Posting,
          Description_Posting: doc.data().Description_Posting,
          Category_Posting: doc.data().Category_Posting,
          PostingID_Posting: doc.data().PostingID_Posting,
          TimeStamp_Posting: doc.data().TimeStamp_Posting,
          MeetLatitude_Posting: doc.data().MeetLatitude_Posting,
          MeetLongitude_Posting: doc.data().MeetLongitude_Posting,
          NowLatitude_Posting: doc.data().NowLatitude_Posting,
          NowLongitude_Posting: doc.data().NowLongitude_Posting,
          RsvDate_Posting: doc.data().RsvDate_Posting,
          RsvHour_Posting: doc.data().RsvHour_Posting,
          Nickname: doc.data().Nickname,
          Address_Posting: doc.data().Address_Posting,
          ThumbnailURL_Posting: doc.data().ThumbnailURL_Posting,
          LikedUsers: doc.data().LikedUsers,
          Hashtag_Posting: doc.data().Hashtag_Posting,
          View: doc.data().View,
        });
      });
      setPosting(firestorePostingList);
      setAllPosting(firestorePostingList);
    });
  };
  useEffect(() => {
    syncpostingstatewithfirestore();
  }, [cetegory]);

  useEffect(() => {
    setAllPosting(Post);
  }, [Post]);

  // console.log('AllPost', AllPost)
  // AllPost 는 전체 포스팅 리스트
  // AllPost State 를 FilterBar 에서 사용하기 위해
  // AllPost 를 Post 로 넘겨줌
  // 예시
  // const FilterBar = ({ setPostCategory, setShow }: any) => {
  //   const Post = useRecoilValue(PostState)
  //   console.log('Post', Post)
  //   return (
  //     <S.FilterBarContainer>
  //       <S.FilterBarWrapper>
  //         <S.FilterBarTitle>카테고리</S.FilterBarTitle>
  // PostState 를 사용해서 Post 를 가져옴
  //         <S.FilterBarCategory>
  //           <Category
  //             setPostCategory={setPostCategory}
  //             setShow={setShow}
  //             Post={Post}
  //           />
  //         </S.FilterBarCategory>

  // console.log('Post', Post)

  // FilterBar 에 넘겨줄 함수
  // const setPostCategory = (value: string) => {
  //   console.log('value', value)
  //   if (value === '전체') {
  //     setPosting(AllPost)
  //   } else {
  //     const filteredPost = AllPost.filter((post) => {
  //       return post.Category_Posting === value
  //     })
  //     setPosting(filteredPost)
  //   }

  return (
    <CommonStyles>
      <S.MapPageContainer>
        <S.MapPageHeader>
          <S.MapKaKaoMapContainer>
            {/* Map Container */}
            <MapContainer Post={Post} />
          </S.MapKaKaoMapContainer>
        </S.MapPageHeader>

        <S.MapPageContentsWrapper>
          <S.MapPageTitle>같이 걸을래요?</S.MapPageTitle>
          <S.UserInfoContainer>
            {/* Filter Bar */}
            <FilterBar
              setPostCategory={function (
                value: React.SetStateAction<string>
              ): void {
                throw new Error('Function not implemented.');
              }}
              setShow={function (value: React.SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
              }}

              // 프롭스로 넘겨줄 함수를 만들어서 넘겨줘야함
            />
            {/* Posting List */}
            <InfoList Post={Post} />
          </S.UserInfoContainer>
        </S.MapPageContentsWrapper>
      </S.MapPageContainer>
    </CommonStyles>
  );
};

export default MapPage;
