import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Stack } from './navigation/RootStackNavigator';
import PhotoDetails from './screens/PhotoDetails';
import PhotoGallery from './screens/PhotoGallery';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Photo Gallery" component={PhotoGallery} />
        <Stack.Screen name="Photo Details" component={PhotoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
