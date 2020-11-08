import React from 'react';
import ContentWrapper from './atoms/ContentWrapper';
import Details from './atoms/Details';
import Image from './atoms/Image';
import ImageWrapper from './atoms/ImageWrapper';
import Wrapper from './atoms/Wrapper';

const Item = () => (
  <Wrapper>
    <ContentWrapper>
      <ImageWrapper>
        <Image alt="una imagen" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rd7ElSRYhN2CFqMcyH8rqrwLbd6.jpg" />
      </ImageWrapper>
      <Details className="movie-details" />
    </ContentWrapper>
  </Wrapper>
);

export default Item;
