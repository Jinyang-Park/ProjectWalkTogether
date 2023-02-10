import React from "react";
import styled from "styled-components";

const MainPage = () => {
  return (
    <>
      <StyledMainContainer>
        <SelectRegionBtnWrapper></SelectRegionBtnWrapper>

        <div>배너슬라이드</div>

        <div>
          <span style={{ fontSize: 20, fontWeight: "bold" }}>신발신는중</span>
          <div
            style={{
              display: "flex",
            }}
          >
            <Content>
              <div>사진</div>

              <InsideText>
                <span style={{ fontSize: 15, fontWeight: "regular" }}>타이틀</span>
                <Line></Line>
                <div>
                  <p style={{ fontSize: 13, fontWeight: "regular" }}>지역</p>
                  <p style={{ fontSize: 13, fontWeight: "regular" }}>시간</p>
                  <div>
                    <div>하트</div>
                  </div>
                </div>
              </InsideText>
            </Content>
            <Content>
              <span style={{ fontSize: 15, fontWeight: "regular" }}>타이틀</span>

              <p style={{ fontSize: 13, fontWeight: "regular" }}>지역</p>
              <p style={{ fontSize: 13, fontWeight: "regular" }}>시간</p>
            </Content>
            <Content>
              <span style={{ fontSize: 15, fontWeight: "regular" }}>타이틀</span>

              <p style={{ fontSize: 13, fontWeight: "regular" }}>지역</p>
              <p style={{ fontSize: 13, fontWeight: "regular" }}>시간</p>
            </Content>
            <Content>
              <span style={{ fontSize: 15, fontWeight: "regular" }}>타이틀</span>

              <p style={{ fontSize: 13, fontWeight: "regular" }}>지역</p>
              <p style={{ fontSize: 13, fontWeight: "regular" }}>시간</p>
            </Content>
          </div>
        </div>

        <p style={{ fontSize: 20, fontWeight: "bold" }}>뜨거운신발</p>

        <p style={{ fontSize: 20, fontWeight: "bold" }}>걷는 중</p>
      </StyledMainContainer>
    </>
  );
};

//전체를 감싸는 container 스타일
const StyledMainContainer = styled.div`
  width: 1600px;
  margin: auto;
`;
const SelectRegionBtnWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* flex-wrap: wrap; */
  /* justify-content: center; */
  gap: 10px;
`;

const Content = styled.div`
  width: 250px;
  height: 200px;
  background-color: orange;
  position: relative;
  margin: 30px;
  flex-direction: column;
`;
const Line = styled.div`
  border-top: 1px solid #444444;
  margin-top: 5px;
  margin-bottom: 3px;
  width: 230px;
`;

const InsideText = styled.div`
  margin-top: 90px;
`;
export default MainPage;
