import React from 'react';
import DetailImage from './atoms/DetailImage';
import DetailInfo from './atoms/DetailInfo';
import DetailWrapper from './atoms/DetailWrapper';

const Detail = () => (
  <DetailWrapper>
    <DetailImage src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rd7ElSRYhN2CFqMcyH8rqrwLbd6.jpg" />
    <DetailInfo />
  </DetailWrapper>
);

export default Detail;
