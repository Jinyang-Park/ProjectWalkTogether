import { selector } from 'recoil';
import { Time, TitleInput } from './Atom';

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

export default timeSelector;
