import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  imageContainer: { height: '90%' },
  scrollViewStyle: { paddingTop: '10%' },
  itemContainer: {
    alignItems: 'center',
  },
  image: { width: '61%', height: '37%' },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: 'gray',
    borderRadius: 20,
    marginRight: 9,
  },
  title: { fontSize: 26, marginTop: '5%', marginBottom: '7%', color: colors.yellow },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: '10%',
    lineHeight: 25,
    color: colors.green,
  },
});

export default styles;
