import styled from 'styled-components';

export const InputLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const InputBox = styled.div`
  border-radius: 30px;

  width: 460px;
  height: 532px;
  margin: 0 auto;
  position: relative;
  top: 100px;

  box-shadow: 0 0 10px #bec5d7;
`;
export const join_box = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 60px;
  padding-bottom: 40px;
`;
export const Title_head = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 40px;
`;

export const checkBox_check00 = styled.div`
  position: relative;
`;

export const checkBox_check01 = styled.div`
  position: relative;
`;
export const Agree01 = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const checkBox_check02 = styled.div`
  position: relative;
`;

export const List = styled.li`
  list-style: none;
`;
export const ListLayout = styled.li`
  display: flex;
`;

export const Text = styled.p`
  padding-left: 10px;
`;

export const checkAllBtn = styled.div``;
export const checkBox_check03 = styled.div``;

export const DialogButton = styled.img`
  width: 25px;
  height: 25px;

  background-size: cover;
`;

export const Back = styled.div`
  text-align: center;
`;

export const BackBtn = styled.button`
  background-color: transparent;
`;

export const ModalTitle = styled.div`
  margin-top: 30px;
  font-size: 32px;
`;
export const ModalContents = styled.div`
  margin-top: 10px;
  font-size: 18px;
  overflow: scroll;

  height: 200px;
  width: 300px;
`;

export const CloseButton = styled.button`
  background: none;
  color: gray;
  border: 2px solid;
  padding: 5px 20px;
  font-size: 18px;
  transition: color 0.2s, border-color 1s, transform 0.5s;
  position: absolute;
  bottom: 10px;
  right: 20px;

  cursor: pointer;

  &:hover {
    border-color: black;
    color: black;
    box-shadow: 0 0.5em 0.5em -0.4em;
    transform: translateY(-5px);
    cursor: pointer;
  }
`;
export const AgreeBox = styled.div`
  display: flex;

  display: block;
  width: 100%;
  height: 100%;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
`;

export const AgreeBtn = styled.button<{ state: boolean }>`
  width: 306px;
  height: 46px;
  background-color: #7d8bae;
  color: white;
  border-radius: 5px;
  background: ${(props) => (props.state ? '#7d8bae;' : '#C8D1E0')};
  @media screen and (max-width: 390px) {
    width: 306px;
    height: 46px;
    font-size: 15px;
    line-height: 13px;
  }
`;
