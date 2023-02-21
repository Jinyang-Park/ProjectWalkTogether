import React, { useEffect } from 'react';
import { TimePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { useRecoilState } from 'recoil';
import { Time } from '../Rocoil/Atom';

const AntCalendarTime: React.FC = () => {
  const format = 'HH:mm';
  const [reserveTime, setReserveTime] = useRecoilState<string>(Time);

  const onChange = (time: Dayjs, timeString: string) => {
    setReserveTime(timeString);
    console.log('날짜/시간', reserveTime);
  };

  //   useEffect(() => console.log('날짜/시간', reserveTime));

  return (
    <TimePicker
      onChange={onChange}
      // defaultValue={dayjs('12:08', format)}
      format={format}
      placeholder="시간을 입력해주세요."
      style={{
        width: 219,
        height: 40,
        fontSize: 20,
      }}
      allowClear={false}
      //   autoFocus={false}
      //   bordered={false}
    />
  );
};

export default AntCalendarTime;
