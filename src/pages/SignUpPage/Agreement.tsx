import CommonStyles from '../../styles/CommonStyles';
import * as S from './Agreement.style';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { currentUserUid, isLoggedIn } from '../../Rocoil/Atom';
import { useRecoilValue } from 'recoil';
import AgreeModal from './AgreeModal';
import React from 'react';

const Agreement = () => {
  const [isOpenModal1, setOpenModal1] = useState<boolean>(false);
  const [isOpenModal2, setIsOpenModal2] = useState<boolean>(false);
  const [isOpenModal3, setIsOpenModal3] = useState<boolean>(false);
  const [isOpenModal4, setIsOpenModal4] = useState<boolean>(false);
  const navigate = useNavigate();

  //약관동의 로직
  const [checkList, setCheckList] = useState([]);
  const [buttonColor, setButtonColor] = useState(false);
  const [checkBoxActive, setCheckBoxActive] = useState(false);
  const isCheckBoxClicked = () => {
    setCheckBoxActive(!checkBoxActive);
  };
  const [disabled, setDisabled] = useState(true);

  const check = (e) => {
    e.target.checked
      ? setCheckList([...checkList, e.target.name])
      : setCheckList(checkList.filter((choice) => choice !== e.target.name));
  };
  useEffect(() => {
    if (
      checkList.includes('terms') &&
      checkList.includes('collect') &&
      checkList.includes('another') &&
      checkList.includes('service')
    ) {
      setDisabled(false);
      setButtonColor(true);
    } else {
      setDisabled(true);
      setButtonColor(false);
    }
  }, [checkList]);

  //모달창
  const onClickToggleModalA = useCallback(() => {
    setOpenModal1(!isOpenModal1);
  }, [isOpenModal1]);

  const onClickToggleModalB = useCallback(() => {
    setIsOpenModal2(!isOpenModal2);
  }, [isOpenModal2]);
  const onClickToggleModalC = useCallback(() => {
    setIsOpenModal3(!isOpenModal3);
  }, [isOpenModal3]);

  const onClickToggleModalD = useCallback(() => {
    setIsOpenModal4(!isOpenModal4);
  }, [isOpenModal4]);

  return (
    <CommonStyles>
      <S.InputLayout>
        <S.InputBox>
          <form name='termForm' action='/signUp' method='Get'>
            <S.Title_head>약관동의</S.Title_head>
            <S.join_box>
              <S.checkBox_check01>
                <S.Agree01>
                  <S.ListLayout>
                    <S.List>필수</S.List>
                    <S.Text>이용약관 동의</S.Text>
                  </S.ListLayout>
                  {isOpenModal1 && (
                    <AgreeModal onClickToggleModal={onClickToggleModalA}>
                      <S.ModalTitle>
                        <h1>모달 </h1>
                      </S.ModalTitle>
                      <S.ModalContents>
                        <p>
                          여러분을 환영합니다. 네이버 서비스 및 제품(이하
                          ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한
                          네이버 서비스의 이용과 관련하여 네이버 서비스를
                          제공하는 네이버 주식회사(이하 ‘네이버’)와 이를
                          이용하는 네이버 서비스 회원(이하 ‘회원’) 또는
                          비회원과의 관계를 설명하며, 아울러 여러분의 네이버
                          서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고
                          있습니다.
                        </p>
                      </S.ModalContents>
                      <S.CloseButton
                        onClick={() => {
                          setOpenModal1(!isOpenModal1);
                        }}
                      >
                        Close
                      </S.CloseButton>
                    </AgreeModal>
                  )}
                  <S.DialogButton
                    src={'/assets/Agreement.svg'}
                    onClick={onClickToggleModalA}
                  />

                  <S.checkAllBtn>
                    <input
                      type='checkbox'
                      name='terms'
                      onChange={check}
                      onClick={isCheckBoxClicked}
                      checked={checkList.includes('terms') ? true : false}
                    />
                  </S.checkAllBtn>
                </S.Agree01>
              </S.checkBox_check01>

              <S.checkBox_check02>
                <S.Agree01>
                  <S.ListLayout>
                    <S.List>필수</S.List>
                    <S.Text>개인정보 수집 및 이용 동의</S.Text>
                  </S.ListLayout>
                  {isOpenModal2 && (
                    <AgreeModal onClickToggleModal={onClickToggleModalB}>
                      <S.ModalTitle>
                        <h1>개인정보 수집 및 이용 동의 </h1>
                      </S.ModalTitle>
                      <S.ModalContents>
                        <p>
                          여러분을 환영합니다. 네이버 서비스 및 제품(이하
                          ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한
                          네이버 서비스의 이용과 관련하여 네이버 서비스를
                          제공하는 네이버 주식회사(이하 ‘네이버’)와 이를
                          이용하는 네이버 서비스 회원(이하 ‘회원’) 또는
                          비회원과의 관계를 설명하며, 아울러 여러분의 네이버
                          서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고
                          있습니다.
                        </p>
                      </S.ModalContents>
                      <S.CloseButton
                        onClick={() => {
                          setIsOpenModal2(!isOpenModal2);
                        }}
                      >
                        Close
                      </S.CloseButton>
                    </AgreeModal>
                  )}
                  <S.DialogButton
                    src={'/assets/Agreement.svg'}
                    onClick={onClickToggleModalB}
                  />

                  <S.checkAllBtn>
                    <input
                      type='checkbox'
                      name='collect'
                      onChange={check}
                      onClick={isCheckBoxClicked}
                      checked={checkList.includes('collect') ? true : false}
                    />
                  </S.checkAllBtn>
                </S.Agree01>
              </S.checkBox_check02>

              <S.checkBox_check03>
                <S.Agree01>
                  <S.ListLayout>
                    <S.List>필수</S.List>
                    <S.Text>개인위치 정보처리 동의</S.Text>
                  </S.ListLayout>
                  {isOpenModal3 && (
                    <AgreeModal onClickToggleModal={onClickToggleModalC}>
                      <S.ModalTitle>
                        <h1>모달 </h1>
                      </S.ModalTitle>
                      <S.ModalContents>
                        <p>
                          여러분을 환영합니다. 네이버 서비스 및 제품(이하
                          ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한
                          네이버 서비스의 이용과 관련하여 네이버 서비스를
                          제공하는 네이버 주식회사(이하 ‘네이버’)와 이를
                          이용하는 네이버 서비스 회원(이하 ‘회원’) 또는
                          비회원과의 관계를 설명하며, 아울러 여러분의 네이버
                          서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고
                          있습니다.
                        </p>
                      </S.ModalContents>
                      <S.CloseButton
                        onClick={() => {
                          setIsOpenModal3(!isOpenModal3);
                        }}
                      >
                        Close
                      </S.CloseButton>
                    </AgreeModal>
                  )}
                  <S.DialogButton
                    src={'/assets/Agreement.svg'}
                    onClick={onClickToggleModalC}
                  />

                  <S.checkAllBtn>
                    <input
                      type='checkbox'
                      name='another'
                      onChange={check}
                      onClick={isCheckBoxClicked}
                      checked={checkList.includes('another') ? true : false}
                    />
                  </S.checkAllBtn>
                </S.Agree01>
              </S.checkBox_check03>

              <S.List className='checkBox check03'>
                <S.Agree01>
                  <S.ListLayout>
                    <S.List>필수</S.List>
                    <S.Text>서비스 이용약관 동의</S.Text>
                  </S.ListLayout>
                  {isOpenModal4 && (
                    <AgreeModal onClickToggleModal={onClickToggleModalD}>
                      <S.ModalTitle>
                        <h1>서비스 이용약관 </h1>
                      </S.ModalTitle>
                      <S.ModalContents>
                        <p>서비스 이용약관</p>
                      </S.ModalContents>
                      <S.CloseButton
                        onClick={() => {
                          setIsOpenModal4(!isOpenModal4);
                        }}
                      >
                        Close
                      </S.CloseButton>
                    </AgreeModal>
                  )}
                  <S.DialogButton
                    src={'/assets/Agreement.svg'}
                    onClick={onClickToggleModalD}
                  />

                  <S.checkAllBtn>
                    <input
                      type='checkbox'
                      name='service'
                      onChange={check}
                      onClick={isCheckBoxClicked}
                      checked={checkList.includes('service') ? true : false}
                    />
                  </S.checkAllBtn>
                </S.Agree01>
              </S.List>
            </S.join_box>
            <S.AgreeBox>
              <S.AgreeBtn
                type='submit'
                disabled={disabled}
                // state={buttonColor}
                onClick={() => navigate('/signup')}
              >
                약관 전체 동의
              </S.AgreeBtn>
            </S.AgreeBox>
            <S.Back>
              <S.BackBtn onClick={() => navigate('/login')}>
                이전으로 돌아가기
              </S.BackBtn>
            </S.Back>
          </form>
        </S.InputBox>
      </S.InputLayout>
    </CommonStyles>
  );
};
export default Agreement;
