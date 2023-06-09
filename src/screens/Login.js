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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Welcome Back!</Text>
        <Text style={styles.subheading}>Please Login</Text>
      </View>
      <Text style={styles.label}>Email</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { width: 300 }]}
          value={email}
          maxLength={80}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { width: 300 }]}
          value={password}
          maxLength={80}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <FilledLargeButton dark={false} name="Login" />
      </View>
      <View style={styles.registerContainer}>
        <Text>No account? </Text>
        <Pressable>
          <Text style={{color: COLORS.coral200}}>Register Here</Text>
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
  },
  textContainer: {
    flex: 1,
    marginLeft: 40,
    marginTop: 50,
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
    marginLeft: 40,
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
  },
  registerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    fontFamily: FONTS.regular,
    fontSize: SIZE.small,
  },
});
