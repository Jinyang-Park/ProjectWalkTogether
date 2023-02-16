import * as S from './InputInformation.style';
import MaterialUIPickers from '../Hooks/Calendar/MuiCalendar';
import BasicDatePicker from '../Hooks/Calendar/MuiDate';
// import MapContainer from '../../MapPage/Map/map';
import MuiTime from '../Hooks/Calendar/MuiTime';

function InputInformation() {
  return (
    <S.MapNInputBox>
      PostPageInputinfomation
      <S.MapBox>
        안녕하세요
        <S.KakaoMap>{/* <MapContainer /> */}</S.KakaoMap>
      </S.MapBox>
      <S.InputBox>
        <S.InputAdressBox>
          <input />
        </S.InputAdressBox>
        <S.InpuDayBox>{/* <BasicDatePicker /> */}</S.InpuDayBox>

        <S.InputTimeBox>
          <MaterialUIPickers />

          {/* <MuiTime /> */}
        </S.InputTimeBox>
      </S.InputBox>
    </S.MapNInputBox>
  );
}

export default InputInformation;
