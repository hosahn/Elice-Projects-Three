import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Introduction() {
  const navigate = useNavigate();

  return (
    <div>
      <p>소개 페이지입니다. </p>
    </div>
  );
}
