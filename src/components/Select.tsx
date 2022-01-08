import React from 'react';

/**
 * Select properties
 * Optional keys property for option/value distinction
 */
interface Props {
  label: string;
  options: string[];
  keys?: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * Basic select component
 */
const Select: React.FC<Props> = ({ label, options, keys, value, setValue }) => {
  return (
    <div>
      <label className='block text-sm font-medium text-gray-700'>{label}</label>
      <div className='mt-1'>
        <select required value={value} onChange={e => setValue(e.target.value)}>
          {options.map((option, i) =>
            keys ? (
              <option key={i} value={keys[i]}>
                {option}
              </option>
            ) : (
              <option key={i} value={option}>
                {option}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
};

export default Select;
