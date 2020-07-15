import React from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import {Container, Message} from './InternetNotificationStyles';

export default function InternetNotificationStyles() {
  const {type, isInternetReachable} = useNetInfo();
  const noInternet = type !== 'unknown' && isInternetReachable == false;

  return (
    noInternet && (
      <Container>
        <Message>No internet connection</Message>
      </Container>
    )
  );
}
