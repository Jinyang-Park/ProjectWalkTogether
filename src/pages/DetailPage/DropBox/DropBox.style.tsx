import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { HiOutlinePencil } from 'react-icons/hi';
import { BsCheck2Circle } from 'react-icons/bs';

export const DropBoxWrapper = styled.div`
  position: absolute;
  left: 685px;
  top: 76px;
`;

export const DropUpdateBtn = styled.div`
  width: 148px;
  height: 41px;
  border: 1px solid #bec5d7;
  border-radius: 4px 4px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UpdateIcon = styled(HiOutlinePencil)``;
export const UpdateTitle = styled.div``;

export const DropCompletBtn = styled.div`
  width: 148px;
  height: 40px;
  border: 1px solid #bec5d7;
  border-radius: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CompleteIcon = styled(BsCheck2Circle)``;
export const CompleteTitle = styled.div``;

export const DropDeleteBtn = styled.div`
  width: 148px;
  height: 40px;
  border: 1px solid #bec5d7;
  border-radius: 0px 0px 4px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DeleteIcon = styled(MdDelete)`
  /* position: absolute; */
`;
export const DeleteTitle = styled.div``;
