import React from 'react';
import {StyleSheet, View} from 'react-native';

import Contact from './app/screens/Contact/Contact';
import Profile from './app/screens/Profile/Profile';

const App = () => {
  const {container} = styles;
  return (
    <View style={container}>
      {/* <Contact /> */}
      <Profile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
