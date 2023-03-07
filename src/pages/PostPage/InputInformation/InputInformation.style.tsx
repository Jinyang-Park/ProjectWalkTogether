import styled from 'styled-components';
import { Input } from 'antd';

export const MapNInputBox = styled.div`
  width: 100%;
  display: flex;
  /* background-color: antiquewhite; */
  position: relative;
  top: -67px;
  margin-top: 112px;
  flex-direction: column;
  align-items: center;
`;

export const Selection = styled.div`
  position: relative;
  /* background-color: blue; */
  right: 336px;
  font-size: 20px;
  font-weight: 500;
  color: #24264e;
`;

export const borderline = styled.div`
  width: 863px;
  height: 27px;
  border-top: 2px solid #bec5d7;
  position: relative;
  top: 1px;
`;

export const InputBox = styled.div`
  /* background-color: #d07171; */
  width: 863px;
  height: 50px;
  display: flex;
  position: relative;
  bottom: 40px;
`;

export const MapBox = styled.div`
  width: 863px;
  height: 436px;
  /* background-color: gray; */
  border-top: 1px;
`;

export const KakaoMap = styled.div`
  width: 863px;
  height: 363px;
  background-color: white;
  position: relative;
  top: 5px;
`;

//인풋박스
export const InputAdressBox = styled.form`
  width: 384px;
  height: 36.5px;
  position: relative;
  border: 2px solid #bec5d7;
  /* background-color: yellow; */
  border-radius: 4px;
`;

//인풋창
export const InputAdress = styled(Input)`
  width: 334px;
  height: 20px;
  position: relative;
  top: 5px;
  left: 10px;
  font-weight: 100;
  color: #aeb1b7;

  input:focus {
    outline: none;
  }
`;

export const InpuDayBox = styled.div`
  width: 250px;
  height: 40px;
  /* background-color: orange; */
  margin-left: 9px;
  font-size: 10px;
  border: 2px solid #bec5d7;
  border-radius: 4px;
`;

export const InputTimeBox = styled.div`
  width: 219px;
  height: 40px;
  margin-left: 9px;
  border: 2px solid #bec5d7;
  border-radius: 4px;
`;
