import React from 'react';
import { TimePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

const format = 'HH:mm';

const onChange = (time: Dayjs, timeString: string) => {
  console.log(time, timeString);
};

const AntCalendarTime: React.FC = () => (
  <TimePicker
    onChange={onChange}
    // defaultValue={dayjs('12:08', format)}
    format={format}
    placeholder="시간을 입력해주세요."
    style={{ width: 219, height: 40, fontSize: 20 }}
    autoFocus={false}
  />
);

export default AntCalendarTime;
