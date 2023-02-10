import React from "react";
import styled from "styled-components";
import { FiChevronLeft } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";

const ChattingPage = () => {
    return (
        <div>
            <Boxcontainer>
                <Boxcontents>
                    <TittleBox>
                        <BackBtn>
                            <FiChevronLeft />
                        </BackBtn>
                    </TittleBox>
                    <ChattingBox></ChattingBox>
                    <ChattingInputBox>
                        <PlusBtn>
                            <HiOutlinePlus />
                        </PlusBtn>
                        <ChattingInput placeholder="메세지를 입력해주세요."></ChattingInput>
                        <SendBtn>▶</SendBtn>
                    </ChattingInputBox>
                </Boxcontents>
            </Boxcontainer>
        </div>
    );
};
export default ChattingPage;

const Boxcontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: blue; */
    width: 100%;
    height: 100vh;
`;

const Boxcontents = styled.div`
    border-radius: 50px;
    border: 1px solid black;
    background-color: #d1d1d1;
    width: 40%;
    height: 80%;
    margin: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border: none;
`;

const TittleBox = styled.div`
    margin: 10px;
    height: 70px;
    width: 100%;
    /* border-bottom: solid 1px black; */
    font-size: 40px;

    /* background-color: aqua; */
`;

const ChattingBox = styled.div`
    width: 100%;
    height: 70%;
    background-color: white;
    border: 1px solid #d1d1d1;
    position: relative;
    //스크롤
    overflow-y: scroll;
`;

const ChattingInputBox = styled.div`
    width: 100%;
    height: 65px;
    background-color: gray;
    position: relative;
    bottom: 25px;
    display: flex;
`;

//대화입력창 플러스버튼
const PlusBtn = styled.button`
    width: 50px;
    height: 50px;
    font-size: 25px;
    position: relative;
    left: 10%;
    border: none;
    top: 6px;
`;

const ChattingInput = styled.input`
    width: 65%;
    height: 48px;
    left: 10%;
    position: relative;
    border: none;
    top: 6px;
    outline: none;
`;

const SendBtn = styled.button`
    width: 50px;
    height: 50px;
    position: relative;
    left: 10%;
    border: none;
    top: 6px;
    background-color: white;
`;

const BackBtn = styled.button`
    width: 80px;
    height: 80px;
    position: relative;
    left: 5px;
    border: none;
    top: 10px;
    background-color: #d1d1d1;
    font-size: 70px;
`;
