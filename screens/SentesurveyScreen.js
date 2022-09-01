import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Emoji from "react-native-emoji";
import colors from "../Style/colors";
import { AntDesign } from "@expo/vector-icons";
import AnimatedEmoji from "../components/AnimatedEmoji";

const SentesurveyScreen = () => {
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
    <SafeAreaView className="flex-1 bg-black">
      <View className="h-10 items-center my-10  ">
        <Text className="text-3xl font-extrabold text-orange-600">
          Sentemeter
        </Text>
      </View>
      <View className="items-center w-full relative flex-1">
        <View className="w-full h-24">
          <View className="absolute left-16 bottom-5">
            <TouchableOpacity>
              <AnimatedEmoji name="grinning_face_with_star_eyes" />
            </TouchableOpacity>
          </View>
          <View className="items-center justify-center">
            <TouchableOpacity>
              <AnimatedEmoji name="smile" />
            </TouchableOpacity>
          </View>

          <View className="absolute right-16 bottom-5">
            <TouchableOpacity>
              <AnimatedEmoji name="face_with_monocle" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row w-full items-center justify-center relative">
          <View className="absolute h-full left-1">
            <View className=" left-4 absolute top-0">
              <TouchableOpacity>
                <AnimatedEmoji name="hugging_face" />
              </TouchableOpacity>
            </View>

            <View className=" absolute left-4 bottom-0 mt-5">
              <TouchableOpacity>
                <AnimatedEmoji name="innocent" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="items-center px-5 justify-center my-2 ">
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8oyr0Wz0lSy02kVPuSsF3kcMeY2JCVCZjaQ&usqp=CAU",
              }}
              style={{
                borderRadius: 65,
                height: 130,
                width: 130,
                borderWidth: 3,
                borderColor: colors.blue,
              }}
            />
          </View>
          <View className="absolute h-full right-1">
            <View className=" right-4 absolute mb-5">
              <TouchableOpacity>
                <AnimatedEmoji name="zipper_mouth_face" />
              </TouchableOpacity>
            </View>
            <View className=" absolute right-4 bottom-0 mt-5">
              <TouchableOpacity>
                <AnimatedEmoji name="cry" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="flex-row">
          <View className=" w-full items-center h-24 justify-end">
            <View className="absolute left-16 top-5">
              <TouchableOpacity>
                <AnimatedEmoji name="rage" />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <AnimatedEmoji name="pensive" className="mb-3" />
              </TouchableOpacity>
            </View>
            <View className="absolute right-16 top-5">
              <TouchableOpacity>
                <AnimatedEmoji name="lying_face" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View className="items-center w-full mb-3">
        <Text className="text-xl text-white">
          I feel that my job is important and am motivated by what my company
          does/represents
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SentesurveyScreen;
