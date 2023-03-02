import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import WeatherDayBox from '../components/WeatherCheckComponent/WeatherDayBox';
import WeatherDust from '../components/WeatherCheckComponent/WeatherDust';
import WeatherMain from '../components/WeatherCheckComponent/WeatherMain';
import WeatherSunRiseSet from '../components/WeatherCheckComponent/WeatherSunRiseSet';
import WeatherWeekBox from '../components/WeatherCheckComponent/WeatherWeekBox';
import * as S from './WeatherCheck.style';

const RightSideWeatherCheck = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  // const res = await axios.get
  // `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=45OFZvymWZjmZKFBCDtt2gLjsC%2BWvL%2FJRuRBUQP8OaRQgoaH90CWFHm3uOIxC7K%2FHokzZJ5om%2FMuCMrAccc%2B2Q%3D%3D&numOfRows=10&pageNo=1&base_date=20230226&base_time=0600&nx=55&ny=127`,
  // return res.data.response.body.items.item[0];

  useEffect(() => {
    axios
      .get(
        'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=45OFZvymWZjmZKFBCDtt2gLjsC%2BWvL%2FJRuRBUQP8OaRQgoaH90CWFHm3uOIxC7K%2FHokzZJ5om%2FMuCMrAccc%2B2Q%3D%3D&numOfRows=10&pageNo=1&base_date=20230226&base_time=0600&nx=55&ny=127&_type=json'
      )
      .then((response) => {
        setWeatherData(response.data.response.body.items.item[0]);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <S.WeatherContainer>
      <S.WeatherCheckButton onClick={() => setIsOpen(!isOpen)}>
        {' '}
        {isOpen ? '닫기' : '열기'}
      </S.WeatherCheckButton>
      {isOpen && (
        <S.InnerWeatherContainer>
          <WeatherMain />
          <WeatherDayBox />
          <WeatherWeekBox />
          <WeatherSunRiseSet />
          <WeatherDust />
        </S.InnerWeatherContainer>
      )}
    </S.WeatherContainer>
  );
};

export default RightSideWeatherCheck;
