import styled from 'styled-components/native';

import {colors} from '../../config/colors';

export const Container = styled.View`
  align-items: center;
  flex: 1;
  background-color: ${colors.background};
  justify-content: center;
`;

export const ContactList = styled.FlatList`
  width: 100%;
`;

export const Message = styled.Text`
  align-self: center;
  color: ${colors.secondary};
`;
