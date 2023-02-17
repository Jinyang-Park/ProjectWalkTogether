import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const AntCalendar: React.FC = () => (
  <Space direction="vertical">
    <DatePicker
      onChange={onChange}
      placeholder="날짜를 입력해주세요."
      style={{ width: 250, height: 40, fontSize: 20 }}
    />
  </Space>
);

export default AntCalendar;
