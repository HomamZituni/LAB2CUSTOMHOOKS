import { useState, useEffect } from 'react';

export const useDebounce = (value, delay = 500) => {
useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedValue(value);
  }, delay);

  return () => {
    clearTimeout(timer);
  };
}, [value, delay]);
return debouncedValue;
};

