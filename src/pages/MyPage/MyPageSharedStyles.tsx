import styled from 'styled-components';

export default class MyPageSharedSytles {
  static PostListWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    /* display: flex;
    flex-wrap: wrap; */

    /* & > * {
      width: 21% !important;
      margin: 0 2% !important;
    } */
  `;
}
