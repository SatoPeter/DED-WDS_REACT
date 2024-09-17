import { useState, useEffect } from 'react';

export const useInput = (initialValue: string, type: string) => {
  const [value, setValue] = useState(initialValue);
  const [inputType, setInputType] = useState(type);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };

  const switchPassword = () => {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  useEffect(() => {
    setInputType(type);
  }, [type]);

  return {
    inputType,
    value,
    onChange: handleChange,
    action: type === 'password' ? switchPassword : reset,
  };
};
