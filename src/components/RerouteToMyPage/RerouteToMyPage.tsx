import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const RerouteToMyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/mypage');
  }, []);

  return <></>;
};

export default RerouteToMyPage;
