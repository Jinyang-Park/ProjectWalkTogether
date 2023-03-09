import styled from 'styled-components';

export const InputLayout = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const InputBox = styled.div`
  border-radius: 30px;

  width: 386px;
  height: 532px;
  margin: 0 auto;
  position: relative;
  top: 64px;
  bottom: 64px;

  box-shadow: 0 0 10px #bec5d7;
`;
export const Line = styled.div`
  height: 32px;
  background-color: white;
  width: 306px;
  margin: auto;
  border-bottom: 2px solid #bec5d7;
`;

export const join_box = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 34.5px;

  padding-bottom: 50px;
`;
export const Title_head = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 47px;
  font-family: 'SUITESemiBold';
  font-weight: 600;
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

export const PostList = styled.li`
  list-style: none;
`;
export const List = styled.li`
  list-style: none;
  font-family: 'SUITESemiBold';
  font-size: 12px;
  font-weight: 600;
`;
export const ListLayout = styled.li`
  display: flex;
`;
export const TextFont = styled.p`
  list-style: none;
  font-family: 'SUITESemiBold';
  font-size: 12px;
  font-weight: 600;
`;
export const Subfont = styled.p`
  font-family: 'SUITERegular';
  font-size: 12px;
`;

export const Text = styled.p`
  padding-left: 10px;
  font-family: 'SUITERegular';
  font-size: 12px;
`;

export const checkAllBtn = styled.div``;
export const checkBox_check03 = styled.div``;

export const DialogButton = styled.img`
  position: absolute;
  margin-top: 1px;
  width: 20px;
  height: 20px;
  left: 120px;
  background-size: cover;
`;
export const DialogButton2 = styled.img`
  position: absolute;
  margin-top: 1px;
  width: 20px;
  height: 20px;
  left: 195px;
  background-size: cover;
`;
export const DialogButton3 = styled.img`
  position: absolute;
  margin-top: 1px;
  width: 20px;
  height: 20px;
  left: 215px;
  background-size: cover;
`;

export const DialogButton4 = styled.img`
  position: absolute;
  margin-top: 1px;
  width: 20px;
  height: 20px;
  left: 200px;
  background-size: cover;
`;

export const Back = styled.div`
  text-align: center;
  margin-top: 16px;
`;

export const BackBtn = styled.button`
  font-family: 'SUITERegular';
  background-color: transparent;
`;

export const ModalTitle = styled.div`
  margin-top: 30px;
  font-size: 20px;
  font-family: 'SUITESemiBold';
  font-weight: 600;
`;
export const ModalContents = styled.div`
  margin-top: 10px;
  font-size: 15px;
  overflow: scroll;

  font-family: 'SUITERegular';
  height: 270px;
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
