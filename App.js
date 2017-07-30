import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import styles from './appStyles';
import FeedWithData from './Feed';

export default class App extends React.Component {
  createClient() {
    // Initialize Apollo Client with URL to our server
    return new ApolloClient({
      networkInterface: createNetworkInterface({
        uri: 'https://join-monster.herokuapp.com/graphql-relay',
      }),
    });
  }

  render() {
    return (
      // Feed the client instance into your React component tree
      <ApolloProvider client={this.createClient()}>
        <View style={styles.container}>
          <FeedWithData />
        </View>
      </ApolloProvider>
    );
  }
}
