import styled from 'styled-components';

export const InputLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
  margin-bottom: 64px;
`;
export const InputBox = styled.div`
  width: 386px;
  height: 532px;

  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(190, 197, 215, 0.8);
  z-index: 1;
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

  padding-bottom: 80px;
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
  left: 850px;
  background-size: cover;
`;

export const DialogButton4 = styled.img`
  position: absolute;
  margin-top: 1px;
  width: 20px;
  height: 20px;
  left: 835px;
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

export const CloseButton = styled.img`
  background: none;
  color: gray;
  position: absolute;
  top: 10px;
  right: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
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
