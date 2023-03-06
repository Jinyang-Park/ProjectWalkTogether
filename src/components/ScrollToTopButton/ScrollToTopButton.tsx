import { useEffect, useState } from 'react';
import { ArrowIcon, Button } from './ScrollToTopButton.style';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleShowButton = () => {
    const { scrollY } = window;
    scrollY > 200 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleShowButton);

    return () => {
      window.removeEventListener('scroll', toggleShowButton);
    };
  }, []);

  return (
    <Button onClick={scrollToTop} showButton={showButton}>
      <ArrowIcon />
    </Button>
  );
};

export default ScrollToTopButton;
