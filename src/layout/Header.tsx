import { useState } from 'react';
import * as S from './Header.style';
import { useNavigate, useLocation } from 'react-router-dom';
// import logoImg from '../../src/assets/shoes.png';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import useDetectClose from '../hooks/useDetectClose';
import KakaoLogoutButton from '../components/Logout/kakaologout';
import { isLoggedIn, username } from '../Recoil/Atom';
import HeaderAlarm from '../components/HeaderAlarm/HeaderAlarm';
import { LoactionTitle } from './../pages/DetailPage/DetailPage.style';
import MessageWindow, {
  MessageWindowLogoType,
  MessageWindowProperties,
  messageWindowPropertiesAtom,
} from '../messagewindow/MessageWindow';

interface Props {}

const Header: React.FC<Props> = () => {
  const location = useLocation();
  const history = useNavigate();
  const navigate = useNavigate();
  // const [width, setWidth] = useState(max -content);
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [alarmIsOpen, alarmRef, alarmHandler] = useDetectClose(false);
  const loggedIn = useRecoilValue(isLoggedIn);

  const [alarm, setAlarm] = useState(0);
  const [view, setView] = useState(false);

  const setState = useSetRecoilState<MessageWindowProperties>(
    messageWindowPropertiesAtom
  );

  const handleLogin = () => {
    navigate('login');
  };
  //6글자 이상일 경우 ...으로 나오게

  // 우회하기
  // 다른 사람 프로필 페이지를 갔다가 마이페이지 눌르면 오류난가
  // 라우터에서 참고하고 있는 엘러먼트가 똑같다.
  // 남의 페이지에서 내페이지를 넘어왔을떄 컴포넌트가 안바뀐다.
  // 다른 페이지를 갔다 오는원리로 다시 짰다
  // 재전송해줄 페이지를 다시 만든것이다.
  const gotomy = () => {
    if (location.pathname.includes('mypage')) {
      navigate('/reroutetomypage');
      return;
    }
    navigate('/mypage');
  };

  const home = () => {
    navigate('/');
  };
  const sessionId = useRecoilValue(username);

  return (
    <S.NavContainer>
      <S.Nav>
        <S.LogowithText>
          <S.NavLi>
            <S.OllaeBox onClick={home}>
              <S.OllaeLogo
                src={require('../../src/assets/Mainpage/ollaelogo.svg').default}
              />
              <S.OllaeText>올래</S.OllaeText>
            </S.OllaeBox>
          </S.NavLi>

          <S.NavUl>
            <S.NavLi>
              {loggedIn === false ? (
                <S.NavText to='/login'>글 쓰기</S.NavText>
              ) : (
                <S.NavText to='/postpage'>글 쓰기</S.NavText>
              )}
            </S.NavLi>
            <S.NavLi>
              {loggedIn === false ? (
                <S.NavText to='/login'>채팅</S.NavText>
              ) : (
                <S.NavText to='/chat'>채 팅</S.NavText>
              )}
            </S.NavLi>
            <S.NavLi>
              <S.NavText to='/map'>지도뷰</S.NavText>
            </S.NavLi>
          </S.NavUl>
        </S.LogowithText>
        <S.NavEtc>
          {/* <S.Profile onClick={gotomy}>닉네임</S.Profile> */}
          <S.AlarmContainer>
            {loggedIn ? (
              <S.DropdownButton onClick={alarmHandler} ref={alarmRef}>
                <S.AlarmContainer>
                  <S.BellImg
                    src={require('../../src/assets/bell.svg').default}
                  ></S.BellImg>
                  {alarm > 0 ? <S.Reddot></S.Reddot> : <S.Nonedot></S.Nonedot>}
                </S.AlarmContainer>

                <S.DropNav isDropped={alarmIsOpen}>
                  <S.NotificationsBox>
                    <S.NotificationTitleBox>
                      알림
                      <S.NotificationTitleXbtn></S.NotificationTitleXbtn>
                    </S.NotificationTitleBox>

                    <HeaderAlarm setAlarm={setAlarm}></HeaderAlarm>
                  </S.NotificationsBox>
                </S.DropNav>
              </S.DropdownButton>
            ) : (
              <S.None></S.None>
            )}
          </S.AlarmContainer>

          <S.MyPageContainer>
            {loggedIn ? (
              <S.DropdownButton
                onClick={() => {
                  myPageHandler();
                  setView(!view);
                }}
                ref={myPageRef}
              >
                <S.LoginButton>
                  <S.LoginLayout>
                    <S.LoginText>{sessionId}님</S.LoginText>
                    {view ? (
                      <S.LoginImg
                        src={
                          require('../../src/assets/Header/headerup.svg')
                            .default
                        }
                      ></S.LoginImg>
                    ) : (
                      <S.LoginImg
                        src={
                          require('../../src/assets/Header/headerdowns.svg')
                            .default
                        }
                      ></S.LoginImg>
                    )}
                  </S.LoginLayout>
                </S.LoginButton>

                {view && (
                  <S.LoginDropNav isPropped={myPageIsOpen}>
                    <S.Ul>
                      <S.Li>
                        <S.Profile onClick={gotomy}>마이페이지</S.Profile>
                      </S.Li>

                      <S.Li>
                        <KakaoLogoutButton />
                      </S.Li>
                    </S.Ul>
                  </S.LoginDropNav>
                )}
              </S.DropdownButton>
            ) : (
              <S.LoginButton onClick={handleLogin}>Login</S.LoginButton>
            )}
          </S.MyPageContainer>
        </S.NavEtc>
      </S.Nav>
    </S.NavContainer>
  );
};

export default Header;
