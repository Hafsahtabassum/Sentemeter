import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { auth } from "../api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Welcome",
      headerStyle: { backgroundColor: "#2C6BED" },
      headerTitleStyle: { color: "white" },
      headerTintColor: "white",
    });
  }, []);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then()
      .catch((error) => console.log(error.message));
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <View className="h-10 items-center my-10  ">
        <Text className="text-3xl font-extrabold text-orange-600">
          Sentemeter
        </Text>
      </View>
      <View className="w-full items-center">
        <View className="flex-row w-11/12 rounded-lg my-4 p-1 elevation-lg bg-white">
          <View className="h-full w-10  abosolute bottom-0">
            <Feather name="at-sign" size={24} color="black" />
          </View>
          <View className="flex-1">
            <Text className="font-light">LOGIN ID</Text>
            <TextInput
              className="text-base flex-1 border-b my-3 mr-2"
              placeholder="user@domain.com"
              placeholderTextColor="gray"
              color="black"
              value={email}
              onChangeText={(text) => setemail(text)}
              selectionColor="black"
            />
          </View>
        </View>
        <View className="flex-row w-4/5 border  my-4 p-2 rounded-full border-black elevation-lg bg-white">
          <Ionicons name="ios-lock-closed" size={24} color="black" />
          <TextInput
            className="text-base  ml-2 flex-1"
            placeholder="Password"
            placeholderTextColor="gray"
            color="black"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={false}
            selectionColor="black"
          />
        </View>

        <TouchableOpacity
          onPress={signIn}
          className="elevation-lg w-3/5 rounded-full bg-blue-400 items-center justify-center p-2 mt-10 "
        >
          <Text className="text-lg font-bold text-zinc-50">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
