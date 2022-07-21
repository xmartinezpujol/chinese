import * as React from 'react';
import { usePrevious, useUpdateEffect } from 'react-use';
import { StyledInput } from './style';
import { useCallback, useState } from 'react';

type InputProps = {
  initialValue: string | number;
  onChange: (value: string | number) => void;
  [key: string]: any;
};

const Input = (props: InputProps) => {
  const { initialValue, onChange, ...rest } = props;
  const [value, setValue] = useState(initialValue);
  const previousValue = usePrevious(value);

  const handleInputChange = useCallback(
    (event) => {
      const { value: newValue } = event.target;
      setValue(newValue);
    },
    [setValue]
  );

  useUpdateEffect(() => {
    if (value !== previousValue && typeof onChange === 'function') {
      onChange(value);
    }
  }, [value, onChange]);

  return <StyledInput {...rest} value={value} onChange={handleInputChange} />;
};

export default Input;
