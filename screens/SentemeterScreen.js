import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Modal,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Emoji from "react-native-emoji";
import colors from "../Style/colors";
import { Ionicons } from "@expo/vector-icons";
const SentemeterScreen = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: { backgroundColor: colors.blue },
      headerTitleStyle: { color: colors.white },
      headerTintColor: colors.orange,
      headerLeft: () => (
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            className="ml-5"
            onPress={() => navigation.navigate("Profile")}
          >
            <FontAwesome name="user" size={30} color={colors.white} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity activeOpacity={0.8} className="mr-5">
            <Ionicons name="chatbox-outline" size={32} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="h-10 items-center mt-1  ">
        <Text className="text-lg font-bold text-blue-500">
          How do you feel about me today?
        </Text>
      </View>
      <View className="items-center w-full">
        <View className="w-full h-28">
          <View className="absolute left-16 bottom-6">
            <TouchableOpacity>
              <Emoji
                name="grinning_face_with_star_eyes"
                style={{ fontSize: 33 }}
              />
            </TouchableOpacity>
          </View>
          <View className="items-center justify-center mt-1">
            <TouchableOpacity>
              <Emoji name="smile" style={{ fontSize: 33 }} />
            </TouchableOpacity>
          </View>

          <View className="absolute right-14 bottom-6">
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
          <View className=" w-full items-center h-28 justify-end mb-1">
            <View className="absolute left-14 top-6">
              <TouchableOpacity>
                <Emoji name="rage" style={{ fontSize: 33 }} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Emoji name="pensive" style={{ fontSize: 33 }} />
              </TouchableOpacity>
            </View>
            <View className="absolute right-14 top-6">
              <TouchableOpacity>
                <Emoji name="lying_face" style={{ fontSize: 33 }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View className="items-center w-full  mt-1">
        <Text className="text-2xl font-bold" numberOfLines={1}>
          Ross the Boss
        </Text>
        <Text className="text-lg italic" numberOfLines={1}>
          Character (Politics)
        </Text>
        <Text className="text-ms text-gray-400 italic">Not Provided</Text>
      </View>

      <View className="mt-4 items-center justify-center w-full p-4">
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          className="justify-center items-center w-4/5 bg-white rounded-3xl p-1 shadow-2xl border"
        >
          <Text className="font-bold text-slate-500 text-base ">
            VIEW FEEDBACK
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Modal
        className="h-2/3 w-full"
        animationType={"slide"}
        transparent={false}
        // visible={this.state.isVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has now been closed.');
        // }}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
          tempus augue, a convallis velit.
        </Text>
      </Modal> */}
    </SafeAreaView>
  );
};

export default SentemeterScreen;
