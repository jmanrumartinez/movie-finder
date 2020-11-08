import { useReducer, useEffect } from 'react';
import ApiClient from '../../utils/ApiClient';
import PromiseEnum from '../../utils/enums/PromiseEnum';
import AsyncReducer from '../common/Reducers/AsyncReducer';

const useMovies = (genreId) => {
  const [state, dispatch] = useReducer(AsyncReducer, {});

  useEffect(() => {
    dispatch({ type: PromiseEnum.Pending });
    ApiClient.get('discover/movie', {
      with_genres: genreId,
      sort_by: 'release_date.desc',
      language: 'es',
    }).then((data) => {
      dispatch({ type: PromiseEnum.Resolved, data });
    }).catch((error) => {
      dispatch({ type: PromiseEnum.Rejected, error });
    });
  }, [genreId]);

  return { ...state };
};

export default useMovies;
