import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { NewpostTag } from '../../Rocoil/Atom';
import MessageWindow, {
  MessageWindowLogoType,
  MessageWindowProperties,
  messageWindowPropertiesAtom,
} from '../../messagewindow/MessageWindow';
import { useSetRecoilState } from 'recoil';
import * as S from './Tag.style';
type TagProps = {
  tagItem: string;
};

const Tag: React.FC<TagProps> = (props) => {
  const setState = useSetRecoilState<MessageWindowProperties>(
    messageWindowPropertiesAtom
  );
  const Tag = props.tagItem;

  const [tagItem, setTagItem] = useState<string>('');
  const [tagList, setTagList] = useRecoilState<string[]>(NewpostTag);
  const [isInputClicked, setIsInputClicked] = useState<boolean>(false);

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (tagList.length >= 3) {
      MessageWindow.showWindow(
        new MessageWindowProperties(
          true,
          '더이상 태그를 추가 할 수 없습니다',
          '',
          [
            {
              text: '확인',
              callback: () => {
                return;
              },
            },
          ],
          MessageWindowLogoType.Perplex
        ),
        setState
      );
      setIsInputClicked(true);
      return;
    }
    if (tagList.includes(e.currentTarget.value)) {
      window.alert('중복된 태그입니다');
      return setTagList([...tagList]);
    }

    if (e.currentTarget.value.length < 7 && e.key === 'Enter') {
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
    <S.WholeBox>
      <S.TagBox>
        {tagList.map((tagItem, index) => {
          return (
            <S.TagItem key={index}>
              <S.Text>{'#' + tagItem}</S.Text>
              <S.Button onClick={() => deleteClick(index)}>X</S.Button>
            </S.TagItem>
          );
        })}
        <S.TagInput
          maxLength={6}
          type='text'
          placeholder={isInputClicked === true ? '' : '해쉬태그를 입력해주세요'}
          tabIndex={2}
          onChange={(e) => setTagItem(e.currentTarget.value)}
          value={tagItem}
          onKeyPress={onKeyPress}
        />
      </S.TagBox>
    </S.WholeBox>
  );
};

export default Tag;
