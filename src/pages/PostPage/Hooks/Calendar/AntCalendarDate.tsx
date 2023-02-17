import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { useRecoilState } from 'recoil';
import { ReserveDate } from '../Rocoil/Atom';
import { Dayjs } from 'dayjs';

const AntCalendar: React.FC = () => {
  const format = 'YYYY/MM/DD';
  const [reserveDate, setReserveDate] = useRecoilState<any>(ReserveDate);

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    // console.log(date, dateString);
    setReserveDate(date);
    console.log('달력/날짜:', reserveDate);
  };

  // useEffect(() => );

  return (
    <Space direction="vertical">
      <DatePicker
        onChange={onChange}
        format={format}
        placeholder="날짜를 입력해주세요."
        style={{ width: 250, height: 40, fontSize: 20 }}
        allowClear={false}
      />
    </Space>
  );
};

export default AntCalendar;
