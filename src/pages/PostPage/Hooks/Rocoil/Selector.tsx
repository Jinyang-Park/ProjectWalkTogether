import { selector } from 'recoil';
import {
  Time,
  TitleInput,
  DescriptionInput,
  Bannerupload,
  Thunmnailupload,
} from './Atom';

const timeSelector = selector({
  key: 'Time',
  get: ({ get }) => {
    const TimeValue = get(Time);
  },
});

const titleSelector = selector({
  key: 'Title',
  get: ({ get }) => {
    const TitleValue = get(TitleInput);
  },
});

const DescriptionInputSelector = selector({
  key: 'Descripttion',
  get: ({ get }) => {
    const TitleValue = get(DescriptionInput);
  },
});

const BanneruploadSelector = selector({
  key: 'Descripttion',
  get: ({ get }) => {
    const TitleValue = get(Bannerupload);
  },
});

const ThunmnailuploadSelector = selector({
  key: 'Descripttion',
  get: ({ get }) => {
    const TitleValue = get(Thunmnailupload);
  },
});

export default timeSelector;
