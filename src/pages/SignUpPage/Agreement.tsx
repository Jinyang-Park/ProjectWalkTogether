import CommonStyles from '../../styles/CommonStyles';
import * as S from './Agreement.style';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import AgreeModal from './AgreeModal';
import React from 'react';
import xxx from '../../assets/Agreement/xbutton.svg';
import AgreeFirst from './AgreeFirst';
import AgreeTwo from './AgreeTwo';
import AgreeThree from './AgreeThree';
import AgreeFIrth from './AgreeFIrth';

const Agreement: React.FC = () => {
  const [isOpenModal1, setOpenModal1] = useState<boolean>(false);
  const [isOpenModal2, setIsOpenModal2] = useState<boolean>(false);
  const [isOpenModal3, setIsOpenModal3] = useState<boolean>(false);
  const [isOpenModal4, setIsOpenModal4] = useState<boolean>(false);
  const navigate = useNavigate();

  //약관동의 로직
  const [checkList, setCheckList] = useState<string[]>([]);
  const [buttonColor, setButtonColor] = useState<boolean>(false);
  const [checkBoxActive, setCheckBoxActive] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const isCheckBoxClicked = () => {
    setCheckBoxActive(!checkBoxActive);
  };

  const agreenments = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkBoxActive) {
      alert('약관에 동의해주세요!'); // checkbox가 선택되지 않았다면 알림창 띄우기
      return;
    }
  };

  const checkAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setCheckList(['all', 'terms', 'collect', 'another', 'service'])
      : setCheckList([]);
    console.log(e.target.checked);
  };

  const check = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      setErrorMessage('다음페이지로 갑니다');
    } else {
      setDisabled(true);
      setButtonColor(false);
      setErrorMessage('약관동의를 해주세요.');
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
          <form onSubmit={agreenments}>
            <S.Title_head>약관동의</S.Title_head>

            <S.Line />
            <S.join_box>
              <S.checkBox_check00>
                <S.Agree01>
                  <S.ListLayout>
                    <S.List>전체</S.List>
                    <S.Text>이용약관 동의</S.Text>
                  </S.ListLayout>

                  <S.checkAllBtn>
                    <input
                      onClick={isCheckBoxClicked}
                      type='checkbox'
                      name='all'
                      onChange={checkAll}
                      checked={checkList.includes('all') ? true : false}
                    />
                  </S.checkAllBtn>
                </S.Agree01>
              </S.checkBox_check00>

              <S.checkBox_check01>
                <S.Agree01>
                  <S.ListLayout>
                    <S.List>필수</S.List>
                    <S.Text>이용약관 동의</S.Text>
                  </S.ListLayout>
                  {isOpenModal1 && (
                    <AgreeModal onClickToggleModal={onClickToggleModalA}>
                      <S.ModalTitle>이용약관 동의</S.ModalTitle>
                      <S.ModalContents>
                        <AgreeFirst />
                      </S.ModalContents>
                      <S.CloseButton
                        src={xxx}
                        onClick={() => {
                          setOpenModal1(!isOpenModal1);
                        }}
                      ></S.CloseButton>
                    </AgreeModal>
                  )}
                  <S.DialogButton
                    src={'/assets/Agreement.svg'}
                    onClick={onClickToggleModalA}
                  />

                  <S.checkAllBtn>
                    <input
                      onClick={isCheckBoxClicked}
                      type='checkbox'
                      name='terms'
                      onChange={check}
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
                      <S.ModalTitle>개인정보 수집 및 이용 동의</S.ModalTitle>
                      <S.ModalContents>
                        <AgreeTwo />
                      </S.ModalContents>
                      <S.CloseButton
                        src={xxx}
                        onClick={() => {
                          setIsOpenModal2(!isOpenModal2);
                        }}
                      ></S.CloseButton>
                    </AgreeModal>
                  )}
                  <S.DialogButton2
                    src={'/assets/Agreement.svg'}
                    onClick={onClickToggleModalB}
                  />

                  <S.checkAllBtn>
                    <input
                      onClick={isCheckBoxClicked}
                      type='checkbox'
                      name='collect'
                      onChange={check}
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
                      <S.ModalTitle>개인위치 정보처리 동의</S.ModalTitle>
                      <S.ModalContents>
                        <AgreeThree />
                      </S.ModalContents>
                      <S.CloseButton
                        src={xxx}
                        onClick={() => {
                          setIsOpenModal3(!isOpenModal3);
                        }}
                      ></S.CloseButton>
                    </AgreeModal>
                  )}
                  <S.DialogButton3
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

              <S.PostList className='checkBox check03'>
                <S.Agree01>
                  <S.ListLayout>
                    <S.List>필수</S.List>
                    <S.Text>서비스 이용약관 동의</S.Text>
                  </S.ListLayout>
                  {isOpenModal4 && (
                    <AgreeModal onClickToggleModal={onClickToggleModalD}>
                      <S.ModalTitle>서비스 이용약관</S.ModalTitle>
                      <S.ModalContents>
                        <AgreeFIrth />
                      </S.ModalContents>
                      <S.CloseButton
                        src={xxx}
                        onClick={() => {
                          setIsOpenModal4(!isOpenModal4);
                        }}
                      ></S.CloseButton>
                    </AgreeModal>
                  )}
                  <S.DialogButton4
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
              </S.PostList>
              <S.AgreeBox>
                <S.AgreeBtn
                  type='submit'
                  disabled={disabled}
                  state={buttonColor}
                  onClick={() => navigate('/signup')}
                >
                  {errorMessage}
                </S.AgreeBtn>
              </S.AgreeBox>
              <S.Back>
                <S.BackBtn onClick={() => navigate('/login')}>
                  이전으로 돌아가기
                </S.BackBtn>
              </S.Back>
            </S.join_box>
          </form>
        </S.InputBox>
      </S.InputLayout>
    </CommonStyles>
  );
};
export default Agreement;
