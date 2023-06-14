import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const loadAuthToken = async () => {
      const res = await SecureStore.getItemAsync("authToken");
      if (res) {
        console.log("loaded token");
        setAuthToken(res);
      }
    };
    loadAuthToken();
  }, []);

  const updateAuthToken = async (newToken) => {
    await SecureStore.setItemAsync("authToken", newToken);
    setAuthToken(newToken);
  };

  return (
    <AuthContext.Provider value={{ authToken, updateAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
