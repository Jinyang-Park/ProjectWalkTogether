import { useEffect, useState, useRef } from 'react';

const useDetectClose = (initialState: any) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef(null);

  const removeHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onClick = (e: any) => {
      // 드롭다운 메뉴 이외의 공간 클릭 시
      if (ref.current !== null && !ref.current.contains(e.target)) {
        // false
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isOpen]);

  return [isOpen, ref, removeHandler];
};

export default useDetectClose;
