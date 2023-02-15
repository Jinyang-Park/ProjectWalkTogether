import styled from 'styled-components';

export const DetailCommentsWrapper = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  margin-top: 60px;
  margin-bottom: 80px;
`;
export const CommentsBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
export const CommentTitle = styled.h1`
  font-size: 20px;
  line-height: 24.96px;
  font-weight: 500;
  margin-bottom: 12px;
`;
export const CommentCount = styled.h5`
  font-size: 20px;
  line-height: 24.96px;
  font-weight: 500;
  margin-left: 10px;
`;
export const DetailCommentContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  /* padding: 50px 40px 30px; */
`;
export const CommentUserImgWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const CommtentUserImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 30px;
`;
export const CommentListWrapper = styled.div`
  margin-top: 36px;
`;
export const CommentList = styled.ul`
  list-style: none;
`;
export const CommentLi = styled.li`
  display: flex;
  margin: 16px 0px;
  line-height: 1.5;
  padding-bottom: 16px;
  /* border-bottom: 1px solid rgb(205, 205, 205); */
  /* padding: 20px 40px 30px; */
`;
export const CommentProfileImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 12px;
`;
export const CommentUserName = styled.div`
  font-size: 12px;
  line-height: 14.98px;
  margin-bottom: 8px;
  font-weight: 600;
`;
export const CommentInput = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 10px 4px;
  width: 812px;
`;
export const CommentContentsWrapper = styled.label`
  width: 100%;
  position: relative;
`;
export const CommentContent = styled.input`
  color: black;
  border-radius: 4px;
  border: 1px solid #aaa;
  box-sizing: border-box;
  flex-grow: 1;
  height: 111px;
  padding: 12px 18px;
  width: 868px;
  padding: 16px 50px 60px 17px;
  margin-top: 16px;

  &::placeholder {
    color: #aaa;
  }
`;

export const CommentCancelBtn = styled.button`
  position: absolute;
  top: 135px;
  right: 70px;
  font-size: 11px;
  border-right: 2px solid #aaa;
  padding-right: 12px;
  background: none transparent;
  cursor: pointer;
`;
export const CommentBtn = styled.button`
  position: absolute;
  top: 135px;
  right: 12px;
  font-size: 11px;
  padding-left: 14px;
  border: none;
  background: none transparent;
  cursor: pointer;
`;
export const CommentDate = styled.div`
  width: 100px;
  color: rgb(130, 130, 130);
`;
export const CommentDeleteBtn = styled.button`
  top: 72px;
  right: 28px;
  font-size: 11px;
  padding-left: 12px;
  padding-right: 2px;
  background: none transparent;
  cursor: pointer;
`;

export const CommentEditBtn = styled.button`
  top: 72px;
  right: 85px;
  font-size: 11px;
  border-right: 2px solid #aaa;
  padding-right: 12px;
  background: none transparent;
  cursor: pointer;
`;

export const CommentBox = styled.div`
  border-radius: 4px;
  background: #efefef;
  align-items: center;
  gap: 10px;
`;
export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; ;
`;
export const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px 10px 10px;
`;
export const CommentCancelDeleteBtnWrapper = styled.div``;
export const EditForm = styled.input`
  width: 600px;
  height: 100px;
  resize: none;
  border: 1px solid black;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const DetailNumberWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid #cbcbcb;
`;
export const CommentDataWrapper = styled.div`
  padding: 0px 10px 10px 10px;
`;
