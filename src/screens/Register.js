import { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  View,
  Alert,
} from "react-native";
import { COLORS, FONTS, SHADOWS, SIZE } from "../data/theme";
import { FilledLargeButton } from "../components/Button";
import { register } from "../api/auth";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {updateAuthToken} = useAuth();

  const handleRegister = async () => {
    try {
      const res = await register({name, email, password})
      await updateAuthToken(res.token)
    } catch (err) {
      console.log(err)
      Alert.alert(err.message)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Create an account</Text>
      </View>
      <View
        style={{
          flex: 3,
          width: 300,
          justifyContent: "flex-start",
        }}
      >
        <Text style={styles.label}>Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: "100%" }]}
            value={name}
            maxLength={80}
            onChangeText={(name) => setName(name)}
          />
        </View>
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
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { width: "100%" }]}
            value={password}
            maxLength={80}
            textContentType="newPassword"
            onChangeText={(password) => setPassword(password)}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <FilledLargeButton dark={false} name="Register" onPress={handleRegister} />
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white200,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginTop: 50,
    width: 300,
    justifyContent: "flex-start",
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
    flex: 2,
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
