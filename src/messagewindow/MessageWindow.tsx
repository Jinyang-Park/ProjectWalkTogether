import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import styled from 'styled-components';

import checkmark from '../assets/messageWindow/Checkmark.svg';
import confetti from '../assets/messageWindow/Confetti.svg';
import cryingFace from '../assets/messageWindow/CryingFace.svg';
import flower from '../assets/messageWindow/Flower.svg';
import id from '../assets/messageWindow/ID.svg';
import perplex from '../assets/messageWindow/Perplex.svg';
import rocket from '../assets/messageWindow/Rocket.svg';
import writingHand from '../assets/messageWindow/WritingHand.svg';
import yellowPencil from '../assets/messageWindow/YellowPencil.svg';

//
// 사용법
//
// 1. 컴포넌트에 setMessageWindowPropertiesState 설정
//
// const setState = useSetRecoilState<MessageWindowProperties>(
//     messageWindowPropertiesAtom
// )
//
//
//
// 2. 원하시는 곳에서 MessageWindow.alert() 호춯
//
// const props = new MessageWindowProperties(
//     true, // true로 하셔야 창 띄워집니다.
//     "메시지", // 보여줄 메시지
//     [
//         {
//             text: "버튼1에 쓸 텍스트",
//             callback: () => {
//                                 // 여기에 할 거 하시면 됩니다.
//                             }
//         },
//         {
//             text: "버튼2에 쓸 텍스트",
//             callback: () => {
//                                 // 여기에 할 거 하시면 됩니다.
//                             }
//         }
//     ]
// )
//
// MessageWindow.showWindow(props, setState)
//

export default class MessageWindow {
  static showWindow(
    props: MessageWindowProperties,
    recoilSetStateFunction: (arg0: MessageWindowProperties) => void
  ) {
    recoilSetStateFunction(props);
  }

  // Shortcut for one button windows (버튼 1개 알림창 전용)
  static showAlertWindow(
    message: string,
    buttonText: string,
    buttonCallback: () => void,
    recoilSetStateFunction: (arg0: MessageWindowProperties) => void
  ) {
    MessageWindow.showWindow(
      new MessageWindowProperties(true, message, [
        {
          text: buttonText,
          callback: buttonCallback,
        },
      ]),
      recoilSetStateFunction
    );
  }

  // Shortcut for two button windows (버튼 2개 알림창 전용)
  static showConfirmWindow(
    message: string,
    yesButtonText: string,
    yesButtonCallback: () => void,
    noButtonText: string,
    noButtonCallback: () => void,
    recoilSetStateFunction: (arg0: MessageWindowProperties) => void
  ) {
    MessageWindow.showWindow(
      new MessageWindowProperties(true, message, [
        {
          text: yesButtonText,
          callback: yesButtonCallback,
        },
        {
          text: noButtonText,
          callback: noButtonCallback,
        },
      ]),
      recoilSetStateFunction
    );
  }
}

export enum MessageWindowLogoType {
  None,
  Checkmark,
  Confetti,
  CryingFace,
  Flower,
  ID,
  Perplex,
  Rocket,
  WritingHand,
  YellowPencil,
}

export function MessageWindowComponent() {
  const [props, setProps] = useRecoilState<MessageWindowProperties>(
    messageWindowPropertiesAtom
  );
  const ModalBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    backdrop-filter: blur(5px);
  `;

  const AlertWrap = styled.div`
    width: 343px;
    height: 400px;
    padding: 20px 64px;

    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);

    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    background: #ffffff;
    box-shadow: 0px 0px 10px #bec5d7;
    border-radius: 4px;
  `;

  const LogoImg = styled.img`
    width: 172px;
    height: 172px;
  `;
  const AlertTitle = styled.div`
    width: 275px;
    height: 36px;
    line-height: 150.8%;
    margin-top: 8px;

    font-family: 'SUIT';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
  `;

  const AlertBtn = styled.button`
    width: 200px;
    height: 40px;

    background: #7d8bae;
    border-radius: 32px;
  `;

  const AlertBtnContainer = styled.div`
    margin-top: 24px;
  `;
  const renderLogo = () => {
    switch (props.logoType) {
      case MessageWindowLogoType.None:
        return <></>;
      case MessageWindowLogoType.Checkmark:
        return <LogoImg src={checkmark} alt='Checkmark' />;

      case MessageWindowLogoType.Confetti:
        return <LogoImg src={confetti} alt='Confetti' />;

      case MessageWindowLogoType.CryingFace:
        return <LogoImg src={cryingFace} alt='Crying Face' />;

      case MessageWindowLogoType.Flower:
        return <LogoImg src={flower} alt='Flower' />;

      case MessageWindowLogoType.ID:
        return <LogoImg src={id} alt='ID' />;

      case MessageWindowLogoType.Perplex:
        return <LogoImg src={perplex} alt='Perplex' />;

      case MessageWindowLogoType.Rocket:
        return <LogoImg src={rocket} alt='Rocket' />;

      case MessageWindowLogoType.WritingHand:
        return <LogoImg src={writingHand} alt='Writing Hand' />;

      case MessageWindowLogoType.YellowPencil:
        return <LogoImg src={yellowPencil} alt='Yellow Pencil' />;

      default:
        return <></>;
    }
  };

  return (
    <>
      {props.isVisible && (
        <ModalBackground>
          <AlertWrap>
            {renderLogo()}
            <AlertTitle>{props.message}</AlertTitle>
            <AlertBtnContainer>
              {props.buttons.map((buttonData) => {
                return (
                  <AlertBtn
                    key={buttonData.text}
                    onClick={() => {
                      setProps(new MessageWindowProperties());
                      buttonData.callback();
                    }}
                  >
                    {buttonData.text}
                  </AlertBtn>
                );
              })}
            </AlertBtnContainer>
          </AlertWrap>
        </ModalBackground>
      )}
    </>
  );
}

export class MessageWindowProperties {
  constructor(
    isVisible: boolean = false,
    message: string = '',
    buttons: Array<{
      text: string;
      callback: () => void;
    }> = [],
    logoType: MessageWindowLogoType = MessageWindowLogoType.None
  ) {
    this.isVisible = isVisible;
    this.message = message;
    this.buttons = buttons;
    this.logoType = logoType;
  }

  isVisible: boolean;
  message: string;
  logoType: MessageWindowLogoType;

  buttons: Array<{
    text: string;
    callback: () => void;
  }>;
}

export const messageWindowPropertiesAtom = atom({
  key: 'messageWindow.properties',
  default: new MessageWindowProperties(),
});
