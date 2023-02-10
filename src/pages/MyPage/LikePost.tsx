import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";

const LikePage = () => {
    return (
        <>
            <MyPageContainer>
                <LikedListWapper>
                    <LikedListItem>
                        <ListItemWrapper>
                            <ListItemThumnail src={"/assets/hodu.jpg"} />
                        </ListItemWrapper>
                        <ListItemThumnailTitle>
                            같이 음악 들으면서 걸어요
                        </ListItemThumnailTitle>
                        <ListItemContainer>
                            <LikedHeartFlex>
                                <ListItemAddress>
                                    서울특별시 강남구 청담동
                                </ListItemAddress>
                                <LikeBtnLine />
                            </LikedHeartFlex>
                            <ListItemDate>2/9(목) 19:40</ListItemDate>
                        </ListItemContainer>
                    </LikedListItem>
                    <LikedListItem>
                        <ListItemWrapper>
                            <ListItemThumnail src={"/assets/hodu.jpg"} />
                        </ListItemWrapper>
                        <ListItemThumnailTitle>
                            같이 음악 들으면서 걸어요
                        </ListItemThumnailTitle>
                        <ListItemContainer>
                            <LikedHeartFlex>
                                <ListItemAddress>
                                    서울특별시 강남구 청담동
                                </ListItemAddress>
                                <LikeBtnLine />
                            </LikedHeartFlex>
                            <ListItemDate>2/9(목) 19:40</ListItemDate>
                        </ListItemContainer>
                    </LikedListItem>
                    <LikedListItem>
                        <ListItemWrapper>
                            <ListItemThumnail src={"/assets/hodu.jpg"} />
                        </ListItemWrapper>
                        <ListItemThumnailTitle>
                            같이 음악 들으면서 걸어요
                        </ListItemThumnailTitle>
                        <ListItemContainer>
                            <LikedHeartFlex>
                                <ListItemAddress>
                                    서울특별시 강남구 청담동
                                </ListItemAddress>
                                <LikeBtnLine />
                            </LikedHeartFlex>
                            <ListItemDate>2/9(목) 19:40</ListItemDate>
                        </ListItemContainer>
                    </LikedListItem>
                    <LikedListItem>
                        <ListItemWrapper>
                            <ListItemThumnail src={"/assets/hodu.jpg"} />
                        </ListItemWrapper>
                        <ListItemThumnailTitle>
                            같이 음악 들으면서 걸어요
                        </ListItemThumnailTitle>
                        <ListItemContainer>
                            <LikedHeartFlex>
                                <ListItemAddress>
                                    서울특별시 강남구 청담동
                                </ListItemAddress>
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
    padding: 0 19px;
    margin: 0 auto;
    margin-left: 6rem;
    margin-right: 6rem;
`;
const LikedListWapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-decoration: none;
    justify-content: space-between;
`;
const LikedListItem = styled.div`
    width: 20vw;
    height: 20vw;
`;
const ListItemWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    overflow: hidden;
`;
const ListItemThumnail = styled.img`
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const ListItemThumnailTitle = styled.p`
    height: 48px;
    margin: 30px 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #212121;
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
    font-size: 15px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: -0.18px;
    margin-top: 10px;
    margin-bottom: 5px;
`;
const ListItemDate = styled.span`
    font-size: 15px;
    font-weight: 700;
    display: block;
`;
// const EpisodeDetail = styled.a`
//   cursor: pointer;
//   width: calc(50% - 6px);
//   margin-bottom: 35px;
// `;
// const EpisodeImg = styled.div`
//   position: relative;
//   width: 100%;
//   height: 32.8888vw;
//   max-height: 201px;
//   min-height: 83.734px;
//   margin-bottom: 10px;
//   overflow: hidden;
// `;
// const EpisodeTitle = styled.h1`
//   height: 48px;
//   margin: 0 0 7px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   font-size: 18px;
//   font-weight: 600;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.33;
//   letter-spacing: normal;
//   text-align: left;
//   color: #212121;
//   word-break: keep-all;
//   font-family: SourceHanSerifK, serif;
// `;
// const EpisodeContents = styled.h2`
//   height: 37px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   font-size: 12px;
//   font-weight: 400;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.58;
//   letter-spacing: -0.3px;
//   text-align: left;
//   color: #212121;
//   word-break: keep-all;
//   margin: 0 0 12px;
// `;
// const EpisodeLocationWrap = styled.div`
//   border-top: 1px solid #ddd;
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   align-items: flex-start;
//   padding-top: 5px;
//   grid-gap: 12px;
//   gap: 12px;
// `;
// const EpisodeLocation = styled.p`
//   font-size: 12px;
//   line-height: 19px;
//   letter-spacing: -0.18px;
//   text-align: left;
//   color: #6b6766;
//   margin: 0;
// `;
export default LikePage;
