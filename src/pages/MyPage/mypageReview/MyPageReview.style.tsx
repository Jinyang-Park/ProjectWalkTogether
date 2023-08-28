import styled from 'styled-components';

export const MyPageReViewWrap = styled.div`
  width: 835px;
  height: 174px;

  margin: 28px auto -30px 95px;
`;
export const MyPageReViewText = styled.div`
  height: 15%;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #7d8bae;
`;
export const MyPageReViewListContainer = styled.div`
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ReViewCard = styled.div`
  height: 50px;
  width: 238px;
  margin-right: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
  background: #eef1f7;
`;
export const UserEvaluationImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  margin-left: 24px;
  object-fit: none;
  /* background: red; */
`;
export const UserEvaluationScore = styled.div`
  margin-left: 13px;
  margin-right: 13px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
`;
export const UserEvaluationText = styled.div`
  width: 140px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #7d8bae;
`;
