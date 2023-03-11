import { selector } from 'recoil';
import {
  Time,
  TitleInput,
  DescriptionInput,
  Bannerupload,
  ThumbnailUpload,
  ReserveDate,
  myLocation,
} from './Atom';

const timeSelector = selector({
  key: 'Time',
  get: ({ get }) => {
    const timeValue = get(Time);
  },
});

const dateSelector = selector({
  key: 'ReserveDate',
  get: ({ get }) => {
    const dateValue = get(ReserveDate);
  },
});

const titleSelector = selector({
  key: 'Title',
  get: ({ get }) => {
    const titleValue = get(TitleInput);
  },
});

const descriptionInputSelector = selector({
  key: 'Descripttion',
  get: ({ get }) => {
    const descriptionInputValue = get(DescriptionInput);
  },
});

const banneruploadSelector = selector({
  key: 'Bannerupload',
  get: ({ get }) => {
    const banneruploadValue = get(Bannerupload);
  },
});

const thunmnailuploadSelector = selector({
  key: 'Thunmnailupload',
  get: ({ get }) => {
    const thunmnailuploadValue = get(ThumbnailUpload);
  },
});

const myLocaSelector = selector({
  key: 'myLocation',
  get: ({ get }) => {
    const myLocaValue = get(myLocation);
  },
});

const address = selector({
  key: 'address',
  get: ({ get }) => {
    const addressValue = get(address);
  },
});

export default timeSelector;
