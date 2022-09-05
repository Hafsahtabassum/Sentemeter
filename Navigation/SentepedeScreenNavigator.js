import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SentegramScreen from "../screens/SentegramScreen";
import SearchScreen from "../screens/SearchScreen";
import SentepedeScreen from "../screens/SentepedeScreen";

const SentepedeScreenNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ title: "" }}>
      <Stack.Screen name="Sentepede" component={SentepedeScreen} />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: 8,
          },
          headerTitle: "Sentepede",
        }}
      />
    </Stack.Navigator>
  );
};

export default SentepedeScreenNavigator;
