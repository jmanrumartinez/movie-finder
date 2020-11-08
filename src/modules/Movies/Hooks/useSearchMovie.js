import { useEffect, useReducer } from 'react';
import ApiClient from '../../../utils/ApiClient';
import PromiseEnum from '../../../utils/enums/PromiseEnum';
import AsyncReducer from '../../common/Reducers/AsyncReducer';

const useSearchMovie = (value) => {
  const [state, dispatch] = useReducer(AsyncReducer, {});

  useEffect(() => {
    if (!value) return '';
    const timeout = setTimeout(() => {
      ApiClient.get('search/movie', {
        language: 'es',
        query: value,
      }).then((data) => {
        dispatch({ type: PromiseEnum.Resolved, data });
      }).catch((error) => {
        dispatch({ type: PromiseEnum.Rejected, error });
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [value]);

  return { ...state };
};

export default useSearchMovie;
