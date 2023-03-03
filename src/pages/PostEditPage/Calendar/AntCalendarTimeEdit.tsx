import React, { useEffect } from 'react';
import { TimePicker } from 'antd';
import type { Dayjs } from 'dayjs';

import { useRecoilState } from 'recoil';

import { ConfigProvider } from 'antd';
import ko_KR from 'antd/locale/ko_KR';
import { blue } from '@mui/material/colors';
import { TimeEdit } from '../../../Rocoil/Atom';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import moment from 'moment';

const AntCalendarTimeEdit: React.FC = () => {
  const format = 'HH:mm';
  const [reserveTime, setReserveTime] = useRecoilState<any>(TimeEdit);

  // db 시간 가져오기
  const { state } = useLocation();
  console.log(state);

  // const year = state.TimeStamp_Posting.slice(0, 4);
  // console.log(year);

  // const change = state.RsvHour_Posting.slice(3);

  // const Time2 = change.split(':');
  // // console.log(Time);

  // const hour2 = Time2[0];
  // // console.log(hour);

  // const min2 = Time2[1];
  // // console.log(min);

  const postingHour =
    state.RsvHour_Posting.slice(0, 2) === '오전'
      ? state.RsvHour_Posting.slice(3)
      : `${Number(state.RsvHour_Posting.slice(3).split(':')[0]) + 12}:${
          state.RsvHour_Posting.slice(3).split(':')[1]
        }`;
  // console.log(postingHour);

  const Time = postingHour.split(':');
  // console.log(Time);

  // 1~9까지는 앞에 0이 붙는다
  const hour = Time[0].length > 1 ? Time[0] : `0${Time[0]}`;
  // console.log(hour);

  const min = Time[1];
  // console.log(min);

  const PreviousHour = `${hour}:${min}`;
  console.log(dayjs(PreviousHour));

  const onChange = (time: Dayjs, timeString: string) => {
    setReserveTime(timeString);
    console.log(timeString);
    console.log('날짜/시간', reserveTime);
  };

  useEffect(() => {
    if (PreviousHour) {
      setReserveTime(PreviousHour);
    }
  }, [PreviousHour]);

  return (
    <ConfigProvider locale={ko_KR}>
      <TimePicker
        onChange={onChange}
        inputReadOnly={true}
        format={format}
        // placeholder='시간을 입력해주세요.'
        defaultValue={dayjs(PreviousHour, format)}
        style={{
          width: 219,
          height: 40,
          fontSize: 20,
          fontWeight: 500,
        }}
        allowClear={false}
        autoFocus={false}
        bordered={false}
        placement='bottomLeft'
      />
    </ConfigProvider>
  );
};

export default AntCalendarTimeEdit;
