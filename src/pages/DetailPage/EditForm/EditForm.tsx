import React from 'react';
import styled from 'styled-components';

interface InputProps {
  editContent: any;
  onChange: any;
  onSubmit: any;
}

const EditForm = ({ editContent, onSubmit, onChange }: InputProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <EditContent
        value={editContent}
        onChange={onChange}
        autoFocus={true}
      ></EditContent>
    </Form>
  );
};

export default EditForm;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EditContent = styled.textarea`
  width: 600px;
  height: 100px;
  resize: none;
  border: 1px solid black;
`;
