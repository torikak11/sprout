import React from "react";
import BottomNav from "./src/navigation/BottomNav";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./src/screens/Login";
import LoginNav from "./src/navigation/LoginNav";

const client = new QueryClient();

export default function App() {
  const [loaded] = useFonts({
    PlayfairDisplayRegular: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    PlayfairDisplayBold: require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
  });

  if (!loaded) return null;

  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <StatusBar barStyle={"dark-content"} />
        <LoginNav />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
