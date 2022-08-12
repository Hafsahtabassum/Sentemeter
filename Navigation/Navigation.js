import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Tabnavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";

const Navigation = () => {
  const [user, setUser] = useState("saad");
  useEffect(() => {
    //   const unsubscribe = auth().onAuthStateChanged((userExist)=>{
    //     if(userExist){
    //         setUser(userExist)
    //     }else{
    //         setUser("")
    //     }
    //   }
    //   )
  }, []);
  return (
    <NavigationContainer>
      {user ? <Tabnavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
