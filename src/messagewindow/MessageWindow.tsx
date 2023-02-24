import { useEffect } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';

export default class MessageWindow {
  static alert(
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
        <div>
          <p>{props.message}</p>
          {props.buttons.map((buttonData) => {
            return (
              <button
                key={buttonData.text}
                onClick={() => {
                  //   const p = props;
                  //   p.isVisible = false;
                  //   setProps(p);

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
