import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SentegramScreen from "../screens/SentegramScreen";
import SearchScreen from "../screens/SearchScreen";

const HomeScreenNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ title: "" }}>
      <Stack.Screen name="Sentegram" component={SentegramScreen} />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: 8,
          },
          headerTitle: "Sentegram",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigator;
