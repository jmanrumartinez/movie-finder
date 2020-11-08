import { useReducer, useEffect } from 'react';
import ApiClient from '../../utils/ApiClient';
import PromiseEnum from '../../utils/enums/PromiseEnum';

const moviesReducer = (state, action) => {
  switch (action.type) {
    case PromiseEnum.Resolved:
      return { data: action.data, status: action.type };
    case PromiseEnum.Pending:
      return { status: action.type };
    case PromiseEnum.Rejected:
      return { error: action.error, status: 'error' };
    default:
      return state;
  }
};

const useMovies = (genreId) => {
  const [state, dispatch] = useReducer(moviesReducer, {});

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
