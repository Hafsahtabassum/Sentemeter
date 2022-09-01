import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import colors from "../Style/colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { db, auth } from "../api/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { UserState } from "./context/Usercontext";

const SearchScreen = () => {
  const { setUser } = UserState();
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [users, setUsers] = useState([]);

  const onSearch = () => {
    setSearchResults(
      users.filter((item) =>
        item.Employee_Name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };
  useEffect(() => {
    onSearch();
  }, [search]);
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
    onSearch();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Sentepede",
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
  return (
    <View className="flex-1 bg-white">
      <Text className="text-xl font-semibold ml-5 mt-3">
        I would like to thank...
      </Text>
      <View className="items-center ">
        <View className="elevation bg-white items-center flex-row border rounded-full py-2 px-2 w-4/5 my-2">
          <AntDesign
            name="search1"
            size={24}
            color={colors.orange}
            className="pr-4"
          />
          <TextInput
            className="text-sm text-semibold ml-3 from-neutral-800"
            placeholder="Search here for colleague..."
            autoFocus={true}
            selectionColor={colors.dark}
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        </View>
      </View>
      <FlatList
        data={searchResults}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setUser(item);
                navigation.navigate("Sentegram");
              }}
              className="w-full border-b flex-row  py-2"
            >
              <View className="w-3/12 items-center justify-center">
                <Image
                  source={{
                    uri:
                      item.Employee_Image ||
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
                    {item.Employee_Name}
                  </Text>
                </View>
                <View className="flex-row pb-1">
                  <Text className="text-xs ">User Id: </Text>
                  <Text className="text-xs  text-blue-900" numberOfLines={1}>
                    {item.Employee_Email}
                  </Text>
                </View>

                <View className="flex-row pb-1">
                  <Text className="text-xs ">Designation: </Text>
                  <Text className="text-xs  text-purple-800">
                    {item.Employee_Designation}
                  </Text>
                </View>

                <View className="flex-row pb-1">
                  <Text className="text-xs ">Department: </Text>
                  <Text className="text-xs text-red-800">
                    {item.Employee_Department}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default SearchScreen;
