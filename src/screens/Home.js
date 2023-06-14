import { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  ImageBackground,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";
import { FilledSmallButton, OutlineSmallButton } from "../components/Button";
import { COLORS, FONTS, SIZE } from "../data/theme";
import { useQuery } from "@tanstack/react-query";
import { getGoals } from "../api/goals";

const Home = () => {
  //sets state to current time for greeting
  const [currentTime, setCurrentTime] = useState("");
  const [image, setImage] = useState("");
  const [pressed, setPressed] = useState(1);

  useEffect(() => {
    let hour = new Date().getHours();
    let greeting;
    let image;
    if (hour >= 4 && hour < 8) {
      greeting = "Good Morning";
      image = require("../../assets/images/early-morning-landscape.png");
    } else if (hour >= 8 && hour < 12) {
      greeting = "Good Morning";
      image = require("../../assets/images/morning-landscape.png");
    } else if (hour >= 12 && hour < 17) {
      greeting = "Good Afternoon";
      image = require("../../assets/images/afternoon-landscape.png");
    } else if (hour >= 17 && hour < 21) {
      greeting = "Good Evening";
      image = require("../../assets/images/evening-landscape.png");
    } else {
      greeting = "Good Night";
      image = require("../../assets/images/night-landscape.png");
    }
    setCurrentTime(greeting);
    setImage(image);
  });

  const {
    data: goalsData,
    isLoading: goalsLoading,
    error: goalsError,
  } = useQuery({
    queryKey: ["goals"],
    queryFn: getGoals,
  });

  const goals = goalsData?.goals;

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image
        source={
          item.percentage === 100
            ? {uri: item.plant.images.large}
            : item.percentage <= 50
            ? {uri: item.plant.images.small}
            : {uri: item.plant.images.medium}
        }
        style={styles.images}
      />
    </View>
  );

  if (goalsLoading) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  if (goalsError) {
    return (
      <Text style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {goalsError.message}
      </Text>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.textGreeting}>{currentTime},</Text>
          <Text style={styles.textName}>Victoria</Text>
        </View>
        <View style={styles.plantContainer}>
          <FlatList
            data={goals}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white200,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover"
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textContainer: {
    marginLeft: 40,
    marginTop: 50,
    flex: 2,
  },
  textGreeting: {
    fontSize: SIZE.heading,
    color: COLORS.white100,
    fontFamily: FONTS.bold,
  },
  textName: {
    fontSize: SIZE.heading02,
    color: COLORS.white100,
    fontFamily: FONTS.regular,
  },
  plantContainer: {
    flex: 4,
    marginBottom: 80,
  },
  imageContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: "flex-end",
  },
  images: {
    resizeMode: "contain",
    height: 200,
    width: 150,
  },
});

export default Home;
