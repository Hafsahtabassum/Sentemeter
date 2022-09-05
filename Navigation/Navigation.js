import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Tabnavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";
import { auth, firestore, storage } from "../api/firebase";
import { UserState } from "../screens/context/Usercontext";

const Navigation = () => {
  const { me, setMe } = UserState();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userExist) => {
      if (userExist) {
        setMe(userExist);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <NavigationContainer>
      {me ? <Tabnavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
