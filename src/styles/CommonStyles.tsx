import styled from 'styled-components';

function CommonStyles({ children }: any) {
  return <CommonStyle>{children}</CommonStyle>;
}

export default CommonStyles;

const CommonStyle = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  @media screen and (max-width: 430px) {
    min-width: 430px;
  }
`;
