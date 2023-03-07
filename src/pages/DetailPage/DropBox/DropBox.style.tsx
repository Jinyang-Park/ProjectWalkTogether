import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { HiOutlinePencil } from 'react-icons/hi';
import { BsCheck2Circle } from 'react-icons/bs';

export const DropBoxWrapper = styled.div`
  position: fixed;
  left: 685px;
  top: 73px;
`;

export const DropUpdateBtn = styled.div`
  width: 148px;
  height: 41px;
  border: 1px solid #bec5d7;
  border-radius: 4px 4px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 10px;
  cursor: pointer;
`;
export const UpdateIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  margin-right: 5px;
`;
export const UpdateTitle = styled.p`
  font-family: 'SUITERegular';
  width: 102px;
  height: 20px;
  letter-spacing: -2.1px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #7d8bae;
  cursor: pointer;
`;

export const DropCompletBtn = styled.div`
  width: 148px;
  height: 41px;
  border: 1px solid #bec5d7;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 10px;
  cursor: pointer;
`;
export const CompleteIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  margin-right: 5px;
`;
export const CompleteTitle = styled.p`
  font-family: 'SUITERegular';
  width: 102px;
  height: 20px;
  letter-spacing: -2.1px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #7d8bae;
  cursor: pointer;
`;

export const DropDeleteBtn = styled.div`
  width: 148px;
  height: 41px;
  border: 1px solid #bec5d7;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 0px 0px 4px 4px;
`;
export const DeleteIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  margin-right: 5px;
`;
export const DeleteTitle = styled.p`
  font-family: 'SUITERegular';
  width: 102px;
  height: 20px;
  letter-spacing: -2.1px;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #7d8bae;
  cursor: pointer;
`;
