/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {Platform, View, StatusBar} from 'react-native';
import AppNavigator from './../App/Navigation/AppNavigator';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {concat} from 'apollo-link';
import {GRAPHQL_ENDPOINT} from 'react-native-dotenv';

import styles from './AppStyles';

const httpLink = new HttpLink({uri: GRAPHQL_ENDPOINT});
const client = new ApolloClient({
  link: concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
type Props = {
  styles: Object
};

export default function App(props: Props) {
  const {container} = styles;
  return (
    <ApolloProvider client={client}>
      <View style={container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    </ApolloProvider>
  );
}
