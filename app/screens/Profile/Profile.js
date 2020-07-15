import React from 'react';
import {Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {colors} from '../../config/colors';
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

export default function Profile({navigation: {goBack}, route}) {
  const {
    params: {
      index,
      item: {company, email, name, phone, website},
    },
  } = route;

  const linkingOptions = {
    email: 'mailto:',
    telephone: 'tel:',
    website: 'https:',
  };
  console.log(index);
  return (
    <Container>
      <HeaderContainer>
        <HeaderBackground source={{uri: 'https://picsum.photos/200'}}>
          <Icon
            name="angle-left"
            size={30}
            color={colors.white}
            onPress={() => goBack()}
          />
        </HeaderBackground>
        <ProfilePicture color={index}>
          <Name color="white">{name[0]}</Name>
        </ProfilePicture>
      </HeaderContainer>
      <InfoContainer>
        <Name>{name}</Name>
        <CompanyName>{company.name}</CompanyName>
      </InfoContainer>
      <DetailListItem
        label="mobile"
        name={phone}
        icon="mobile-phone"
        openApp={() => Linking.openURL(linkingOptions.telephone + phone)}
      />
      <DetailListItem
        label="website"
        name={website}
        icon="globe"
        iconSize={23}
        openApp={() => Linking.openURL(linkingOptions.website + website)}
      />
      <DetailListItem
        label="email"
        name={email}
        icon="envelope"
        iconSize={18}
        openApp={() => Linking.openURL(linkingOptions.email + email)}
      />
    </Container>
  );
}
