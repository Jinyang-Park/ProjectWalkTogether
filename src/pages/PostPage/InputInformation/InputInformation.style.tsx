import styled from 'styled-components';
import { Input } from 'antd';

export const MapNInputBox = styled.div`
  width: 100%;
  display: flex;
  /* background-color: antiquewhite; */
  position: relative;
  top: -67px;
  margin-top: 112px;
  margin-bottom: 64px;
  flex-direction: column;
  align-items: center;
`;

export const Selection = styled.p`
  font-family: 'SUITERegular';
  position: relative;
  /* background-color: blue; */
  /* width: 100%; */
  right: 335px;
  font-size: 20px;
  font-weight: 500;
  color: #24264e;
  /* border-bottom: 2px solid #bec5d7; */
  justify-content: center;
  display: flex;
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
export const AddressIcon = styled.img`
  position: absolute;
  left: 285px;
  width: 24px;
  height: 24px;
  object-fit: contain;
`;
export const MapAddressTitle = styled.div`
  /* width: 100%; */
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  margin-bottom: 12px;
  /* justify-content: center; */
`;
export const CustomZoomControl = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  bottom: 180px;
  left: 818px;
  z-index: 1;
  gap: 3px;
  width: 44px;
  color: white;
`;
export const ZoomInButton = styled.span`
  width: 40px;
  height: 40px;
`;
export const ZoomOutButton = styled.span`
  width: 40px;
  height: 40px;
`;
export const FindMyLocationButton = styled.span`
  width: 40px;
  height: 40px;
`;
export const LinkToKaKaoNavibutton = styled.span`
  width: 40px;
  height: 40px;
`;

export const ZoomInSVG = styled.img`
  width: 40px;
  height: 40px;
`;

export const ZoomOutSVG = styled.img`
  width: 40px;
  height: 40px;
`;

export const FindMyLocationSVG = styled.img`
  width: 40px;
  height: 40px;
`;

export const LinkToKaKaoNaviSVG = styled.img`
  width: 40px;
  height: 40px;
`;

export const SearchSVG = styled.img`
  width: 40px;
  height: 40px;
`;
