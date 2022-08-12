import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HelpScreen from "../screens/HelpScreen";
import SentesurveyScreen from "../screens/SentesurveyScreen";
import SentepedeScreen from "../screens/SentepedeScreen";
import SentegramScreen from "../screens/SentegramScreen";
import HomeScreenNavigator from "./HomeScreenNavigator";
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
        headerShown: false,
        activeTintColor: colors.orange,
        inactiveTintColor: colors.blue,
        keyboardHidesTabBar: true,
      })}
    >
      <Tab.Screen
        name="SENTEMETER"
        component={HomeScreenNavigator}
        options={{
          tabBarLabelStyle: {
            fontSize: 8,
          },
        }}
      />
      <Tab.Screen
        name="SENTEGRAM"
        component={SentegramScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: 8,
          },
        }}
      />
      <Tab.Screen
        name="SENTESURVEY"
        component={SentesurveyScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: 8,
          },
        }}
      />
      <Tab.Screen
        name="SENTEPEDE"
        component={SentepedeScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: 8,
          },
        }}
      />
      <Tab.Screen
        name="HELP"
        component={HelpScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: 8,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
