import React from 'react';
import styled from 'styled-components';
// import { Categoryitem, ImgTitle, Img } from '../../components/CategoryAll';
// import { HeartIcon } from "../DetailPage/DetailPage";
import CommonStyles from './../../styles/CommonStyles';
import CategoryAll from './CategoryAll/CategoryAll';

//컨텐츠를 컴포넌트 폴더로 이동하여 간소화 할 예정
const MainPage = () => {
  return (
    <CommonStyles>
      <Banner src="/assets/thumbnailImg.png" />
      <StyledMainContainer>
        <CategoryAll />
        <div>
          <span style={{ fontSize: 20, fontWeight: 'bold' }}>신발신는중</span>
          <ContentList>
            <Content>
              <div>사진</div>

              <InsideText>
                <span style={{ fontSize: 15, fontWeight: 'bold' }}>타이틀</span>
                <Line></Line>
                <TwithH>
                  <SecondText>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 'regular',
                      }}
                    >
                      지역
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 'regular',
                      }}
                    >
                      시간
                    </p>
                  </SecondText>
                  {/* <HeartIcon>하트</HeartIcon> */}
                </TwithH>
              </InsideText>
            </Content>
            <Content>
              <div>사진</div>

              <InsideText>
                <span style={{ fontSize: 15, fontWeight: 'bold' }}>타이틀</span>
                <Line></Line>
                <TwithH>
                  <SecondText>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 'regular',
                      }}
                    >
                      지역
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 'regular',
                      }}
                    >
                      시간
                    </p>
                  </SecondText>
                  {/* <HeartIcon>하트</HeartIcon> */}
                </TwithH>
              </InsideText>
            </Content>
            <Content>
              <div>사진</div>

              <InsideText>
                <span style={{ fontSize: 15, fontWeight: 'bold' }}>타이틀</span>
                <Line></Line>
                <TwithH>
                  <SecondText>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 'regular',
                      }}
                    >
                      지역
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 'regular',
                      }}
                    >
                      시간
                    </p>
                  </SecondText>
                  {/* <HeartIcon>하트</HeartIcon> */}
                </TwithH>
              </InsideText>
            </Content>
            <Content>
              <div>사진</div>

              <InsideText>
                <span style={{ fontSize: 15, fontWeight: 'bold' }}>타이틀</span>
                <Line></Line>
                <TwithH>
                  <SecondText>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 'regular',
                      }}
                    >
                      지역
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 'regular',
                      }}
                    >
                      시간
                    </p>
                  </SecondText>
                  {/* <HeartIcon>하트</HeartIcon> */}
                </TwithH>
              </InsideText>
            </Content>
          </ContentList>
        </div>

        <span style={{ fontSize: 20, fontWeight: 'bold' }}>뜨거운신발</span>

        <span style={{ fontSize: 20, fontWeight: 'bold' }}>걷는 중</span>
      </StyledMainContainer>
    </CommonStyles>
  );
};

//전체를 감싸는 container 스타일

const StyledMainContainer = styled.div`
  margin: 0 auto;
  width: 868px;
  flex-wrap: wrap;
  @media screen and (max-width: 1024px) {
    width: 868px;
  }
  @media screen and (max-width: 430px) {
    width: 364px;
  }
`;

const Banner = styled.img`
  display: flex;

  @media screen and (max-width: 1024px) {
    width: 1024px;
  }
  @media screen and (max-width: 430px) {
    width: 430px;
  }
`;

const ContentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;
const Category = styled.div`
  width: 450px;
  margin: 20px;
  margin: auto;
  background-color: orange;
`;

const Content = styled.div`
  margin: 0 auto;

  width: 180px;
  height: 180px;
  background-color: orange;
`;
const Line = styled.div`
  display: flex;
  border-top: 1px solid #444444;
  margin-top: 5px;
  margin-bottom: 3px;
  width: 170px;
  margin-left: 10px;
`;

const InsideText = styled.div`
  margin-top: 70px;
`;

const TwithH = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const SecondText = styled.div``;

export default MainPage;
