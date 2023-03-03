import React, { useEffect } from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { useRecoilState } from 'recoil';

import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
import { ConfigProvider } from 'antd';
import { ReserveEditDate } from '../../../Rocoil/Atom';
import { useLocation } from 'react-router-dom';
// import { typeDayjs } from 'dayjs';
import moment from 'moment';
import dayjs from 'dayjs';

const AntCalendarEdit: React.FC = () => {
  const format = 'YYYY/MM/DD';
  const [reserveEditDate, setReserveEditDate] =
    useRecoilState<any>(ReserveEditDate);

  // db 날짜 가져오기
  const { state } = useLocation();

  const year = state.TimeStamp_Posting.slice(0, 4);
  // console.log(year);
  const postingDate = state.RsvDate_Posting.split('/');
  // console.log(postingDate);
  const month = postingDate[0];
  // console.log(month);
  const day = postingDate[1].split(' ')[0];
  // console.log(day);
  const PreviousDate = `${year}/${month}/${day}`;

  console.log(dayjs(PreviousDate));

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log('date~~~~~~~~~~', date);
    setReserveEditDate(date);
  };
  console.log('달력/날짜~~~~:', reserveEditDate);

  // 수정이다.
  // 수정하기 전의 초기값이 있어야된다.
  // 빈문자열이였다 기본값이 reserverEdit
  // 들어오자마자 빈 문자열이니 기존의 값으로 바꿔준거다

  useEffect(() => {
    if (PreviousDate) {
      setReserveEditDate(dayjs(PreviousDate));
    }
  }, [PreviousDate]);

  return (
    <ConfigProvider locale={locale}>
      <Space direction='vertical'>
        <DatePicker
          onChange={onChange}
          inputReadOnly={true}
          format={format}
          // placeholder='날짜를 입력해주세요.'
          defaultValue={dayjs(PreviousDate)}
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
