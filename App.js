import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DiaryScreen from './DiaryScreen';
import MotivationScreen from './MotivationScreen';
import MoodScreen from './MoodScreen';
import CalendarScreen from './CalendarScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ana Sayfa' }} />
        <Stack.Screen name="Diary" component={DiaryScreen} options={{ title: 'Günlük Yaz' }} />
        <Stack.Screen name="Motivation" component={MotivationScreen} options={{ title: 'Motivasyon Al' }} />
        <Stack.Screen name="Mood" component={MoodScreen} options={{ title: 'Ruh Halim' }} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{ title: 'Takvim' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;