import React from "react";
import styled from "styled-components";
import { Categoryitem, ImgTitle, Img } from "../components/CategoryAll";
import { HeartIcon } from "./DetailPage";

//컨텐츠를 컴포넌트 폴더로 이동하여 간소화 할 예정
const MainPage = () => {
    return (
        <>
            <Banner src="/assets/thumbnailImg.png"></Banner>
            <StyledMainContainer>
                <Category>
                    <Categoryitem>
                        <Img src="/assets/dog.png"></Img>
                        <ImgTitle>강아지</ImgTitle>
                    </Categoryitem>

                    <Categoryitem>
                        <Img src="/assets/book.png" />
                        <ImgTitle>책</ImgTitle>
                    </Categoryitem>
                </Category>

                <div>
                    <span style={{ fontSize: 20, fontWeight: "bold" }}>
                        신발신는중
                    </span>
                    <ContentList>
                        <Content>
                            <div>사진</div>

                            <InsideText>
                                <span
                                    style={{ fontSize: 15, fontWeight: "bold" }}
                                >
                                    타이틀
                                </span>
                                <Line></Line>
                                <TwithH>
                                    <SecondText>
                                        <p
                                            style={{
                                                fontSize: 13,
                                                fontWeight: "regular",
                                            }}
                                        >
                                            지역
                                        </p>
                                        <p
                                            style={{
                                                fontSize: 13,
                                                fontWeight: "regular",
                                            }}
                                        >
                                            시간
                                        </p>
                                    </SecondText>
                                    <HeartIcon>하트</HeartIcon>
                                </TwithH>
                            </InsideText>
                        </Content>
                        <Content>
                            <div>사진</div>

                            <InsideText>
                                <span
                                    style={{ fontSize: 15, fontWeight: "bold" }}
                                >
                                    타이틀
                                </span>
                                <Line></Line>
                                <TwithH>
                                    <SecondText>
                                        <p
                                            style={{
                                                fontSize: 13,
                                                fontWeight: "regular",
                                            }}
                                        >
                                            지역
                                        </p>
                                        <p
                                            style={{
                                                fontSize: 13,
                                                fontWeight: "regular",
                                            }}
                                        >
                                            시간
                                        </p>
                                    </SecondText>
                                    <HeartIcon>하트</HeartIcon>
                                </TwithH>
                            </InsideText>
                        </Content>
                        <Content>
                            <div>사진</div>

                            <InsideText>
                                <span
                                    style={{ fontSize: 15, fontWeight: "bold" }}
                                >
                                    타이틀
                                </span>
                                <Line></Line>
                                <TwithH>
                                    <SecondText>
                                        <p
                                            style={{
                                                fontSize: 13,
                                                fontWeight: "regular",
                                            }}
                                        >
                                            지역
                                        </p>
                                        <p
                                            style={{
                                                fontSize: 13,
                                                fontWeight: "regular",
                                            }}
                                        >
                                            시간
                                        </p>
                                    </SecondText>
                                    <HeartIcon>하트</HeartIcon>
                                </TwithH>
                            </InsideText>
                        </Content>
                        <Content>
                            <div>사진</div>

                            <InsideText>
                                <span
                                    style={{ fontSize: 15, fontWeight: "bold" }}
                                >
                                    타이틀
                                </span>
                                <Line></Line>
                                <TwithH>
                                    <SecondText>
                                        <p
                                            style={{
                                                fontSize: 13,
                                                fontWeight: "regular",
                                            }}
                                        >
                                            지역
                                        </p>
                                        <p
                                            style={{
                                                fontSize: 13,
                                                fontWeight: "regular",
                                            }}
                                        >
                                            시간
                                        </p>
                                    </SecondText>
                                    <HeartIcon>하트</HeartIcon>
                                </TwithH>
                            </InsideText>
                        </Content>
                    </ContentList>
                </div>

                <span style={{ fontSize: 20, fontWeight: "bold" }}>
                    뜨거운신발
                </span>

                <span style={{ fontSize: 20, fontWeight: "bold" }}>
                    걷는 중
                </span>
            </StyledMainContainer>
        </>
    );
};

//전체를 감싸는 container 스타일

const StyledMainContainer = styled.div`
    width: 1350px;
    margin: auto;
    flex-wrap: wrap;

    @media screen and (max-width: 1400px) {
        width: 1200px;
    }
    @media screen and (max-width: 1300px) {
        width: 1100px;
    }
    @media screen and (max-width: 1024px) {
        width: 90%;
    }
    @media screen and (max-width: 780px) {
        width: 95%;
    }
`;

const Banner = styled.img`
    width: 100%;
`;

const ContentList = styled.div`
    flex-wrap: wrap;
    display: flex;
`;
const Category = styled.div`
    width: 450px;
    margin: 20px;
    margin: auto;
    background-color: orange;
`;

const Content = styled.div`
    width: 250px;
    height: 200px;
    background-color: orange;

    margin: 40px;
`;
const Line = styled.div`
    border-top: 1px solid #444444;
    margin-top: 5px;
    margin-bottom: 3px;
    width: 230px;
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
