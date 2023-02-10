// 상태에따라 진행 사항 구분
// 1 : 진행중
// 2 : 완료, 리뷰 남기기 전
// 3 : 완료, 리뷰 남긴 후
export const handleProceedState_Posting = (
    RsvDate_Posting: string,
    RsvHour_Posting: string,
    TimeStamp_Posting: string,
    ProceedState_Posting: number
) => {
    // 현재 시간 현재 요일
    if ((ProceedState_Posting = 1)) {
        return 1
    } else if ((ProceedState_Posting = 2)) {
        return 2
    } else if ((ProceedState_Posting = 3)) {
        return 3
    }
}
