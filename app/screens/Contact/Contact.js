import React from 'react';
import {ActivityIndicator, ScrollView, Text} from 'react-native';

import {colors} from '../../config/colors';
import {Container, ContactList, Message} from './ContactStyles';
import ListItem from '../../components/ListItem/ListItem';
import ItemSeparator from '../../components/ItemSeparator/ItemSeparator';
import useApi from '../../hooks/useApi';

export default function Contact({navigation}) {
  const {data: contacts, error, loading, request: loadData} = useApi();

  return (
    <Container>
      {error ? (
        <Message>Cannot retrieve data</Message>
      ) : loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : !(contacts.length == 0) || error == true ? (
        <ContactList
          data={contacts}
          renderItem={({item, index}) => (
            <ListItem
              {...item}
              index={index}
              navigation
              onNavigateProfile={() =>
                navigation.navigate('Profile', {item, index})
              }
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator />}
          refreshing={loading}
          onRefresh={() => loadData()}
        />
      ) : (
        <Message>Contact is empty</Message>
      )}
    </Container>
  );
}
