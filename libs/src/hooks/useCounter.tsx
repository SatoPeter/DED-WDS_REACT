import { useEffect, useState } from 'react';

interface CounterProps {
  initialValue: number;
  step: number;
  delay: number;
  limit: number;
}

export const useCounter = ({
  initialValue = 0,
  step = 1,
  delay = 0,
  limit,
}: CounterProps) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= limit) {
          clearInterval(interval);
          return prev;
        }
        return prev + step;
      });
    }, delay);
    return () => clearInterval(interval);
  }, []);

  return count;
};
