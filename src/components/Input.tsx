import React from 'react';

/**
 * Input properties
 */
interface Props {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type: string;
}

/**
 * Basic controlled input component
 */
const Input: React.FC<Props> = ({ label, value, setValue, type }) => {
  return (
    <div>
      <label className='block text-sm font-medium text-gray-700'>{label}</label>
      <div className='mt-1'>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          type={type}
          required
        />
      </div>
    </div>
  );
};

export default Input;
