import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import styles from './appStyles';

const FeedList = ({ data }) => {
  // Note: cache should not be re-used by repeated calls to JSON.stringify.
  if (data.loading) {
    return <ActivityIndicator style={styles.loading} />;
  }

  if (data.error) {
    return <Text>Error! {data.error.message}</Text>;
  }

  return (
    <View>
      <Text style={styles.heading}>{data.user.fullName}</Text>
      <List containerStyle={styles.list}>
        { data.user.posts.edges.map((node) => {
            return <ListItem
              key={node.node.id}
              hideChevron
              title={node.node.body}
              subtitle={`subtitle ${node.node.body}`}
            />;
          }
        ) }
      </List>
    </View>
  )
}

export default FeedList
