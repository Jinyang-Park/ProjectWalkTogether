import styled from 'styled-components';

export default class MyPageSharedSytles {
  static PostListWrap = styled.div`
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; */

    display: flex;
    flex-wrap: wrap;

    & > * {
      width: 25% !important;
    }
  `;
}
