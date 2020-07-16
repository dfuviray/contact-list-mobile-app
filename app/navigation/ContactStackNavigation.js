import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {colors} from '../config/colors';
import Contact from '../screens/Contact/Contact';
import Profile from '../screens/Profile/Profile';

const ContactStack = createStackNavigator();

export default function ContactStackNavigation() {
  headerOptions = {
    headerStyle: {
      backgroundColor: colors.white,
    },
    headerTintColor: colors.primary,
    headerTitleStyle: {alignSelf: 'center'},
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <ContactStack.Navigator screenOptions={headerOptions}>
        <ContactStack.Screen name="Contact" component={Contact} />
        <ContactStack.Screen
          options={{
            headerShown: false,
          }}
          name="Profile"
          component={Profile}
        />
      </ContactStack.Navigator>
    </>
  );
}
