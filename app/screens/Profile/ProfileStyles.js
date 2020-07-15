import styled from 'styled-components/native';

import {colors} from '../../config/colors';

export const Container = styled.View`
  flex: 1;
`;

export const CompanyName = styled.Text`
  color: ${colors.secondary};
`;

export const HeaderBackground = styled.View`
  background: ${colors.secondary};
  height: 130px;
  width: 100%;
`;
export const HeaderContainer = styled.View`
  align-items: center;
  height: 165px;
  margin-bottom: 10px;
  width: 100%;
`;

export const Name = styled.Text`
  color: ${colors.primary};
  font-size: 20px;
  font-weight: 600;
`;

export const InfoContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfilePicture = styled.View`
  background-color: red;
  border-radius: 35px;
  height: 70px;
  position: absolute;
  bottom: 0px;
  width: 70px;
`;
