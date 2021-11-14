import React from 'react';
import { Image, Dimensions, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { formatPhotoUri } from '../api/picsum';

interface Props {
  route: any;
  navigation: any;
}

const PhotoDetails = (props: Props) => {
  const { route, navigation } = props;
  const { item } = route.params;
  const { width } = Dimensions.get('window');
  console.log(item);
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          width: width,
          height: width,
          uri: formatPhotoUri(item.id, width, width),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.author}>By: {item.author}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  image: {
    marginBottom: 20,
  },
  author: {
    fontSize: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#1e90ff',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
export default PhotoDetails;
