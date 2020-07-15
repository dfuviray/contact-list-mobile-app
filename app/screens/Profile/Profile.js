import React from 'react';

import {
  Container,
  CompanyName,
  HeaderBackground,
  HeaderContainer,
  InfoContainer,
  Name,
  ProfilePicture,
} from './ProfileStyles';
import DetailListItem from '../../components/DetailListItem/DetailListItem';

export default function Profile() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderBackground></HeaderBackground>
        <ProfilePicture></ProfilePicture>
      </HeaderContainer>
      <InfoContainer>
        <Name>John Doe</Name>
        <CompanyName>Doe Holdings, Inc.</CompanyName>
      </InfoContainer>
      <DetailListItem label="mobile" name="+639" icon="mobile-phone" />
      <DetailListItem label="work" name="+111" icon="phone" iconSize={20} />
      <DetailListItem
        label="email"
        name="john@company"
        icon="envelope"
        iconSize={18}
      />
    </Container>
  );
}
