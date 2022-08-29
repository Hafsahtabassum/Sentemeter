import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../Style/colors";

const ProfileScreen = () => {
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
    <ScrollView
      className="flex-1"
      disableScrollViewPanResponder="true"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 items-center px-4">
        <View className="items-center px-5 justify-center my-8">
          <Image
            source={{
              uri: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQzMzAxMjk3OTQ3Mjg5MTYw/diana_gettyimages-515185764jpg.jpg",
            }}
            style={{
              height: 120,
              width: 120,
              borderWidth: 4,
              borderColor: colors.blue,
              borderRadius: 60,
            }}
          />
        </View>
        <View className="w-full border-b mb-4">
          <Text className="py-2">Name*</Text>
          <Text className="text-gray-400 pt-2 text-lg">Princess Diana</Text>
        </View>
        <View className="w-full border-b mb-4">
          <Text className="py-2">Email*</Text>
          <Text className="text-gray-400 pt-2 text-lg">
            Princess.Diana@sentemeter.com
          </Text>
        </View>
        <View className="w-full border-b mb-4">
          <Text className="py-2">Nick Name*</Text>
          <Text className="text-gray-400 pt-2 text-lg">Princess Diana</Text>
        </View>
        <View className="w-full border-b mb-4">
          <Text className="py-2">Manager</Text>
          <Text className="text-gray-400 pt-2 text-lg">Paris Hilton</Text>
        </View>
        <View className="w-full border-b mb-4">
          <Text className="py-2">Hobbies / Interests</Text>
          <Text className="text-gray-400 pt-2 text-lg">Aerobics</Text>
        </View>
        <View className="w-full border-b mb-4">
          <Text className="py-2">Department</Text>
          <Text className="text-gray-400 pt-2 text-lg">Arts</Text>
        </View>

        <View className="w-full mb-3">
          <Text className="py-2 text-xl">Other Information</Text>
          <View className="flex-row">
            <Text className="text-gray-500 pt-2">Job Title: </Text>
            <Text className="text-blue-800 pt-2  ml-2">Royal</Text>
          </View>
        </View>

        <View className="mt-4 items-center justify-center w-full">
          <TouchableOpacity className="justify-center items-center w-full bg-white rounded-3xl p-2 border mb-6 ">
            <Text className=" text-slate-500 text-base ">EDIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
