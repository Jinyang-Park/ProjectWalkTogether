import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { useRecoilState } from 'recoil';
// import { ReserveDate } from '../Rocoil/Atom';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
import { ConfigProvider } from 'antd';

const AntCalendarMap: React.FC = () => {
  const format = 'YYYY/MM/DD';
  // const [reserveDate, setReserveDate] = useRecoilState<any>(ReserveDate);

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    // console.log(date, dateString);
    // setReserveDate(date);
    // console.log('달력/날짜:', reserveDate);
  };

  // useEffect(() => );

  return (
    <ConfigProvider locale={locale}>
      <Space direction='vertical'>
        <DatePicker
          onChange={onChange}
          inputReadOnly={true}
          format={format}
          placeholder='날짜'
          style={{ width: 120, height: 30 }}
          allowClear={false}
          placement='bottomRight'
          // bordered={false}
        />
      </Space>
    </ConfigProvider>
  );
};

export default AntCalendarMap;