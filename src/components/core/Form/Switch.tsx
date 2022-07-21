import * as React from 'react';
import { StyledSwitch } from './style';
import { useCallback, useState } from 'react';

interface SwitchProps {
  id: string;
  initialValue: any;
  onChange: (e: any, value: any) => void;
  name: string;
  style?: any;
}

const Switch = (props: SwitchProps) => {
  const { id, initialValue, onChange, style, ...rest } = props;
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback(
    (event) => {
      const newValue = event.target.checked;
      setValue(newValue);

      if (newValue !== value && typeof onChange === 'function') {
        onChange(event, newValue);
      }
    },
    [setValue, value]
  );

  return (
    <StyledSwitch style={style}>
      <input
        {...rest}
        id={id}
        type="checkbox"
        checked={value}
        onChange={handleChange}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={id}>Toggle</label>
    </StyledSwitch>
  );
};

export default Switch;
