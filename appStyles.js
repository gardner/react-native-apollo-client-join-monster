import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    margin: 20,
    marginBottom: 0
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 7,
    backgroundColor: '#ecf0f1',
  },
  learnMore: {
    margin: 20,
    marginTop: 0
  },
  loading: {
    margin: 50
  },
  list: {
    marginBottom: 20
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  fullApp: {
    marginBottom: 20,
    textAlign: 'center'
  }
});

export default styles;
