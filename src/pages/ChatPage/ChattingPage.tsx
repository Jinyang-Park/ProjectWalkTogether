import { useState } from 'react';
import styled from 'styled-components';
import CommonStyles from './../../styles/CommonStyles';
import ChattingList from './ChattingList/ChattingList';
import ChattingBox from './ChattingBox/ChattingBox';
import Footer from './../../layout/Footer/Footer';
import ReviewBox from './ReviewBox/ReviewBox';
import { tochattingboxroomid } from '../../Recoil/Atom';
import { useRecoilValue } from 'recoil';

const ChattingPage = () => {
  const [tochattingBoxUid, SetTochattingBoxUid] = useState<string>('');
  const [tochattingBoxRoomIndex, SetTochattingBoxRoomIndex] =
    useState<string>('');
  const [tochattingBoxOpponentRoomIndex, SetTochattingBoxOpponenRoomIndex] =
    useState<string>('');
  //채팅 리스트하나를 클릭했을 때 불이 들어오게 함
  const [swapBoxAndLists, SetSwapBoxAndLists] = useState<boolean>(true);
  //반응형에서 채팅리스트와 채팅박스트를 보여주는 부분을 다루는 상태값
  const roomId = useRecoilValue(tochattingboxroomid);

  // console.log('roomId:', roomId);

  return (
    <>
      <CommonStyles>
        <Boxcontainer>
          <ChattingList
            SetTochattingBoxUid={SetTochattingBoxUid}
            SetTochattingBoxRoomIndex={SetTochattingBoxRoomIndex}
            SetTochattingBoxOpponenRoomIndex={SetTochattingBoxOpponenRoomIndex}
            SetSwapBoxAndLists={SetSwapBoxAndLists}
            swapBoxAndLists={swapBoxAndLists}
            tochattingBoxRoomIndex={tochattingBoxRoomIndex}
            tochattingBoxUid={tochattingBoxUid}
            tochattingBoxOpponentRoomIndex={tochattingBoxOpponentRoomIndex}
          />
          {roomId.includes('review') ? (
            <ReviewBox
              tochattingBoxUid={tochattingBoxUid}
              tochattingBoxRoomIndex={tochattingBoxRoomIndex}
              tochattingBoxOpponentRoomIndex={tochattingBoxOpponentRoomIndex}
              SetSwapBoxAndLists={SetSwapBoxAndLists}
              swapBoxAndLists={swapBoxAndLists}
            />
          ) : (
            <ChattingBox
              tochattingBoxUid={tochattingBoxUid}
              tochattingBoxRoomIndex={tochattingBoxRoomIndex}
              tochattingBoxOpponentRoomIndex={tochattingBoxOpponentRoomIndex}
              SetSwapBoxAndLists={SetSwapBoxAndLists}
              swapBoxAndLists={swapBoxAndLists}
            />
          )}
        </Boxcontainer>
      </CommonStyles>
      <Footer />
    </>
  );
};
export default ChattingPage;

const Boxcontainer = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 292px);
  position: relative;
  top: 24px;
`;
