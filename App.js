import React from "react";
import BottomNav from "./src/navigation/BottomNav";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
        <BottomNav />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
