import React from 'react';
import {ActivityIndicator, ScrollView, Text} from 'react-native';

import {colors} from '../../config/colors';
import {Container, ContactList, Message} from './ContactStyles';
import ListItem from '../../components/ListItem/ListItem';
import ItemSeparator from '../../components/ItemSeparator/ItemSeparator';
import useApi from '../../hooks/useApi';

export default function Contact() {
  const {data: contacts, error, loading} = useApi();

  return (
    <Container>
      {error ? (
        <Message>Cannot retrieve data</Message>
      ) : loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : !(contacts.length == 0) || error == true ? (
        <ContactList
          data={contacts}
          renderItem={({item, index}) => <ListItem {...item} index={index} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator />}
        />
      ) : (
        <Message>Contact is empty</Message>
      )}
    </Container>
  );
}
