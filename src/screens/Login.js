import { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { COLORS, FONTS, SHADOWS, SIZE } from "../data/theme";
import { FilledLargeButton } from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { login } from "../api/auth";
import { Alert } from "react-native";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {updateAuthToken} = useAuth();

  const handleLogin = async () => {
    try {
      const res = await login({email, password})
      await updateAuthToken(res.token)
    } catch (err) {
      Alert.alert("Username or password do not match")
    } 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Welcome Back!</Text>
      </View>
      <View
        style={{
          flex: 1,
          width: 300,
          justifyContent: "center",
          marginHorizontal: "auto",
        }}
      >
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: "100%" }]}
            value={email}
            maxLength={80}
            textContentType="emailAddress"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View
          style={{
            flex: 1,
            width: 300,
            justifyContent: "center",
            marginHorizontal: "auto",
          }}
        >
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { width: "100%" }]}
              value={password}
              maxLength={80}
              textContentType="password"
              onChangeText={(password) => setPassword(password)}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <FilledLargeButton dark={false} name="Login" onPress={handleLogin} />
      </View>
      <View style={styles.registerContainer}>
        <Text>No account? </Text>
        <Pressable onPress={() => {navigation.navigate("Register")}}>
          <Text style={{ color: COLORS.coral200 }}>Register Here</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white200,
    alignItems: "center",
    justifyContent: 'center'
  },
  textContainer: {
    flex: 1,
    marginTop: 50,
    width: 300,
    justifyContent: 'center',
  },
  heading: {
    fontFamily: FONTS.bold,
    color: COLORS.green200,
    fontSize: SIZE.heading,
  },
  subheading: {
    fontFamily: FONTS.regular,
    color: COLORS.blue200,
    fontSize: SIZE.heading02,
    marginTop: 5,
  },
  label: {
    fontFamily: FONTS.regular,
    marginLeft: 10,
    marginBottom: 5,
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 5,
    backgroundColor: COLORS.white100,
    fontFamily: FONTS.regular,
    color: "#333",
    ...SHADOWS.shadow01,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  registerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    fontFamily: FONTS.regular,
    fontSize: SIZE.small,
  },
});
