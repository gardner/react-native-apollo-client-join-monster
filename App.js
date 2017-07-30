import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';

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
        <View>
          <Text>React Apollo Demo App</Text>
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
