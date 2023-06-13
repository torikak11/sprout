import React, { useEffect } from "react";
import BottomNav from "./src/navigation/BottomNav";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginNav from "./src/navigation/LoginNav";
import AuthContextProvider, { useAuth } from "./src/context/AuthContext";

const client = new QueryClient();

export default function App() {
  const [loaded] = useFonts({
    PlayfairDisplayRegular: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    PlayfairDisplayBold: require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
  });

  if (!loaded) return null;

  return (
    <AuthContextProvider>
      <AppContent />
    </AuthContextProvider>
  );
}

function AppContent() {
  const { authToken } = useAuth();
  console.log(authToken);

  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <StatusBar barStyle={"dark-content"} />
        {!authToken ? <LoginNav /> : <BottomNav />}
      </NavigationContainer>
    </QueryClientProvider>
  );
}
