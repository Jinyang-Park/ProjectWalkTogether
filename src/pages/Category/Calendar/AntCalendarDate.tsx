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

  // //약속 시간
  // const meetDate = useRecoilValue(FilterSelectedDate);
  // const OTS = meetDate.toString();
  // const weeks = OTS.slice(0, 3);
  // let todayweek = '';
  // switch (
  //   weeks //요일
  // ) {
  //   case 'Sun':
  //     todayweek = '(일)';
  //     break;
  //   case 'Mon':
  //     todayweek = '(월)';
  //     break;
  //   case 'Tue':
  //     todayweek = '(화)';
  //     break;
  //   case 'Wed':
  //     todayweek = '(수)';
  //     break;
  //   case 'Thu':
  //     todayweek = '(목)';
  //     break;
  //   case 'Fri':
  //     todayweek = '(금)';
  //     break;
  //   case 'Sat':
  //     todayweek = '(토)';
  //     break;
  // }

  // //월
  // const meetMonth = OTS.slice(8, 11);
  // let todayMonth = '';
  // switch (meetMonth) {
  //   case 'Jan':
  //     todayMonth = '1';
  //     break;
  //   case 'Feb':
  //     todayMonth = '2';
  //     break;
  //   case 'Mar':
  //     todayMonth = '3';
  //     break;
  //   case 'Apr':
  //     todayMonth = '4';
  //     break;
  //   case 'May':
  //     todayMonth = '5';
  //     break;
  //   case 'Jun':
  //     todayMonth = '6';
  //     break;
  //   case 'July':
  //     todayMonth = '7';
  //     break;
  //   case 'Aug':
  //     todayMonth = '8';
  //     break;
  //   case 'Sep':
  //     todayMonth = '9';
  //     break;
  //   case 'Oct':
  //     todayMonth = '10';
  //     break;
  //   case 'Nov':
  //     todayMonth = '11';
  //     break;
  //   case 'dec':
  //     todayMonth = '12';
  //     break;
  // }
  // //날자
  // let meetDaynum = '';
  // const meetDay = OTS.slice(5, 7);
  // if (Number(meetDay) < 10) {
  //   meetDaynum = meetDay.slice(1, 2);
  // } else {
  //   meetDaynum = meetDay;
  // }
  // // 달력
  // const SelectedDate = `${todayMonth}/${meetDaynum} ${todayweek}`;

  // console.log(SelectedDate);
  // 내가 필터 달력 클릭한 값이 잘 넘어온다.
  // console.log('SelectedDate', SelectedDate);

  // useEffect(() => {
  //   const q = query(
  //     collection(dbService, 'Post'),
  //     // 카테고리를 만들어줌
  //     where('RsvDate_Posting', '==', SelectedDate)
  //     // orderBy('createdAt', 'desc')
  //   );

  //   onSnapshot(q, (snapshot) => {
  //     const getCategoryDate = snapshot.docs.map((doc) => {
  //       const CategoryDateList = {
  //         id: doc.id,
  //         ...doc.data(),
  //       };
  //       return CategoryDateList;
  //     });

  //     setDate(getCategoryDate);
  //   });
  // }, [SelectedDate]);

  // 내가 선택한 날짜의 db가 잘 출력된다.
  // console.log(Date);

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
