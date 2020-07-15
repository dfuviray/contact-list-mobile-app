import styled from 'styled-components/native';

import {colors} from '../../config/colors';

export const Container = styled.View`
  flex-direction: row;
  height: auto;
  margin-bottom: 5px;
  padding: 10px 0;
  width: 100%;
`;

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
`;
export const InfoContainer = styled.View``;
export const Label = styled.Text`
  color: ${colors.secondary};
  font-size: 12px;
  padding-bottom: 3px;
  text-transform: uppercase;
`;
export const Name = styled.Text`
  color: ${colors.primary};
  font-size: 16px;
`;
