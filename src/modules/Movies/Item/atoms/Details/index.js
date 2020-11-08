/* eslint-disable react/prop-types */
import React from 'react';
import Wrapper from './atoms/DetailWrapper';
import Description from './atoms/DetailDescription';
import Meta from './atoms/DetailMeta';
import DetailTitle from './atoms/DetailTitle';

const Details = ({ data, ...rest }) => (
  <Wrapper {...rest}>
    <DetailTitle>{data.title}</DetailTitle>
    <Description>{data.overview}</Description>
    <Meta>{data.release_date}</Meta>
  </Wrapper>
);

export default Details;
