import styled from 'styled-components';

export const DetailCommentsWrapper = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  margin-top: 80px;
  margin-bottom: 80px;
`;
export const CommentsBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
export const CommentTitle = styled.h1`
  font-size: 1.75rem;
  margin-right: 10px;
`;
export const CommentCount = styled.h5`
  font-size: 1.5rem;
`;
export const DetailCommentContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 50px 40px 30px;
  /* border-bottom: 1px solid rgb(205, 205, 205); */
`;
export const CommentUserImgWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const CommtentUserImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 30px;
`;
export const CommentListWrapper = styled.div``;
export const CommentList = styled.ul`
  list-style: none;
`;
export const CommentLi = styled.li`
  display: flex;
  /* flex-direction: row; */
  /* justify-content: space-between; */
  /* align-items: start; */
  margin: 16px 0px;
  line-height: 1.5;
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(205, 205, 205);
  padding: 20px 40px 30px;
`;
export const CommentProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 30px;
`;
export const CommentUserName = styled.div`
  margin-bottom: 8px;
  font-weight: 700;
`;
export const CommentInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 10px 4px;
`;
export const CommentContentsWrapper = styled.label`
  position: relative;
`;
export const CommentContent = styled.input`
  color: black;
  border-radius: 4px;
  border: 1px solid #aaa;
  box-sizing: border-box;
  flex-grow: 1;
  min-height: 46px;
  padding: 12px 18px;
  width: 900px;
  padding: 20px 50px 60px 20px;
  margin-right: 15px;

  &::placeholder {
    color: #aaa;
  }
`;

export const CommentCancelBtn = styled.button`
  position: absolute;
  top: 72px;
  right: 85px;
  font-size: 11px;
  border-right: 2px solid #aaa;
  padding-right: 12px;
  background: none transparent;
  cursor: pointer;
`;
export const CommentBtn = styled.button`
  position: absolute;
  top: 72px;
  right: 28px;
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
  width: 900px;
  gap: 10px;
`;
export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
