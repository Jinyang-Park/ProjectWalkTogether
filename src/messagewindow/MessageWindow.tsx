import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

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
//     2, // 버튼 개수
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
// MessageWindow.alert(props, setState)
//

export default class MessageWindow {
  static showWindow(
    props: MessageWindowProperties,
    recoilSetStateFunction: (arg0: MessageWindowProperties) => void
  ) {
    recoilSetStateFunction(props);
  }
}

export function MessageWindowComponent() {
  const [props, setProps] = useRecoilState<MessageWindowProperties>(
    messageWindowPropertiesAtom
  );

  useEffect(() => {
    console.log('==================================');
    console.log(props.isVisible, props.message);
  }, []);

  return (
    <>
      {props.isVisible && (
        <div style={{ border: '1px solid black' }}>
          <p>{props.message}</p>
          {props.buttons.map((buttonData) => {
            return (
              <button
                key={buttonData.text}
                onClick={() => {
                  setProps(new MessageWindowProperties());
                  buttonData.callback();
                }}
              >
                {buttonData.text}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}

export class MessageWindowProperties {
  constructor(
    isVisible: boolean = false,
    message: string = '',
    numberOfButtons = 1,
    buttons = []
  ) {
    this.isVisible = isVisible;
    this.message = message;
    this.buttonCount = numberOfButtons;
    this.buttons = buttons;
  }

  isVisible: boolean;
  message: string;

  buttonCount: number;
  buttons: {
    text: string;
    callback: () => void;
  }[];
}

export const messageWindowPropertiesAtom = atom({
  key: 'messageWIndow.properties',
  default: new MessageWindowProperties(),
});
