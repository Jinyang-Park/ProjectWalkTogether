import * as S from './InputInformation.style';
import MaterialUIPickers from '../Hooks/Calendar/MuiCalendar';
import MapContainer from '../../MapPage/Map/map';

function InputInformation() {
  return (
    <S.MapNInputBox>
      PostPageInputinfomation
      <S.MapBox>
        안녕하세요
        <S.KakaoMap>
          <MapContainer />
        </S.KakaoMap>
      </S.MapBox>
      <S.InputBox>
        <S.InputAdressBox>
          <input />
        </S.InputAdressBox>
        <S.InpuTimeBox>
          <MaterialUIPickers />
        </S.InpuTimeBox>
      </S.InputBox>
    </S.MapNInputBox>
  );
}

export default InputInformation;
