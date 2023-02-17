import { atom } from 'recoil';

//Date & Time
export const Time = atom<string>({
  key: 'Time',
  // key의 값은 항상 고유값이어야 합니다.
  default: Date(),
});

export const ReserveDate = atom<any>({
  key: 'ReserveDate',
  // key의 값은 항상 고유값이어야 합니다.
  default: Date(),
});

export const TitleInput = atom<string>({
  key: 'TitleInput',
  // key의 값은 항상 고유값이어야 합니다.
  default: '',
});

export const DescriptionInput = atom<string>({
  key: 'DescriptionInput',
  // key의 값은 항상 고유값이어야 합니다.
  default: '',
});

export const Bannerupload = atom<any>({
  key: 'Bannerupload',
  // key의 값은 항상 고유값이어야 합니다.
  default: '',
});

export const Thunmnailupload = atom<any>({
  key: 'Thunmnailupload',
  // key의 값은 항상 고유값이어야 합니다.
  default: '',
});
