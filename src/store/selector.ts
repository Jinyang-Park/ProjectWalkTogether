import { atom } from 'recoil'
import { data } from '../dummydata'

// 현재 위치를 저장하는 Recoil 상태
export const currentLocationState: any = atom({
  key: 'currentLocation',
  default: {
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  },
})

// 전역 DB
// export const dbState: any = atom<IdbState[]>({
//     key: 'dbState',
//     default: [],

//     // data.map((item) => ({
//     //     ...item,
//     // })),

// })
