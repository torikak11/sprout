import { SafeAreaView, View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZE } from "../data/theme";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";

const Logout = () => {
  const { removeAuthToken } = useAuth();

  const handleLogout = async () => {
    try {
      await removeAuthToken();
    } catch (err) {
      Alert.alert(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.button} onPress={handleLogout}>
        <Text style={styles.text}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white200,
  },
  button: {
    width: "60%",
    backgroundColor: COLORS.green200,
    aspectRatio: 8 / 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginVertical: 10,
  },
  text: {
    fontFamily: FONTS.bold,
    fontSize: SIZE.subheading,
    color: COLORS.white100,
  },
  heading: {
    fontFamily: FONTS.regular,
    fontSize: SIZE.heading02,
    paddingBottom: 15,
  },
  border: {
    width: "80%",
    borderBottomColor: COLORS.green100,
    borderBottomWidth: 1,
    alignItems: "center",
    marginBottom: 15,
  },
});

export default Logout;
