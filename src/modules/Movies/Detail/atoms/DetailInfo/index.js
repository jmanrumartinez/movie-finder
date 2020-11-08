import React from 'react';
import DetailInfoDescription from './atoms/DetailInfoDescription';
import DetailInfoTitle from './atoms/DetailInfoTitle';
import DetailInfoWrapper from './DetailInfoWrapper';

const DetailInfo = () => (
  <DetailInfoWrapper>
    <DetailInfoTitle>Mulan (2020)</DetailInfoTitle>
    <DetailInfoDescription>
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Nullam
      iaculis iaculis neque. Ut nibh diam, pharetra non egestas ultricies, blandit
      porta nisl.
      Vivamus lacinia sapien odio, ut cursus urna lacinia nec. Nam nulla ligula, mollis eu
      pulvinar quis, feugiat congue mi. Sed ac sapien placerat
      ,mattis ipsum eu, consequat lacus. Suspendisse luctus
      facilisis condimentum. Nunc facilisis massa
      eleifend augue faucibus pretium. Donec varius libero ultricies nunc consectetur, sed
      çvenenatis libero rutrum. Nunc a velit at mauris ultrices varius in et arcu.
    </DetailInfoDescription>
  </DetailInfoWrapper>
);

export default DetailInfo;
