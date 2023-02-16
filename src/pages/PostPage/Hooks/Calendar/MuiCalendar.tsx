import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useRecoilState } from 'recoil';
import { Time } from '../Rocoil/Atom';
import 'dayjs/locale/ko';

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(dayjs(Date()));
  //dayjs('2014-08-18T21:11:54')

  const [counter, setCounter] = useRecoilState(Time);

  const handleChange = (newValue: any) => {
    setValue(newValue);
    setCounter(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <Stack>
        <DateTimePicker
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
