import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import color from "../Style/colors";
import { useNavigation } from "@react-navigation/native";
import Emoji from "react-native-emoji";

const SentemeterScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: { backgroundColor: color.blue },
      headerTitleStyle: { color: color.white },
      headerTintColor: color.orange,
      headerLeft: () => (
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity activeOpacity={0.8} className="ml-5">
            <FontAwesome name="user" size={30} color={color.white} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  return (
    <View className="items-center">
      <Emoji name="smile" style={{ fontSize: 30 }} />
      <Emoji name="zipper_mouth_face" style={{ fontSize: 30 }} />
      <Emoji name="grinning_face_with_star_eyes" style={{ fontSize: 30 }} />
      <Emoji name="hugging_face" style={{ fontSize: 30 }} />
      <Emoji name="innocent" style={{ fontSize: 30 }} />
      <Emoji name="cry" style={{ fontSize: 30 }} />
      <Emoji name="rage" style={{ fontSize: 30 }} />
      <Emoji name="pensive" style={{ fontSize: 30 }} />
      <Emoji name="lying_face" style={{ fontSize: 30 }} />
      <Emoji name="face_with_monocle" style={{ fontSize: 30 }} />
    </View>
  );
};

export default SentemeterScreen;
