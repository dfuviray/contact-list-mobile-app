import React from 'react';
import {StyleSheet, View} from 'react-native';

import ContactStackNavigation from './app/navigation/ContactStackNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const {container} = styles;
  return (
    <View style={container}>
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
