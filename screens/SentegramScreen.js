import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import colors from "../Style/colors";
import { AntDesign } from "@expo/vector-icons";
import Emoji from "react-native-emoji";
import { UserState } from "./context/Usercontext";

const SentegramScreen = () => {
  const { user } = UserState();
  const name = user.Employee_Name;
  const imageUrl = user.Employee_Image;
  const Department = user.Employee_Department;
  const Designation = user.Employee_Designation;

  const navigation = useNavigation();
  const [emojiIndex, setEmojiIndex] = React.useState("1");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Sentegram",
      headerStyle: { backgroundColor: colors.blue },
      headerTitleStyle: {
        color: "white",
        fontWeight: "800",
        fontSize: 28,
      },
      headerTitleAlign: "center",
      headerTintColor: "white",
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

  const ActiveEMoji = () => {
    if (emojiIndex === "1") {
      return (
        <View className="items-center">
          <TouchableOpacity>
            <Emoji
              name="grinning_face_with_star_eyes"
              style={{ fontSize: 60 }}
            />
          </TouchableOpacity>
          <View>
            <Text className="text-lg">For Motivating</Text>
          </View>
        </View>
      );
    } else if (emojiIndex === "2") {
      return (
        <View className="items-center">
          <TouchableOpacity>
            <Emoji name="hugging_face" style={{ fontSize: 60 }} />
          </TouchableOpacity>
          <View>
            <Text className="text-lg">For Teambuilding</Text>
          </View>
        </View>
      );
    } else if (emojiIndex === "3") {
      return (
        <View className="items-center">
          <TouchableOpacity>
            <Emoji name="smiley" style={{ fontSize: 60 }} />
          </TouchableOpacity>
          <View>
            <Text className="text-lg">For Positivity</Text>
          </View>
        </View>
      );
    } else if (emojiIndex === "4") {
      return (
        <View className="items-center">
          <TouchableOpacity>
            <Emoji name="face_with_monocle" style={{ fontSize: 60 }} />
          </TouchableOpacity>
          <View>
            <Text className="text-lg">For Recognizing</Text>
          </View>
        </View>
      );
    } else if (emojiIndex === "5") {
      return (
        <View className="items-center">
          <TouchableOpacity>
            <Emoji name="innocent" style={{ fontSize: 60 }} />
          </TouchableOpacity>
          <View>
            <Text className="text-lg">Trusting</Text>
          </View>
        </View>
      );
    }
  };
  return (
    <View className="flex-1 bg-white">
      <Text className="text-xl font-semibold ml-5 mt-3">
        I would like to thank...
      </Text>
      <View className="items-center ">
        <TouchableOpacity
          onPress={() => navigation.navigate("Search")}
          className="elevation bg-white items-center flex-row border rounded-full py-2 px-2 w-4/5 my-2"
        >
          <AntDesign
            name="search1"
            size={24}
            color={colors.orange}
            className="pr-4"
          />
          <Text className="text-sm text-semibold ml-3 from-neutral-800">
            Search here for colleague...
          </Text>
        </TouchableOpacity>
      </View>
      <View className="h-24 w-full flex-row">
        <View className="w-3/12 items-center justify-center">
          <Image
            source={{
              uri:
                imageUrl ||
                "https://c8.alamy.com/zooms/9/c1ae20f4f9dd4bb1904efa49479a42ac/tb0yme.jpg",
            }}
            style={{
              borderRadius: 25,
              height: 50,
              width: 50,
            }}
          />
        </View>
        <View>
          <View className="my-1">
            <Text className="text-xl " numberOfLines={1}>
              {name}
            </Text>
          </View>

          <View className="flex-row pb-1">
            <Text className="text-xs ">Designation: </Text>
            <Text className="text-xs  text-purple-800">{Designation}</Text>
          </View>

          <View className="flex-row pb-1">
            <Text className="text-xs ">Department: </Text>
            <Text className="text-xs text-red-800">{Department}</Text>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ActiveEMoji />
        <View className="justify-evenly items-center w-11/12 flex-row h-15 mt-3">
          <TouchableOpacity>
            <Emoji
              onPress={() => {
                setEmojiIndex("1");
              }}
              name="grinning_face_with_star_eyes"
              style={{ fontSize: emojiIndex === "1" ? 36 : 30 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setEmojiIndex("2");
            }}
          >
            <Emoji
              name="hugging_face"
              style={{ fontSize: emojiIndex === "2" ? 36 : 30 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Emoji
              name="smiley"
              style={{ fontSize: emojiIndex === "3" ? 36 : 30 }}
              onPress={() => {
                setEmojiIndex("3");
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Emoji
              name="face_with_monocle"
              style={{ fontSize: emojiIndex === "4" ? 36 : 30 }}
              onPress={() => {
                setEmojiIndex("4");
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Emoji
              name="innocent"
              style={{ fontSize: emojiIndex === "5" ? 36 : 30 }}
              onPress={() => {
                setEmojiIndex("5");
              }}
            />
          </TouchableOpacity>
        </View>
        <Text className="text-xl font-semibold ml-5 mt-3">Because...</Text>
        <View className="items-center">
          <View className="items-center flex-row border rounded-2xl py-1 px-2 w-11/12 my-2">
            <TextInput
              className="text-lg text-semibold mx-2"
              placeholder="Please write a personal message here (max 150 characters)"
              underlineColorAndroid="transparent"
              multiline={true}
            />
          </View>
        </View>
        <View className="mt-4 items-center justify-center w-full p-4">
          <TouchableOpacity className=" elevation justify-center items-center w-4/5 bg-white rounded-3xl p-1  border ">
            <Text className="font-bold text-slate-500 text-base ">SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SentegramScreen;
