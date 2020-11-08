import React, { useState } from 'react';
import useMovies from '../../Hooks/useMovie';
import Item from '../Item';
import List from '../List';
import GenreEnum from '../../../utils/enums/GenreEnum';
import PromiseEnum from '../../../utils/enums/PromiseEnum';

const FantasyList = () => {
  const [isExpandedList, setIsExpandedList] = useState(false);
  const { data, status } = useMovies(GenreEnum.Fantasy);

  return (
    <List title="Novedades de Fantasia" expand={isExpandedList}>
      {status === PromiseEnum.Resolved && data.results.map((movie) => movie.poster_path && (
        <Item
          key={movie.id}
          data={movie}
          onMouseEnter={() => setIsExpandedList(true)}
          onMouseLeave={() => setIsExpandedList(false)}
        />
      ))}
    </List>
  );
};

export default FantasyList;
