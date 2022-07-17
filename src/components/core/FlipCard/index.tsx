import * as React from 'react';
import FlipCardOuter, { FlipCardInner, Card } from './styles';
import { useState } from 'react';

interface CardProps {
  id: number;
  variant: string;
  front: any;
  back: any;
  style?: any;
}

function FlipCard(props: CardProps) {
  const [showBack, setShowBack] = useState(false);
  const { variant, front, back, id } = props;

  function handleClick() {
    if (variant === 'click') {
      setShowBack(!showBack);
    }
  }

  function handleFocus() {
    if (variant === 'focus') {
      setShowBack(true);
    }
  }

  function handleBlur() {
    if (variant === 'focus') {
      setShowBack(false);
    }
  }

  return (
    <FlipCardOuter
      tabIndex={id}
      className={variant === 'focus' ? 'focus-trigger' : ''}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <FlipCardInner
        className={`${showBack ? 'show-back' : ''} ${
          variant === 'hover' ? 'hover-trigger' : ''
        }`}
      >
        <Card
          direction="column"
          align="center"
          justify="center"
          className="front"
        >
          {front}
        </Card>
        <Card
          direction="column"
          align="center"
          justify="center"
          className="back"
        >
          {back}
        </Card>
      </FlipCardInner>
    </FlipCardOuter>
  );
}

export default FlipCard;
