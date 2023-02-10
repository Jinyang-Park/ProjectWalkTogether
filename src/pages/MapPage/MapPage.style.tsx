import styled from 'styled-components';

export const MapPageContainer = styled.span`
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 30 auto;
    @media screen and (max-width: 344px) {
        flex-direction: column;
        height: inherit;
        overflow-y: auto;
    }
`;

export const MapPageHeader = styled.span`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 50px;
`;
export const EmptyBox = styled.span`
    height: 50px;
    width: 50px;
`;

export const MapPageTitle = styled.span`
    display: flex;
    font-size: 30px;
`;

export const LineMarker = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5px;
    border-bottom: 1px solid black;
    width: 90%;
`;

export const MapPageContentsWrapper = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 60px;
    margin-top: 20px;
    @media screen and (max-width: 344px) {
        flex-direction: column;
    }
`;

export const MapKaKaoMapContainer = styled.span`
    display: flex;
    flex-direction: column;
    width: 55%;
    height: 85%;
    @media screen and (max-width: 344px) {
        width: 300px;
        height: 300px;
    }
`;

export const UserInfoContainer = styled.span`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 85%;
    @media screen and (max-width: 344px) {
        width: 330px;
    }
`;
