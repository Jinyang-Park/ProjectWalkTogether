import React, { useState } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { authService, dbService } from '../../common/firebase';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import styled from 'styled-components';

//매칭전 신발신는중
const FootOning = ({ testList }) => {
  const { id } = useParams();
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        const postCollectionRef = collection(dbService, 'Post');
        const q = query(postCollectionRef);
        const getPost = onSnapshot(q, (snapshot) => {
          const testPost = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPostList(testPost);
        });
        return getPost;
      }
    });
  }, []);

  return (
    <>
      {postList
        .filter((item) => item.id === id)
        .map((item) => {
          return (
            <>
              <Content>
                <div>사진</div>
                <InsideText>
                  <span style={{ fontSize: 15, fontWeight: 'bold' }}>{item.Title_Posting}</span>
                  <Line></Line>
                  <TwithH>
                    <SecondText>
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 'regular',
                        }}
                      >
                        지역
                      </p>
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 'regular',
                        }}
                      >
                        {item.TimeStamp_Posting}
                      </p>
                    </SecondText>
                    {/* <HeartIcon>하트</HeartIcon> */}
                  </TwithH>
                </InsideText>
              </Content>
            </>
          );
        })}
    </>
  );
};

export default FootOning;

const Content = styled.div`
  margin: 0 auto;

  width: 180px;
  height: 180px;
  background-color: orange;
`;
const Line = styled.div`
  display: flex;
  border-top: 1px solid #444444;
  margin-top: 5px;
  margin-bottom: 3px;
  width: 170px;
  margin-left: 10px;
`;

const InsideText = styled.div`
  margin-top: 70px;
`;

const TwithH = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const SecondText = styled.div``;
