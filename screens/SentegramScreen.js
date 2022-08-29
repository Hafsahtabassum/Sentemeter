import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import colors from "../Style/colors";
import { AntDesign } from "@expo/vector-icons";
import Emoji from "react-native-emoji";

const SentegramScreen = () => {
  const navigation = useNavigation();
  const [emojiIndex, SetEmojiIndex] = React.useState("1");
  const [productCategory, setProductCategory] = useState();
  const emojiesComment = [
    "For Motivating",
    "Form Teambuilding",
    "For Positivity",
    "For Recognizing",
    "For Trusting",
  ];

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
            <Emoji
              name="grinning_face_with_star_eyes"
              style={{ fontSize: 60 }}
            />
          </TouchableOpacity>
          <View>
            <Text>For Teambuilding</Text>
          </View>
        </View>
      );
    } else if (emojiIndex === "3") {
      return (
        <View className="items-center">
          <TouchableOpacity>
            <Emoji
              name="grinning_face_with_star_eyes"
              style={{ fontSize: 60 }}
            />
          </TouchableOpacity>
          <View>
            <Text>For Positivity</Text>
          </View>
        </View>
      );
    } else if (emojiIndex === "4") {
      return (
        <View className="items-center">
          <TouchableOpacity>
            <Emoji
              name="grinning_face_with_star_eyes"
              style={{ fontSize: 60 }}
            />
          </TouchableOpacity>
          <View>
            <Text>For Recognizing</Text>
          </View>
        </View>
      );
    } else if (emojiIndex === "5") {
      return (
        <View className="items-center">
          <TouchableOpacity>
            <Emoji
              name="grinning_face_with_star_eyes"
              style={{ fontSize: 60 }}
            />
          </TouchableOpacity>
          <View>
            <Text>Trusting</Text>
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
      <View className="items-center">
        <View className="items-center flex-row border rounded-full py-1 px-2 w-4/5 my-2">
          <AntDesign
            name="search1"
            size={24}
            color={colors.orange}
            className="pr-4"
          />
          <TextInput
            className="text-sm text-semibold ml-3"
            placeholder="Search here for colleague..."
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
      <View className="h-24 w-full"></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ActiveEMoji />
        <View className="justify-evenly items-center w-11/12 flex-row h-12 mt-3">
          <TouchableOpacity>
            <Emoji
              name="grinning_face_with_star_eyes"
              style={{ fontSize: 30 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Emoji name="hugging_face" style={{ fontSize: 30 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Emoji name="smiley" style={{ fontSize: 30 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Emoji name="face_with_monocle" style={{ fontSize: 30 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Emoji name="innocent" style={{ fontSize: 30 }} />
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
          <TouchableOpacity className="justify-center items-center w-4/5 bg-white rounded-3xl p-1  border ">
            <Text className="font-bold text-slate-500 text-base ">SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SentegramScreen;
