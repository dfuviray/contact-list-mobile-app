import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import ContactStackNavigation from './app/navigation/ContactStackNavigation';
import InternetNotification from './app/components/InternetNotification/InternetNotification';

const App = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <InternetNotification />
      <NavigationContainer>
        <ContactStackNavigation />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
