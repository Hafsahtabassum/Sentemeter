import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import colors from "../Style/colors";
import { AntDesign } from "@expo/vector-icons";
import Emoji from "react-native-emoji";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const HelpScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: colors.blue },
      headerTitleStyle: {
        color: "white",
        fontWeight: "800",
        fontSize: 28,
      },
      headerTitleAlign: "center",
      headerTintColor: "white",
      shadowOpacity: 1,
      elevation: 1,
      headerLeft: () => (
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            className="ml-5"
          >
            <AntDesign name="arrowleft" size={28} color={colors.white} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  return (
    <SafeAreaView className="items-center pt-8 flex-1 bg-white">
      <View className="flex-row border-b w-11/12 justify-items-stretch py-6 ">
        <View className="flex-row  items-center ">
          <Octicons name="video" size={36} color={colors.blue} />
          <Text className="text-lg font-normal pl-3">Demo Video</Text>
        </View>
        <View className="absolute right-0 bottom-1/2">
          <Octicons name="plus" size={20} color={colors.blue} />
        </View>
      </View>
      <View className="flex-row border-b w-11/12 justify-items-stretch py-6 ">
        <View className="flex-row  items-center ">
          <MaterialIcons name="contact-support" size={36} color={colors.blue} />
          <Text className="text-lg font-normal pl-3">Support</Text>
        </View>
        <View className="absolute right-0 bottom-1/2">
          <Octicons name="plus" size={20} color={colors.blue} />
        </View>
      </View>
      <View className="flex-row border-b w-11/12 justify-items-stretch py-6 ">
        <View className="flex-row  items-center ">
          <AntDesign name="logout" size={34} color={colors.blue} />
          <Text className="text-lg pl-3">Log Out</Text>
        </View>
        <View className="absolute right-0 bottom-1/2">
          <Octicons name="plus" size={20} color={colors.blue} />
        </View>
      </View>
      <View className="items-center mt-5">
        <Text className="text-base font-bold">Terms and Conditions</Text>
        <Text className="text-sm">App Version 1.0</Text>
      </View>
    </SafeAreaView>
  );
};

export default HelpScreen;
