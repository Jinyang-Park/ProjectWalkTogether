import { atom } from 'recoil'
import { handleIsOpen } from '../common/api'

// 현재 위치를 저장하는 Recoil 상태
export const currentLocationState: any = atom({
    key: 'currentLocation',
    default: {
        loaded: false,
        coordinates: { lat: 0, lng: 0 },
    },
})

// 전역 DB
export const dbState: any = atom<IdbState[]>({
    key: 'dbState',
    default: data.map((item) => ({
        ...item,
        isOpen: handleIsOpen(
            item.WORKDAY_OPN_BSNS_TIME,
            item.WORKDAY_CLOS_TIME,
            item.SAT_OPN_BSNS_TIME,
            item.SAT_CLOS_TIME
        ),
    })),
})

// default 전역 DB
export const dbDefaultState: any = atom<IdbState[]>({
    key: 'dbDefaultState',
    default: data.map((item) => ({
        ...item,
        isOpen: handleIsOpen(
            item.WORKDAY_OPN_BSNS_TIME,
            item.WORKDAY_CLOS_TIME,
            item.SAT_OPN_BSNS_TIME,
            item.SAT_CLOS_TIME
        ),
    })),
})
