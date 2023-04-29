import React, { useState } from "react";
import { useFonts } from 'expo-font';
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto.ttf'),
  });
  return (
    
    <RegistrationScreen/>
    // <PostsScreen/>
    // <LoginScreen/>

  );
}
