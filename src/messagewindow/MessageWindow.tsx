import React, { useEffect } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

export class MessageWindowManagerComponent extends React.Component {
  componentDidMount() {}

  alert(message: string, buttonText: string = '확인', callback: () => void) {
    if (!this.isAlertWindowVisible) {
      this.isAlertWindowVisible = true;
      this.alertWindowMessage = message;
      this.alertWindowButtonText = buttonText;
      this.alertWindowCallback = callback;

      return true;
    }
    return false;
  }

  // Alert
  isAlertWindowVisible: boolean;
  alertWindowMessage: string;
  alertWindowButtonText: string;
  alertWindowCallback: () => void;

  confirm(
    message: string,
    confirmButtonText: string = '확인',
    confirmCallback: () => void = () => {},
    cancelButtonText: string = '취소',
    cancelCallback: () => void = () => {}
  ) {
    if (!this.isConfirmWindowVisible) {
      this.isConfirmWindowVisible = true;
      this.confirmWindowMessage = message;
      this.confirmWindowConfirmButtonText = confirmButtonText;
      this.confirmWindowConfirmCallback = confirmCallback;
      this.confirmWindowCancelButtonText = cancelButtonText;
      this.confirmWindowCancelCallback = cancelCallback;

      return true;
    }

    return false;
  }

  // Confirm
  isConfirmWindowVisible: boolean;
  confirmWindowMessage: string;

  confirmWindowConfirmButtonText: string;
  confirmWindowConfirmCallback: () => void;

  confirmWindowCancelButtonText: string;
  confirmWindowCancelCallback: () => void;

  render() {
    return <MessageWindowManagerSubcomponent parent={this} />;
  }
}

function MessageWindowManagerSubcomponent(props: {
  parent: MessageWindowManagerComponent;
}) {
  const parent = props.parent;

  const setIsAlertWindowVisible = useSetRecoilState<boolean>(
    AlertWindowIsVisibleAtom
  );
  const setAlertWindowMessage = useSetRecoilState<string>(
    AlertWindowMessageAtom
  );
  const setAlertWindowButtonText = useSetRecoilState<string>(
    AlertWindowButtonTextAtom
  );
  const setAlertWindowCallback = useSetRecoilState<() => void>(
    AlertWindowCallbackAtom
  );

  const setIsConfirmWindowVisible = useSetRecoilState<boolean>(
    ConfirmWindowIsVisibleAtom
  );
  const setConfirmWindowMessage = useSetRecoilState<string>(
    ConfirmWindowMessageAtom
  );
  const setConfirmWindowConfirmButtonText = useSetRecoilState<string>(
    ConfirmWindowConfirmButtonTextAtom
  );
  const setConfirmWindowConfirmCallback = useSetRecoilState<() => void>(
    ConfirmWindowConfirmCallbackAtom
  );
  const setConfirmWindowCancelButtonText = useSetRecoilState<string>(
    ConfirmWindowCancelButtonTextAtom
  );
  const setConfirmWindowCancelCallback = useSetRecoilState<() => void>(
    ConfirmWindowCancelCallbackAtom
  );

  const onComponentLoad = () => {
    setIsAlertWindowVisible(parent.isAlertWindowVisible);
    setAlertWindowMessage(parent.alertWindowMessage);
    setAlertWindowButtonText(parent.alertWindowButtonText);
    setAlertWindowCallback(parent.alertWindowCallback);

    setIsConfirmWindowVisible(parent.isConfirmWindowVisible);
    setConfirmWindowMessage(parent.confirmWindowMessage);
    setConfirmWindowConfirmButtonText(parent.confirmWindowConfirmButtonText);
    setConfirmWindowConfirmCallback(parent.confirmWindowConfirmCallback);
    setConfirmWindowCancelButtonText(parent.confirmWindowCancelButtonText);
    setConfirmWindowCancelCallback(parent.confirmWindowCancelCallback);
  };

  useEffect(onComponentLoad, []);

  return <></>;
}

// Manager atoms
export const ManagerWindowAtom = atom<MessageWindowManagerComponent>({
  key: 'messageWindowManager',
  default: null,
});

export class MessageWindow {
  static AlertWindow = () => {
    const isVisible = useRecoilValue<boolean>(AlertWindowIsVisibleAtom);
    const message = useRecoilValue<string>(AlertWindowMessageAtom);

    const buttonText = useRecoilValue<string>(AlertWindowButtonTextAtom);
    const callback = useRecoilValue<() => void>(AlertWindowCallbackAtom);

    const setIsAlertWindowVisible = useSetRecoilState<boolean>(
      AlertWindowIsVisibleAtom
    );
    const onButtonClick = () => {
      setIsAlertWindowVisible(false);
      callback();
    };

    return (
      <>
        {isVisible && (
          <div>
            <h3>{message}</h3>
            <button onClick={onButtonClick}>{buttonText}</button>
          </div>
        )}
      </>
    );
  };

  static ConfirmWindow = () => {
    const isVisible = useRecoilValue<boolean>(ConfirmWindowIsVisibleAtom);
    const message = useRecoilValue<string>(ConfirmWindowMessageAtom);

    const confirmButtonText = useRecoilValue<string>(
      ConfirmWindowConfirmButtonTextAtom
    );
    const confirmCallback = useRecoilValue<() => void>(
      ConfirmWindowConfirmCallbackAtom
    );

    const cancelButtonText = useRecoilValue<string>(
      ConfirmWindowCancelButtonTextAtom
    );
    const cancelCallback = useRecoilValue<() => void>(
      ConfirmWindowCancelCallbackAtom
    );

    const setIsConfirmWindowVisible = useSetRecoilState<boolean>(
      ConfirmWindowIsVisibleAtom
    );

    const onConfirm = () => {
      setIsConfirmWindowVisible(false);
      confirmCallback();
    };

    const onCancel = () => {
      setIsConfirmWindowVisible(false);
      cancelCallback();
    };

    return (
      <>
        {isVisible && (
          <div>
            <h3>{message}</h3>
            <button onClick={onConfirm}>{confirmButtonText}</button>
            <button onClick={onCancel}>{cancelButtonText}</button>
          </div>
        )}
      </>
    );
  };
}

// Alert window atoms

export const AlertWindowIsVisibleAtom = atom<boolean>({
  key: 'alertWindow.isVisible',
  default: false,
});

export const AlertWindowMessageAtom = atom<string>({
  key: 'alertWindow.message',
  default: '',
});

export const AlertWindowButtonTextAtom = atom<string>({
  key: 'alertWindow.buttonText',
  default: '확인',
});

export const AlertWindowCallbackAtom = atom<() => void>({
  key: 'alertWindow.callback',
  default: () => {},
});

// Confirm window atoms

export const ConfirmWindowIsVisibleAtom = atom<boolean>({
  key: 'confirmWindow.isVisible',
  default: false,
});

export const ConfirmWindowMessageAtom = atom<string>({
  key: 'confirmWindow.message',
  default: '',
});

export const ConfirmWindowConfirmButtonTextAtom = atom<string>({
  key: 'confirmWindow.confirmButtonText',
  default: '확인',
});

export const ConfirmWindowConfirmCallbackAtom = atom<() => void>({
  key: 'confirmWindow.confirmCallback',
  default: () => {},
});

export const ConfirmWindowCancelButtonTextAtom = atom<string>({
  key: 'confirmWindow.cancelButtonText',
  default: '취소',
});

export const ConfirmWindowCancelCallbackAtom = atom<() => void>({
  key: 'confirmWindow.cancelCallback',
  default: () => {},
});
