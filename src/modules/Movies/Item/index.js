/* eslint-disable react/prop-types */
import React from 'react';
import ContentWrapper from './atoms/ContentWrapper';
import Details from './atoms/Details';
import Image from './atoms/Image';
import ImageWrapper from './atoms/ImageWrapper';
import Wrapper from './atoms/Wrapper';

const Item = ({ data, ...rest }) => (
  <Wrapper {...rest}>
    <ContentWrapper>
      <ImageWrapper>
        <Image alt={data.title} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`} />
      </ImageWrapper>
      <Details className="movie-details" data={data} />
    </ContentWrapper>
  </Wrapper>
);

export default Item;
