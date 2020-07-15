import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {colors} from '../../config/colors';
import {
  Container,
  IconContainer,
  InfoContainer,
  Label,
  Name,
} from './DetailListItemStyles';

export default function DetailListItem({
  label = 'Label',
  name = 'Name',
  icon = 'home',
  iconSize = 30,
}) {
  return (
    <Container>
      <IconContainer>
        <Icon name={icon} size={iconSize} color={colors.secondary} />
      </IconContainer>
      <InfoContainer>
        <Label>{label}</Label>
        <Name>{name}</Name>
      </InfoContainer>
    </Container>
  );
}
