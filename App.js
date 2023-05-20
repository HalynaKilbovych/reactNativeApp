import 'react-native-gesture-handler';
import React from "react";
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomePage from "./Screens/Home";

// import PostsScreen from "./Screens/PostScreen";
// import CreatePostsScreen from "./Screens/CreatePostsScreen";
// import CommentsScreen from "./Screens/CommentsScreen";
// import ProfileScreen from "./Screens/ProfileScreen";


const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto.ttf'),
  });
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }}/>
        <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <MainStack.Screen name="Home" component={HomePage} options={{ headerShown: false }}/>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
