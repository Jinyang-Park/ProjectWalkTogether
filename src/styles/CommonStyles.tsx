import styled from 'styled-components';

function CommonStyles({ children }: any) {
  return <CommonStyle>{children}</CommonStyle>;
}

export default CommonStyles;

const CommonStyle = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  // SMART_PHONE_MIN_WIDTH
  /* @media screen and (max-width: 344px) {
  } */
  //WEB_MAX_WIDTH
`;
