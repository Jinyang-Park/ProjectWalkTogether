import { selector } from 'recoil';
import { Time, TitleInput, DescriptionInput } from './Atom';

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

const DescripttionSelector = selector({
  key: 'Title',
  get: ({ get }) => {
    const TitleValue = get(DescriptionInput);
  },
});

export default timeSelector;
