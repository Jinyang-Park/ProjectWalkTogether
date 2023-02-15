import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

const LikePage = () => {
  return (
    <>
      <MyPageContainer>
        <LikedListWapper>
          <LikedListItem>
            <ListItemWrapper>
              <ListItemThumnail src={'/assets/hodu.jpg'} />
            </ListItemWrapper>
            <ListItemThumnailTitle>
              <div>같이 음악 들으면서 걸어요</div>
              <TagName># 케이팝 # 발라드 # 인디</TagName>
            </ListItemThumnailTitle>
            <ListItemContainer>
              <LikedHeartFlex>
                <ListItemAddress>서울특별시 강남구 청담동</ListItemAddress>
                <LikeBtnLine />
              </LikedHeartFlex>
              <ListItemDate>2/9(목) 19:40</ListItemDate>
            </ListItemContainer>
          </LikedListItem>
          <LikedListItem>
            <ListItemWrapper>
              <ListItemThumnail src={'/assets/hodu.jpg'} />
            </ListItemWrapper>
            <ListItemThumnailTitle>
              <div>같이 음악 들으면서 걸어요</div>
              <TagName># 케이팝 # 발라드 # 인디</TagName>
            </ListItemThumnailTitle>
            <ListItemContainer>
              <LikedHeartFlex>
                <ListItemAddress>서울특별시 강남구 청담동</ListItemAddress>
                <LikeBtnLine />
              </LikedHeartFlex>
              <ListItemDate>2/9(목) 19:40</ListItemDate>
            </ListItemContainer>
          </LikedListItem>
          <LikedListItem>
            <ListItemWrapper>
              <ListItemThumnail src={'/assets/hodu.jpg'} />
            </ListItemWrapper>
            <ListItemThumnailTitle>
              <div>같이 음악 들으면서 걸어요</div>
              <TagName># 케이팝 # 발라드 # 인디</TagName>
            </ListItemThumnailTitle>
            <ListItemContainer>
              <LikedHeartFlex>
                <ListItemAddress>서울특별시 강남구 청담동</ListItemAddress>
                <LikeBtnLine />
              </LikedHeartFlex>
              <ListItemDate>2/9(목) 19:40</ListItemDate>
            </ListItemContainer>
          </LikedListItem>
          <LikedListItem>
            <ListItemWrapper>
              <ListItemThumnail src={'/assets/hodu.jpg'} />
            </ListItemWrapper>
            <ListItemThumnailTitle>
              <div>같이 음악 들으면서 걸어요</div>
              <TagName># 케이팝 # 발라드 # 인디</TagName>
            </ListItemThumnailTitle>
            <ListItemContainer>
              <LikedHeartFlex>
                <ListItemAddress>서울특별시 강남구 청담동</ListItemAddress>
                <LikeBtnLine />
              </LikedHeartFlex>
              <ListItemDate>2/9(목) 19:40</ListItemDate>
            </ListItemContainer>
          </LikedListItem>
        </LikedListWapper>
      </MyPageContainer>
    </>
  );
};

const MyPageContainer = styled.div`
  margin: auto 40px;
`;
const LikedListWapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  justify-content: space-between;
`;
const LikedListItem = styled.div`
  width: 180px;
  height: 96px;
`;
const ListItemWrapper = styled.div`
  width: 180px;
  height: 96px;
  margin-bottom: 10px;
`;
const ListItemThumnail = styled.img`
  width: 180px;
  height: 96px;
`;
const ListItemThumnailTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
`;
const TagName = styled.div`
  font-size: 10px;
  color: #4389fa;
`;

const ListItemContainer = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 5px;
`;
const LikedHeartFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* justify-items: center; */
`;

export const LikeBtnLine = styled(AiOutlineHeart)`
  margin-top: 4px;
  font-size: 24px;
  cursor: pointer;
`;
const ListItemAddress = styled.p`
  font-size: 13px;
  font-weight: 700;

  margin-top: 10px;
  margin-bottom: 5px;
`;
const ListItemDate = styled.span`
  font-size: 15px;
  font-weight: 700;
  display: block;
`;

export default LikePage;
