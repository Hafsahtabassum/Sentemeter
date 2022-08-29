import { View, Text } from "react-native";
import React from "react";
import CoreValueScoreScreen from "../screens/CoreValueScoreScreen";
import SentemeterScreen from "../screens/SentemeterScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SentegramRecievedScreen from "../screens/SentegramRecievedScreen";
import { createStackNavigator } from "@react-navigation/stack";

const HomeScreenNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ title: "" }}>
      <Stack.Screen name="Sentemeter" component={SentemeterScreen} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: 8,
          },
          headerTitle: "Sentemeter",
        }}
      />
      <Stack.Screen name="CoreValue" component={CoreValueScoreScreen} />
      <Stack.Screen name="Sentegram" component={SentegramRecievedScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigator;
