import { useEffect } from 'react';

const useSearchMovie = (value) => {
  if (!value) return;
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(value);
      // API SEARCH
    }, 1000);

    return () => clearTimeout(timeout);
  }, [value]);
};

export default useSearchMovie;
