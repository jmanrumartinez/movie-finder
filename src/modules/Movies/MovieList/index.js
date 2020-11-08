import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useMovies from '../Hooks/useMovie';
import Item from '../Item';
import List from '../List';
import PromiseEnum from '../../../utils/enums/PromiseEnum';

const AdventureList = ({ genre, title }) => {
  const [isExpandedList, setIsExpandedList] = useState(false);
  const { data, status } = useMovies(genre);

  return (
    <List title={title} expand={isExpandedList}>
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

AdventureList.propTypes = {
  genre: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default AdventureList;
