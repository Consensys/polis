import { useEffect, useCallback } from "react";

export const useDebounce = (
  callback: () => void,
  value: string,
  delay: number
) => {
  const debouncedCallback = useCallback(callback, [value]);

  useEffect(() => {
    const handler = setTimeout(() => {
      debouncedCallback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedCallback, delay]);
};
