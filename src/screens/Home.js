import { StyleSheet, View, FlatList, ImageBackground, Pressable } from "react-native";

export default function Home() {
    return (
        <View>
            <ImageBackground>
                <View>
                    <Text>Good Morning</Text>
                    <Text>Victoria</Text>
                </View>
                <FlatList />
            </ImageBackground>
            <View>
                <Pressable>All</Pressable>
                <Pressable>Goals</Pressable>
                <Pressable>Habits</Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  });