import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  height: 202px;
  background-color: #eef1f7;
  /* background: linear-gradient(to bottom, #d3f1ff, white); */
  /* width: 1024px; */
  position: relative;
  font-family: 'SUIT';
  color: #24264e;
  display: flex;
  justify-content: center;
  top: 50px;

  @media screen and (max-width: 430px) {
    width: 430px;
  }
`;

export const FooterContentsOuter = styled.div`
  display: flex;
  /* width: 1024px; */
`;

export const LogoNIntro = styled.div`
  /* background-color: white; */
  width: 25%;
  position: relative;
  left: 40px;
  @media screen and (max-width: 430px) {
    position: relative;
    left: 280px;
  }
`;

export const LogoBox = styled.div`
  /* background-color: white; */
  width: 27px;
  height: 27px;
  position: relative;
  top: 31px;
  right: 75px;
`;

export const IntroText = styled.p`
  font-size: 10px;
`;

export const Logoimg = styled.img`
  width: 27px;
  height: 27px;
`;

export const IntroBox = styled.div`
  /* background-color: white; */
  width: 200px;
  height: 100px;
  margin-top: 10px;
`;

export const Contact = styled.div`
  /* background-color: red; */

  width: 25%;
  position: relative;
  right: 5px;
  @media screen and (max-width: 430px) {
    position: relative;
    left: 110px;
  }
`;

export const ContactBox = styled.div`
  position: relative;
  top: 31px;
  /* background-color: white; */
  width: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid balck;
`;

export const ContactText = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

export const ContactBtnBox = styled.div`
  text-align: left;
  /* margin-top: -7px; */
  background-color: none;
  display: flex;
`;

export const Contactus = styled.a`
  font-size: 12px;
  position: relative;
  left: 5px;
`;

export const Notion = styled.div`
  /* background-color: aliceblue; */
  width: 25%;
  position: relative;
  left: 25px;
  @media screen and (max-width: 430px) {
    position: relative;
    left: 20px;
  }
`;

export const NotionBox = styled.div`
  /* background-color: white; */
  position: relative;

  top: 31px;
`;

export const NotionText = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

export const NotionAdress = styled.a`
  background: none;

  font-size: 12px;
`;

export const Section = styled.div`
  /* background-color: darkgray; */
  width: 25%;
  @media screen and (max-width: 430px) {
    position: relative;
    left: -140px;
  }
`;

export const SectionBox = styled.div`
  /* background-color: white; */
  position: relative;
  top: 31px;
  left: 60px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
`;

export const SectionText = styled.div`
  font-weight: 700;
`;
export const SectionNav = styled(Link)`
  font-size: 12px;
`;
export const ReservedText = styled.div`
  position: relative;
  top: 110px;
  left: 145px;
  font-size: 14px;
  width: 500px;
  @media screen and (max-width: 430px) {
    position: relative;
    left: -100px;
  }
`;

export const GitImg = styled.img`
  width: 10px;
  height: 10px;
  position: relative;
  top: 3px;
`;

export const PlaneImg = styled.img`
  width: 10px;
  height: 10px;
  position: relative;
  top: 4px;
  viewport-fit: initial;
`;
