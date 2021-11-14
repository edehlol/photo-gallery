import React from 'react';
import { FlatList, Dimensions, Image, Button, Pressable } from 'react-native';
import { formatPhotoUri } from '../api/picsum';

interface Props {
  photos: any;
  numColumns: number;
  onEndReached: any;
  navigation: any;
}

export default function PhotoGrid(props: Props) {
  const { photos, numColumns, onEndReached, navigation } = props;
  const { width } = Dimensions.get('window');
  const size = width / numColumns;

  const renderItem = ({ item }: { item: any }) => (
    <Pressable onPress={() => navigation.navigate('Photo Details', { item })}>
      <Image source={{ width: size, height: size, uri: formatPhotoUri(item.id, size, size) }} />
    </Pressable>
  );

  return (
    <FlatList
      data={photos}
      keyExtractor={(items) => items.id}
      numColumns={numColumns}
      renderItem={renderItem}
      onEndReached={onEndReached}
    ></FlatList>
  );
}
