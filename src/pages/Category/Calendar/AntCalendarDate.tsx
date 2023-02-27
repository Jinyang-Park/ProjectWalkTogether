import React, { useEffect, useState } from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
// import { ReserveDate } from '../Rocoil/Atom';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
import { ConfigProvider } from 'antd';
import { FilterSelectedDate } from '../../../Rocoil/Atom';
import { query, collection, where, onSnapshot } from 'firebase/firestore';
import { dbService } from './../../../common/firebase';
import useDetectClose from './../../../hooks/useDetectClose';

const AntCalendarMap: React.FC = () => {
  const format = 'YYYY/MM/DD';
  const [filterSelectedDate, setfilterSelectedDate] =
    useRecoilState<any>(FilterSelectedDate);

  // const [Date, setDate] = useRecoilState<any>(FilterDate);

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    // console.log('dateString', dateString);
    // console.log('date', date);
    setfilterSelectedDate(date);
    // 처음 눌르면 filterSelectedDate 빈 값이 나온다.
    // 하지만 category 페이지에서는 똑같이 콘솔로그 찍으면 내가 선택한 값이 잘나온다. 왜일까?
    console.log(filterSelectedDate);
  };
  // console.log('filterSelectedDate', filterSelectedDate);

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
