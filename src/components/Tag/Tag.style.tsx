import styled from '@emotion/styled';

export const WholeBox = styled.div``;

export const TagBox = styled.div`
  display: flex;
  align-items: center;
  background: #eef1f7;
  flex-wrap: wrap;
  width: 84.5%;
  height: 35px;
  margin-bottom: 10px;
  border-radius: 4px;
  :focus-within {
    outline: 2px solid #7d8bae;
  }
  @media screen and (max-width: 430px) {
    width: 260px;
    height: 18px;
    position: relative;
    top: -24px;
    right: 132px;
    font-size: 10px;
  }
`;

export const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  margin-right: 4px;
  background-color: #8ca6bc;
  border-radius: 5px;
  color: white;
  font-size: 10px;
  margin: 0px 3px 0px 3px;
  @media screen and (max-width: 430px) {
    height: 15px;
  }
`;
export const Text = styled.span``;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11px;
  height: 11px;
  margin-left: 5px;
  background-color: white;
  border-radius: 50%;
  color: #c7d5ff;
  font-size: 11px;
`;

export const TagInput = styled.input`
  display: inline-flex;
  min-width: 240px;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
  padding: 8px 15px 9px;
  font-size: 14px;
  font-family: 'SUITERegular';
  &::placeholder {
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #7d8bae;
  }
  @media screen and (max-width: 430px) {
    position: relative;
    bottom: 4px;
    font-size: 10px;
  }
`;
