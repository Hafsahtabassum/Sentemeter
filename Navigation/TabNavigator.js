import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HelpScreen from "../screens/HelpScreen";
import SentesurveyScreen from "../screens/SentesurveyScreen";
import SentepedeScreenNavigator from "./SentepedeScreenNavigator";
import SentegramScreen from "../screens/SentegramScreen";
import HomeScreenNavigator from "./HomeScreenNavigator";
import SentegramScreenNavigator from "./SentegramScreenNavigator";
import color from "../Style/colors";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../Style/colors";

const TabNavigator = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (tab) => {
          let iconName;
          if (route.name == "SENTEMETER") {
            iconName = "home";
          } else if (route.name == "SENTEGRAM") {
            iconName = "home";
          } else if (route.name == "SENTESURVEY") {
            iconName = "home";
          } else if (route.name == "SENTEPEDE") {
            iconName = "home";
          } else if (route.name == "HELP") {
            iconName = "question-circle";
          }
          return (
            <FontAwesome
              name={iconName}
              size={30}
              color={tab.focused ? colors.orange : colors.blue}
            />
          );
        },
        headerShown: true,
        activeTintColor: colors.orange,
        inactiveTintColor: colors.blue,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen
        name="SENTEMETER"
        component={HomeScreenNavigator}
        options={{
          tabBarLabelStyle: {
            fontSize: 8,
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SENTEGRAM"
        component={SentegramScreenNavigator}
        options={{
          tabBarLabelStyle: {
            fontSize: 8,
          },
          headerShown: false,
          tabBarLabel: "SENTEGRAM",
        }}
      />
      <Tab.Screen
        name="SENTESURVEY"
        component={SentesurveyScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: 8,
          },
          headerTitle: "Sentesurvey",
          tabBarLabel: "SENTESURVEY",
        }}
      />
      <Tab.Screen
        name="SENTEPEDE"
        component={SentepedeScreenNavigator}
        options={{
          tabBarLabelStyle: {
            fontSize: 8,
          },
          headerTitle: "Sentepede",
          tabBarLabel: "SENTEPEDE",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="HELP"
        component={HelpScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: 8,
          },
          headerTitle: "Sentemeter",
          tabBarLabel: "HELP",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
