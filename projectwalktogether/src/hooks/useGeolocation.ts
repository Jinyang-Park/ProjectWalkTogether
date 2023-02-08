// import { useState, useEffect } from 'react'

// export interface locationType {
//     loaded: boolean
//     coordinates?: {
//         lat: number
//         lng: number
//     }
//     error?: {
//         code: number
//         message: string
//     }
// }

// const useGeolocation = () => {
//     const [location, setLocation] = useState<locationType>({
//         loaded: false,
//         coordinates: { lat: 0, lng: 0 },
//     })

//     const onSuccess = (location: {
//         coords: { latitude: number; longitude: number }
//     }) => {
//         setLocation({
//             loaded: true,
//             coordinates: {
//                 lat: location.coords.latitude,
//                 lng: location.coords.longitude,
//             },
//         })
//     }

//     const onError = (error: { code: number; message: string }) => {
//         setLocation({ loaded: true, error })
//     }

//     useEffect(() => {
//         // gelocation 정보가 없다면 에러를 반환
//         if (!('geolocation' in navigator)) {
//             onError({
//                 code: 0,
//                 message: 'Geolocation not supported',
//             })
//         }

//         // gelocation 정보가 있다면 현재 위치를 반환
//         navigator.geolocation.getCurrentPosition(onSuccess, onError)
//     }, [])

//     return location
// }

// export default useGeolocation
