import * as React from 'react';
import Select from 'react-select';
import { ColorPalette } from '../../../constant';

interface DropDownProps {
  width: string;
  selectedValue: any;
  values: any;
  value?: any;
  onChange: (option: any) => void;
  isClearable?: boolean;
  isMulti?: boolean;
  refs?: any;
  chipColor?: string;
  placeholder?: string;
  small?: boolean;
  menuPlacement?: string;
  styles?: any;
  limit?: number;
  valuesInline?: boolean;
  [key: string]: any;
}

const DropDown = (props: DropDownProps) => {
  const {
    selectedValue,
    value,
    refs,
    isClearable,
    isMulti,
    values,
    onChange,
    chipColor,
    placeholder,
    small,
    menuPlacement,
    styles,
    limit,
    valuesInline,
    ...rest
  } = props;
  return (
    <Select
      {...rest}
      options={values}
      onChange={onChange}
      isMulti={isMulti}
      isClearable={isClearable}
      defaultValue={selectedValue}
      value={value}
      ref={refs}
      // @ts-ignore
      menuPlacement={menuPlacement}
      isOptionDisabled={(option) =>
        limit && selectedValue ? selectedValue.length >= limit : false
      }
      placeholder={placeholder ? placeholder : 'Select...'}
      styles={{
        ...styles,
        control: (base, state) => ({
          ...base,
          '&:hover': {
            borderColor: state.isFocused ? 'lightgray' : ColorPalette.GREY_70,
          },
          border: `1px solid ${ColorPalette.MID_GREY}`,
          borderRadius: 20,
          minHeight: small ? 30 : 38,
          boxShadow: state.isFocused
            ? `0 0 0 1px ${ColorPalette.DARK_BLUE}`
            : 'none',
          width: props.width,
        }),
        multiValue: (base, { data }) => ({
          ...base,
          backgroundColor: data.color ? data.color : ColorPalette.GREY,
          borderRadius: 20,
          color: ColorPalette.LIGHT_BLACK,
        }),
        valueContainer: (base) => ({
          ...base,
          padding: '2px 8px',
          fontSize: 12,
          flexWrap: valuesInline ? 'nowrap' : 'wrap',
        }),
        dropdownIndicator: (base) => ({
          ...base,
          padding: small ? 4 : 8,
        }),
        input: (base) => ({
          ...base,
        }),
        placeholder: (base) => ({
          ...base,
          margin: '0px 10px',
        }),
        menu: (base) => ({
          ...base,
          fontSize: 12,
          zIndex: 50000,
        }),
      }}
    />
  );
};

export default DropDown;
