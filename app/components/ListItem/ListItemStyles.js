import styled from 'styled-components/native';

import {colors} from '../../config/colors';

export const Avatar = styled.View`
  align-items: center;
  background-color: ${(props) =>
    props.index ? colors.avatar[props.index] : '#83BCFF'};
  border-radius: 25px;
  height: 50px;
  justify-content: center;
  width: 50px;
`;
export const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  width: auto;
`;
export const AvatarLetter = styled.Text`
  color: #fff;
  font-size: 25px;
  text-transform: uppercase;
`;

export const Company = styled.Text`
  color: ${colors.secondary};
`;
export const Container = styled.View`
  flex-direction: row;
  height: auto;
  padding: 10px 10px;
`;
export const DetailsContainer = styled.View`
  flex: 4;
  height: 100%;
  width: auto;
`;
export const Name = styled.Text`
  color: ${colors.primary};
  font-size: 20px;
`;
