import styled from 'styled-components/native';

import {colors} from '../../config/colors';

export const Container = styled.View`
  background-color: ${colors.red};
  elevation: 1;
  height: auto;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1;
  padding: 5px 0;
`;
export const Message = styled.Text`
  color: white;
  text-align: center;
`;
