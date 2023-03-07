import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { NewpostTag } from '../Rocoil/Atom';

const Tag = (props: { tagItem: string }) => {
  const Tag = props.tagItem;
  const [tagItem, setTagItem] = useState('');
  const [tagList, setTagList] = useRecoilState(NewpostTag);

  const onKeyPress = (e) => {
    if (tagList.length >= 3) {
      window.alert('더이상 태그를 추가할 수 없습니다!');
      return;
    }
    if (tagList.includes(e.target.value)) {
      window.alert('중복된 태그입니다');
      return setTagList([...tagList]);
    }

    if (e.target.value.length < 7 && e.key === 'Enter') {
      submitTagItem();
    } else if (e.key === 'Backspace') {
      let size = tagList.length;
      setTagList([...tagList.slice(0, size - 1)]);
      // deleteClick(tagList);
    }
  };

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem('');
  };

  const deleteClick = (index: number) => {
    // console.log(index);
    // console.log('click delete');
    setTagList([...tagList.slice(0, index), ...tagList.slice(index + 1)]);
  };

  //보여줄때는 props로받아온걸로

  return (
    <WholeBox>
      <TagBox>
        {tagList.map((tagItem, index) => {
          return (
            <TagItem key={index}>
              <Text>{'#' + tagItem}</Text>
              <Button onClick={() => deleteClick(index)}>X</Button>
            </TagItem>
          );
        })}
        <TagInput
          maxLength={6}
          type='text'
          placeholder='#해쉬태그를 입력해주세요'
          tabIndex={2}
          onChange={(e) => setTagItem(e.target.value)}
          value={tagItem}
          onKeyPress={onKeyPress}
        />
      </TagBox>
    </WholeBox>
  );
};

const WholeBox = styled.div`
  /* height: 100vh; */
`;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* height: 20px; */
  width: 84%;
  margin-bottom: 10px;
  /* padding: 0 10px; */
  /* border-radius: px; */
  /* &:focus-within {
    border-color: #8ca6bc;
  }
  background: #eef1f7; */
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  margin-right: 4px;
  background-color: #8ca6bc;
  border-radius: 5px;
  color: white;
  font-size: 10px;
`;

const Text = styled.span``;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  background-color: white;
  border-radius: 50%;
  color: #c7d5ff;
`;

const TagInput = styled.input`
  display: inline-flex;
  min-width: 200px;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
  font-size: 16px;
  font-family: 'SUITERegular';

  &::placeholder {
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #7d8bae;
  }
`;

export default Tag;
