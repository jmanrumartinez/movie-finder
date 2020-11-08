import React from 'react';
import PropTypes from 'prop-types';
import Title from './atoms/ListTitle';
import Wrapper from './atoms/ListWrapper';
import ListContent from './atoms/ListContent';

// eslint-disable-next-line react/prop-types
const List = ({ title, children }) => (
  <>
    <Title>{title}</Title>
    <Wrapper>
      <ListContent>
        {children}
      </ListContent>
    </Wrapper>
  </>
);

List.propTypes = {
  title: PropTypes.string.isRequired,
};

export default List;
