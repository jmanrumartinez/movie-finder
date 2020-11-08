import React from 'react';
import Wrapper from './atoms/DetailWrapper';
import Description from './atoms/DetailDescription';
import Meta from './atoms/DetailMeta';
import DetailTitle from './atoms/DetailTitle';

const Details = (props) => (
  <Wrapper {...props}>
    <DetailTitle>Mulán</DetailTitle>
    <Description>Lorem ipsum bla bla bla</Description>
    <Meta>2020</Meta>
  </Wrapper>
);

export default Details;
