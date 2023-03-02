import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { useRecoilState } from 'recoil';

import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
import { ConfigProvider } from 'antd';
import { ReserveEditDate } from '../../../Rocoil/Atom';

const AntCalendarEdit: React.FC = () => {
  const format = 'YYYY/MM/DD';
  const [reserveEditDate, setReserveEditDate] =
    useRecoilState<any>(ReserveEditDate);

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    // console.log(date, dateString);
    setReserveEditDate(date);
    console.log('달력/날짜:', reserveEditDate);
  };
  console.log('달력/날짜:', reserveEditDate);
  return (
    <ConfigProvider locale={locale}>
      <Space direction='vertical'>
        <DatePicker
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

export default AntCalendarEdit;
