import * as S from './DetailPage.style';
import Comments from './Comments/Comments';
import CommonStyles from './../../styles/CommonStyles';

const DetailPage = () => {
  return (
    <CommonStyles>
      <S.Bannercontainer>
        <label htmlFor='banner'>
          <S.ThumbnailImgPorlaroid />
        </label>
        <S.BannerPhoto
          type='file'
          accept='image/*'
          style={{ display: 'none' }}
          id='banner'
        />
      </S.Bannercontainer>
      <S.Boxcontents>
        <S.BoxPhoto>
          <label htmlFor='thumnail'>
            <S.ThumnailPhotoChange />
          </label>
          <S.ThumnailPhoto
            type='file'
            accept='image/*'
            style={{ display: 'none' }}
            id='thumnail'
          />
        </S.BoxPhoto>

        <S.BoxMain>
          <S.CalendarIcon src={'/assets/calendar.png'} />
          <S.CategoryTitle>카테고리</S.CategoryTitle>
          <S.InputTitle placeholder='제목을 입력해 주세요' />
          <S.Textarea placeholder='당신의 이야기를 적어주세요'></S.Textarea>
          <S.HashtagBox>#해쉬태그를 입력해주세요</S.HashtagBox>
        </S.BoxMain>
      </S.Boxcontents>

      {/*장소*/}
      <S.DetailLoactionWrapper>
        <S.DeatilLoactionTitle>장소는 이 곳이에요</S.DeatilLoactionTitle>
        <S.DetailLoactionContainer>
          <S.LoactionMap src='/assets/mapimg.png' />
          <S.DetailAddressContainer>
            <S.DetailAddressIcon />
            <S.DetailAddressBox>
              <S.DetailAddress>
                서울특별시 강남구 청담동 12번 출구
              </S.DetailAddress>
              <S.DetailDate>2/9(목) 19:30PM</S.DetailDate>
            </S.DetailAddressBox>
          </S.DetailAddressContainer>
        </S.DetailLoactionContainer>
      </S.DetailLoactionWrapper>
      {/* 댓글 */}
      <Comments />
    </CommonStyles>
  );
};

export default DetailPage;
