import styled from 'styled-components/native';

import {colors} from '../../config/colors';

export const Container = styled.View`
  flex: 1;
`;

export const CompanyName = styled.Text`
  color: ${colors.secondary};
`;

export const HeaderBackground = styled.ImageBackground`
  background: ${colors.secondary};
  height: 130px;
  padding-top: 10px;
  padding-left: 10px;
  width: 100%;
`;
export const HeaderContainer = styled.View`
  align-items: center;
  height: 165px;
  margin-bottom: 10px;
  width: 100%;
`;

export const Name = styled.Text`
  color: ${(props) => colors[props.color] || colors.primary};
  font-size: 20px;
  font-weight: 600;
`;

export const InfoContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfilePicture = styled.View`
  align-items: center;
  background-color: ${(props) =>
    colors.avatar[props.color] || colors.avatar[0]};
  border-radius: 35px;
  height: 70px;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  width: 70px;
`;
