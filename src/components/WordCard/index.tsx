import * as React from 'react';
import { useState } from 'react';

const WordCard: React.FC = () => {
  const [selected, setSelected] = useState(null);
  const [cordinates, setCordinates] = useState({
    lat: 41.390205,
    lng: 2.154007,
  });

  return <span>{'hey'}</span>;
};

export default WordCard;
