import React, { useState } from 'react';
// import { collection, query, onSnapshot } from 'firebase/firestore';
// import { authService, dbService } from '../../common/firebase';
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';
// import { onAuthStateChanged } from 'firebase/auth';
// import styled from 'styled-components';

// //매칭전 신발신는중
// const FootOning = ({ testList }) => {
//   const { id } = useParams();
//   const [postList, setPostList] = useState([]);
//   useEffect(() => {
//     onAuthStateChanged(authService, (user) => {
//       if (user) {
//         const postCollectionRef = collection(dbService, 'Post');
//         const q = query(postCollectionRef);
//         const getPost = onSnapshot(q, (snapshot) => {
//           const testPost = snapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data(),
//           }));
//           setPostList(testPost);
//         });
//         return getPost;
//       }
//     });
//   }, []);

// import React, { useEffect } from 'react';
// import * as S from './CardSection.style';
// import { useNavigate } from 'react-router-dom';
// import { useSetRecoilState } from 'recoil';
// import { paramsState } from '../../pages/PostPage/Hooks/Rocoil/Atom';

// interface postProps {
//   post: any;
// }
// const CardSection = ({ post }: postProps) => {
//   // console.log('post', post.id);
//   const navigate = useNavigate();

//   return (
//     <>
//       {postList
//         .filter((item) => item.id === id)
//         .map((item) => {
//           return (
//             <>
//              <S.CardBox>
//       <S.CardSectionWrapper
//         onClick={() => {
//           setParams(post.id);
//           navigate(`/detailpage/${post.id}`);
//         }}
//       >
//         <S.ListItemWrapper>
//           <S.ListItemThumnail src={post.ThunmnailURL_Posting} />
//         </S.ListItemWrapper>
//         <S.ListItemThumnailTitle>{post.Title_Posting}</S.ListItemThumnailTitle>
//         <S.HashTag>#케이팝 #발라드</S.HashTag>
//         <S.ListItemContainer>
//           <S.LikedHeartFlex>
//             <S.ListItemAddress>{post.Address_Posting}</S.ListItemAddress>
//             <S.LikeBtnLine />
//           </S.LikedHeartFlex>
//           <S.ListItemDate>
//             {post.RsvDate_Posting}
//             {post.RsvHour_Posting}
//           </S.ListItemDate>
//         </S.ListItemContainer>
//       </S.CardSectionWrapper>
//     </S.CardBox>
//             </>
//           );
//         })}
//     </>
//   );
// };

// export default FootOning;

// const Content = styled.div`
//   margin: 0 auto;

//   width: 180px;
//   height: 180px;
//   background-color: orange;
// `;
// const Line = styled.div`
//   display: flex;
//   border-top: 1px solid #444444;
//   margin-top: 5px;
//   margin-bottom: 3px;
//   width: 170px;
//   margin-left: 10px;
// `;

// const InsideText = styled.div`
//   margin-top: 70px;
// `;

// const TwithH = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 10px;
// `;
// const SecondText = styled.div``;
