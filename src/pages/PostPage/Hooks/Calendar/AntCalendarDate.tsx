import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { useRecoilState } from 'recoil';
import { ReserveDate } from '../../../../Recoil/Atom';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
import { ConfigProvider } from 'antd';
import './AntCalendarDate.tsx.css';

const AntCalendar: React.FC = () => {
  const format = 'YYYY/MM/DD';
  const [reserveDate, setReserveDate] = useRecoilState<any>(ReserveDate);

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setReserveDate(date);
  };

  return (
    <ConfigProvider locale={locale}>
      <Space direction='vertical'>
        <DatePicker
          className='ant-picker'
          onChange={onChange}
          inputReadOnly={true}
          format={format}
          placeholder='날짜를 입력해주세요.'
          style={{ width: 250, height: 40, fontSize: 20 }}
          allowClear={false}
          placement='bottomRight'
          bordered={false}
        />
      </Space>
    </ConfigProvider>
  );
};

export default AntCalendar;
