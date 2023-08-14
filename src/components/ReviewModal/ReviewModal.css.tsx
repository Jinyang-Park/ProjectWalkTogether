import styled from 'styled-components';

export const ReviewModalBox = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  transform: translate(-15%, -7%);
  width: 120%;
  height: 120%;
  z-index: 2;
  box-sizing: border-box;
  color: #24264e;
`;

export const ReviewModalContents = styled.form`
  width: 430px;
  height: 300px;
  position: relative;
  top: 10%;
  left: 30%;
  background-color: #bec5d7;
  /* box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75); */
  border-radius: 5px;
`;

export const SelectPerson = styled.div<{ selected: boolean }>`
  // selected 속성을 추가로 지정
  background-color: ${({ selected }) => (selected ? '#7d8bae' : 'white')};
  color: ${({ selected }) => (selected ? 'white' : ' #24264e')};
  padding: 5px 10px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
  width: 300px;
  height: 40px;
`;

export const SelectPersonBox = styled.div`
  width: 330px;
  height: 140px;
  background-color: #bec5d7;
  overflow: scroll;
  position: relative;
  top: 20px;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  margin: 0 auto;
  border-radius: 3px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  position: relative;
  top: 20px;
`;

export const ModalButtonWrapper = styled.div`
  margin: 0 auto;
  width: 330px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  top: 30px;
`;

export const ModalConfirmCancelButton = styled.button`
  width: 120px;
  height: 40px;
  margin: 5px;
  font-size: 15px;
  background-color: #7d8bae;
  color: #24264e;
  border-radius: 5px;
`;
