import { atom } from 'recoil';

export class MessageWindow {
  static AlertWindow = (props: { message: string; callback: () => void }) => {
    return <div></div>;
  };

  static ConfirmWindow = (props: {
    message: string;
    onConfirm: () => void;
    onCancel: () => {};
  }) => {
    return <div></div>;
  };
}

// Alert window atoms

export const AlertWindowMessageAtom = atom<string>({
  key: 'alertWindow.message',
  default: '',
});

export const AlertWindowCallbackAtom = atom<() => void>({
  key: 'alertWindow.callback',
  default: () => {},
});

// Confirm window atoms

export const ConfirmWindowMessageAtom = atom<string>({
  key: 'confirmWindow.message',
  default: '',
});

export const ConfirmWindowConfirmCallbackAtom = atom<() => void>({
  key: 'confirmWindow.confirmCallback',
  default: () => {},
});

export const ConfirmWindowCancelCallbackAtom = atom<() => void>({
  key: 'confirmWindow.cancelCallback',
  default: () => {},
});
