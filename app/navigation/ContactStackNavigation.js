import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Contact from '../screens/Contact/Contact';
import Profile from '../screens/Profile/Profile';

const ContactStack = createStackNavigator();

export default function ContactStackNavigation() {
  return (
    <ContactStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ContactStack.Screen name="Contact" component={Contact} />
      <ContactStack.Screen name="Profile" component={Profile} />
    </ContactStack.Navigator>
  );
}
