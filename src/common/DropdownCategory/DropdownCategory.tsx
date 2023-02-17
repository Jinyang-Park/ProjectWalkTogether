import React from 'react';
import styled from 'styled-components';

// setPostCategory
interface SetProps {
  setPostCategory: React.Dispatch<React.SetStateAction<string>>;
}
const DropdownCategory = ({ setPostCategory }: SetProps) => {
  // 임시로 담을 state 만들기
  // 만들고 선택 했을때 클릭 핸들러에서 이너 텍스트를 임ㅇ시로 만든 셋 스테이트에 담느다
  // 완료 바튼에 눌렀을때 또 다른 핸들 이벤트가 잇어야된다.
  // 셋 카테고리에 임시로 만든 스테이트 값을 넣어주고 그 다음에 모달창을 닫으면된다.,
  // 완료 버튼에는 두번째 함수가 연결되어야된다.
  const Clickhandler = (e) => {
    // innerTet를 변경해야된다.
    // e.cuute.innerText;
    // const change=
  };
  return (
    <DropdownBox>
      <DropdownConatainer>
        <DropdownWapper>
          <CategoryBtn onClick={Clickhandler}>반려동물</CategoryBtn>
          <CategoryBtn onClick={Clickhandler}>독서</CategoryBtn>
          <CategoryBtn>전체</CategoryBtn>
          <CategoryBtn>음악</CategoryBtn>
          <CategoryBtn>고민 상담</CategoryBtn>
          <CategoryBtn>부동산</CategoryBtn>
          <CategoryBtn>영화</CategoryBtn>
          <CategoryBtn>운동</CategoryBtn>
          <CategoryBtn>음식</CategoryBtn>
          <CategoryBtn>연애</CategoryBtn>
          <CategoryBtn>게임</CategoryBtn>
          <CategoryBtn>드라마</CategoryBtn>
          <CategoryBtn>전자기기</CategoryBtn>
          <CategoryBtn>경제</CategoryBtn>
          <CategoryBtn>제테크</CategoryBtn>
          <CategoryBtn>사회</CategoryBtn>
          <CategoryBtn>세계</CategoryBtn>
          <CategoryBtn>생활</CategoryBtn>
          <CategoryBtn>과학</CategoryBtn>
          <CategoryBtn>정치</CategoryBtn>
          <CategoryBtn>문화</CategoryBtn>
        </DropdownWapper>
      </DropdownConatainer>
      <CategoryConfirmBtn>완료</CategoryConfirmBtn>
    </DropdownBox>
  );
};

export default DropdownCategory;

export const DropdownBox = styled.div`
  position: absolute;
  z-index: 1000;
  margin-top: 45px;
`;
export const DropdownConatainer = styled.div`
  padding: 10px 10px;
  background-color: #ffffff;
  width: 518px;
  border-radius: 4px;
`;
export const DropdownWapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 8px;
  gap: 8px;
`;
export const CategoryBtn = styled.div`
  padding: 10px 10px;
  line-height: 22px;
  color: #6b6766;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  background-color: #fff;
  border: 1px solid #e7e3e2;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
`;
export const CategoryConfirmBtn = styled.button`
  width: 518px;
  height: 46px;
  background: #ffeded;
  border: 1px solid #ff8585;
  border-radius: 0px 0px 4px 4px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #ff8585;
  justify-content: center;
  align-items: center;
`;
