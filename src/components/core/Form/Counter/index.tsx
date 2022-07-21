import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { ColorPalette } from '../../../../constant';
import { default as Button, default as ButtonDefault } from '../../Button';
import CounterContainer, { Input } from './styles';

interface CounterProps {
  minLimit?: number;
  maxLimit?: number;
  quantity: number;
  onChange: (value: number) => void;
}

function Counter(props: CounterProps) {
  const { minLimit = 1, maxLimit = 1000000, quantity, onChange } = props;

  function handleQuantityChange(value: number) {
    onChange(value);
  }

  return (
    <CounterContainer>
      <Button
        radius="10px"
        backgroundColor={
          quantity !== minLimit ? ColorPalette.DARK_BLUE : ColorPalette.GREY
        }
        padding="15px"
        disabled={quantity === minLimit}
        onClick={() => handleQuantityChange(quantity - 1)}
      >
        <FontAwesomeIcon icon={faMinus} color={ColorPalette.WHITE} size="xs" />
      </Button>
      <Input
        name="quantity"
        type="number"
        min={minLimit}
        value={quantity}
        onChange={(e) =>
          Number(e.target.value) >= minLimit
            ? handleQuantityChange(Number(e.target.value))
            : handleQuantityChange(minLimit)
        }
      />
      <ButtonDefault
        radius="10px"
        padding="15px"
        onClick={() => handleQuantityChange(quantity + 1)}
      >
        <FontAwesomeIcon icon={faPlus} color={ColorPalette.WHITE} size="xs" />
      </ButtonDefault>
    </CounterContainer>
  );
}

export default Counter;
