import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import color from "../Style/colors";
import { useNavigation } from "@react-navigation/native";
import Emoji from "react-native-emoji";
import colors from "../Style/colors";

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
    <SafeAreaView className="flex-1 bg-white">
      <View className="h-20 items-center mt-2 ">
        <Text className="text-lg font-bold text-blue-500">
          How do you feel about me today?
        </Text>
      </View>
      <View className="items-center w-full">
        <View className="w-full h-28">
          <View className="absolute left-12 bottom-5">
            <TouchableOpacity>
              <Emoji
                name="grinning_face_with_star_eyes"
                style={{ fontSize: 33 }}
              />
            </TouchableOpacity>
          </View>
          <View className="items-center justify-center">
            <TouchableOpacity>
              <Emoji name="smile" style={{ fontSize: 33 }} />
            </TouchableOpacity>
          </View>

          <View className="absolute right-12 bottom-5">
            <TouchableOpacity>
              <Emoji name="face_with_monocle" style={{ fontSize: 33 }} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row w-full items-center justify-center relative">
          <View className="absolute h-full left-1">
            <View className=" left-0 absolut mb-5">
              <TouchableOpacity>
                <Emoji name="hugging_face" style={{ fontSize: 33 }} />
              </TouchableOpacity>
            </View>

            <View className=" absolute left-0 bottom-0 mt-5">
              <TouchableOpacity>
                <Emoji name="innocent" style={{ fontSize: 33 }} />
              </TouchableOpacity>
            </View>
          </View>

          <View className="items-center px-5 justify-center my-2 ">
            <Image
              source={{
                uri: "https://c8.alamy.com/zooms/9/c1ae20f4f9dd4bb1904efa49479a42ac/tb0yme.jpg",
              }}
              style={{
                borderRadius: 65,
                height: 130,
                width: 130,
                borderWidth: 5,
                borderColor: colors.blue,
              }}
            />
          </View>
          <View className="absolute h-full right-1">
            <View className=" right-0 absolute mb-5">
              <TouchableOpacity>
                <Emoji name="zipper_mouth_face" style={{ fontSize: 33 }} />
              </TouchableOpacity>
            </View>
            <View className=" absolute right-0 bottom-0 mt-5">
              <TouchableOpacity>
                <Emoji name="cry" style={{ fontSize: 33 }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="flex-row">
          <View className=" w-full items-center h-28 justify-end">
            <View className="absolute left-12 top-5">
              <TouchableOpacity>
                <Emoji name="rage" style={{ fontSize: 33 }} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Emoji name="pensive" style={{ fontSize: 33 }} />
              </TouchableOpacity>
            </View>
            <View className="absolute right-12 top-5">
              <TouchableOpacity>
                <Emoji name="lying_face" style={{ fontSize: 33 }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View className="absolute bottom-12 items-center w-full">
        <Text className="text-xl font-bold" numberOfLines={1}>
          Ross the Boss
        </Text>
        <Text className="text-lg font-medium" numberOfLines={1}>
          Character (Politics)
        </Text>
        <Text className="text-ms text-gray-400">Not Provided</Text>
      </View>
    </SafeAreaView>
  );
};

export default SentemeterScreen;
