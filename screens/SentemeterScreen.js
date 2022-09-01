import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Modal,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../Style/colors";
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import { db, auth } from "../api/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

import AnimatedEmoji from "../components/AnimatedEmoji";

const { height, width } = Dimensions.get("window");

const SentemeterScreen = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = collection(db, "Employees");
    const q = query(usersRef);
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
    return () => unsub();
  }, []);

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

  const renderItem = (card) => {
    return (
      <View className="relative bg-white h-11/12 rounded-xl w-[width] elevation-lg">
        <View className="items-center w-full">
          <View className="w-full h-28">
            <View className="absolute left-12 bottom-4">
              <TouchableOpacity>
                <AnimatedEmoji name="grinning_face_with_star_eyes" />
              </TouchableOpacity>
            </View>

            <View className="items-center justify-center mt-5">
              <TouchableOpacity>
                <AnimatedEmoji name="smile" />
              </TouchableOpacity>
            </View>
            <View className="absolute right-12 bottom-4">
              <TouchableOpacity>
                <AnimatedEmoji name="face_with_monocle" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row w-full items-center justify-center relative">
            {/* <View className="absolute h-full left-1"> */}
            <View className=" left-0 absolute top-0 ">
              <TouchableOpacity>
                <AnimatedEmoji name="hugging_face" />
              </TouchableOpacity>
            </View>

            <View className=" absolute left-0 bottom-0 mt-4 ">
              <TouchableOpacity>
                <AnimatedEmoji name="innocent" />
              </TouchableOpacity>
            </View>
            {/* </View> */}

            <View className="items-center px-5 justify-center my-2 ">
              <Image
                source={{
                  uri:
                    card?.Employee_Image ||
                    "https://c8.alamy.com/zooms/9/c1ae20f4f9dd4bb1904efa49479a42ac/tb0yme.jpg",
                }}
                style={{
                  borderRadius: 65,
                  height: 130,
                  width: 130,
                  borderWidth: 5,
                  borderColor: colors.blue,
                  zIndex: -20,
                }}
              />
            </View>
            <View className="absolute h-full right-0">
              <View className=" right-1 absolute mb-5">
                <TouchableOpacity>
                  <AnimatedEmoji name="zipper_mouth_face" />
                </TouchableOpacity>
              </View>
              <View className=" absolute right-1 bottom-0 mt-4">
                <TouchableOpacity>
                  <AnimatedEmoji name="cry" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="flex-row">
            <View className=" w-full items-center h-28 justify-end mb-1">
              <View className="absolute left-12 top-4">
                <TouchableOpacity>
                  <AnimatedEmoji name="rage" />
                </TouchableOpacity>
              </View>
              <View className="items-center justify-center mb-3">
                <TouchableOpacity>
                  <AnimatedEmoji name="pensive" />
                </TouchableOpacity>
              </View>
              <View className="absolute right-12 top-4">
                <TouchableOpacity>
                  <AnimatedEmoji name="lying_face" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View className="items-center w-full -z-20 mb-4">
          <Text className="text-2xl font-bold " numberOfLines={1}>
            {card?.Employee_Name}
          </Text>
          <Text className="text-lg italic" numberOfLines={1}>
            {card?.Employee_Job_Title}
          </Text>
          <Text className="text-ms text-gray-400 italic">
            {card?.Employee_Status}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className=" items-center mt-2">
        <Text
          iterationCount={1}
          animation="slideInLeft"
          className="text-lg font-bold text-blue-500"
        >
          How do you feel about me today?
        </Text>
      </View>
      <Swiper
        containerStyle={{
          backgroundColor: "transparent",
        }}
        cards={users}
        renderCard={(card) => renderItem(card)}
        cardIndex={0}
        stackSize={1}
        infinite={true}
        verticalSwipe={false}
        outputRotationRange={["0deg", "0deg", "0deg"]}
      />
      <View className="absolute bottom-2 items-center justify-center w-full p-3 -z-20">
        <TouchableOpacity className="justify-center items-center w-4/5 bg-white rounded-3xl p-1 shadow-2xl border">
          <Text className="font-bold text-slate-500 text-base ">
            VIEW FEEDBACK
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SentemeterScreen;
