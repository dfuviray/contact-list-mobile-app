import React from 'react';
import {TouchableWithoutFeedback, Text} from 'react-native';

import {
  Avatar,
  AvatarContainer,
  AvatarLetter,
  Company,
  Container,
  DetailsContainer,
  Name,
} from './ListItemStyles';

export default function ListItem(data) {
  const {company, index, name, onNavigateProfile} = data;

  return (
    <TouchableWithoutFeedback onPress={onNavigateProfile}>
      <Container>
        <AvatarContainer>
          <Avatar index={index}>
            <AvatarLetter>{name[0]}</AvatarLetter>
          </Avatar>
        </AvatarContainer>
        <DetailsContainer>
          <Name>{name}</Name>
          <Company>{company.name}</Company>
        </DetailsContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
