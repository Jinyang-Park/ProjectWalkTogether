// 게시글 쪽 데이터 타입
declare interface IdbState {
  UID: string
  PostingID_Posting: string
  KeyForChat_Posting: number | string
  Title_Posting: string
  Tag_Posting: string
  Description_Posting: string
  RsvDate_Posting: string
  RsvHour_Posting: string
  Category_Posting: string
  TimeStamp_Posting: string
  PhotoURL_Posting: string
  Address_Posting: string
  MeetLatitude_Posting: number | string
  MeetLongitude_Posting: number | string
  NowLatitude_Posting: number | string
  NowLongitude_Posting: number | string
  Liked_Posting: boolean
  CountLiked_Posting: number | string
  ProceedState_Posting: number
}

export interface DocumentAny {
  [key: string]: any
}

declare interface ResultItemProps {
  info: {
    UID: number | string
    PostingID_Posting: string
    KeyForChat_Posting: number | string
    Title_Posting: string
    Tag_Posting: string
    Description_Posting: string
    RsvDate_Posting: string
    RsvHour_Posting: string
    Category_Posting: string
    TimeStamp_Posting: string
    PhotoURL_Posting: string
    Address_Posting: string
    MeetLatitude_Posting: number | string
    MeetLongitude_Posting: number | string
    NowLatitude_Posting: number | string
    NowLongitude_Posting: number | string
    Liked_Posting: boolean
    CountLiked_Posting: number | string
    ProceedState_Posting: number
  }
}
