import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Navigation from "./Navigation/Navigation";
import { UserProvider } from "./screens/context/Usercontext";

export default function App() {
  return (
    <TailwindProvider>
      <UserProvider>
        <StatusBar style="light" />
        <Navigation />
      </UserProvider>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
