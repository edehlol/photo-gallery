import React, { useCallback, useEffect, useReducer } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { getList } from '../api/picsum';
import PhotoGrid from '../components/PhotoGrid';
import { actionCreators, initialState, reducer } from '../reducers/photos';

interface Props {
  navigation: any;
}

const PhotoGallery = (props: Props) => {
  const { navigation } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { photos, nextPage, loading, error } = state;

  const fetchPhotos = useCallback(async () => {
    dispatch(actionCreators.loading());
    try {
      const nextPhotos = await getList(nextPage);
      dispatch(actionCreators.success(nextPhotos, nextPage));
    } catch (e) {
      dispatch(actionCreators.failure());
    }
  }, [nextPage]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  if (photos.length === 0) {
    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator animating={true} />
        </View>
      );
    } else if (error) {
      return (
        <View style={styles.container}>
          <Text>Failed to load pictures!</Text>
        </View>
      );
    }
  }
  return (
    <View style={styles.container}>
      <PhotoGrid
        photos={photos}
        numColumns={3}
        onEndReached={fetchPhotos}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PhotoGallery;
