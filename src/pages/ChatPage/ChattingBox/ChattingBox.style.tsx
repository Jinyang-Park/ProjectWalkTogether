import styled from '@emotion/styled';

export const ChattingBox = styled.div`
  border: 1px solid #bec5d7;
  width: 577px;
  height: 564px;

  margin-top: 28px;
  border-radius: 4px;
`;

export const ChattingNickname = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 0px 2px 16px;
  gap: 8px;

  position: relative;
  width: 576px;
  height: 40px;

  /* light blue */
  /* background-color: blue; */
  border-bottom: 1px solid #bec5d7;
`;
export const ChattingContent = styled.div`
  height: 460px;
  width: 566px;
  /* border-right: 1px solid #bec5d7; */
  border-bottom: 1px solid #bec5d7;
  /* background-color: blue; */
`;

export const ChattingNicknamePhoto = styled.div`
  width: 24px;
  height: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ChattingNicknameto = styled.div`
  width: 120px;
  height: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #24264e;
  flex: none;
  order: 1;
  flex-grow: 0;
  overflow: hidden;
`;

export const ChattingInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  gap: 10px;

  position: relative;
  width: 566px;
  height: 64px;
  border-radius: 4px;
  /* border-right: 1px solid #bec5d7; */
`;

export const ChattingInputouter = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 79px 10px 16px;
  gap: 147px;

  width: 529px;
  height: 40px;

  background: #ffffff;
  /* light blue */

  border: 1px solid #bec5d7;
  border-radius: 33px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ChattingInput = styled.input`
  width: 331px;
  height: 20px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  color: #7d8bae;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ChattingButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px 1px 2px;
  gap: 10px;

  width: 16px;
  height: 18px;

  background-color: white;

  flex: none;
  order: 1;
  flex-grow: 0;
`;
