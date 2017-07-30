import React from 'react';
import { Text, StyleSheet, Linking, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { gql, graphql } from 'react-apollo';
import styles from './appStyles';
import FeedList from './FeedList';

// The data prop here comes from the Apollo HoC. It has the data
// we asked for, and also useful methods like refetch().
//class Feed extends React.Component {
const Feed = ({ data }) => (
  <ScrollView style={styles.container} refreshControl={
    // This enables the pull-to-refresh functionality
    <RefreshControl
      refreshing={data.loading}
      onRefresh={data.refetch}
    />
  }>
    <FeedList data={data }/>
  </ScrollView>
);

// Apollo Client lets you attach GraphQL queries to
// your UI components to easily load data
export default (graphql(gql`{
  user(id: 2) {
    id
    fullName
    posts(first: 10) {
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          body
          comments (first: 3) {
            total
            pageInfo { hasNextPage }
            edges {
              node { id, body }
            }
          }
        }
      }
    }
  }
}`, { options: { notifyOnNetworkStatusChange: true } })(Feed));
