import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { GoalsList } from "../components/List";
import { COLORS, FONTS, SIZE } from "../data/theme";
import { useNavigation } from "@react-navigation/native";
import { useGoalsApi } from "../api/goals";
import { useQuery } from "@tanstack/react-query";

const GoalsView = () => {
  const navigation = useNavigation();
  const {getGoals} = useGoalsApi();

  // Get goals data query
  const { data, isLoading, error } = useQuery({
    queryKey: ["goals"],
    queryFn: getGoals,
  });

  const goals = data?.goals;

  const renderItem = ({ item }) => (
    <GoalsList
      name={item.name}
      background={item.color}
      percentage={item.percentage}
      onPress={() => {
        navigation.navigate("Goal Details", { id: item._id });
      }}
    />
  );

  if (isLoading) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  if (error) {
    return (
      <Text style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {error.message}
      </Text>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Your Goals</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 20, paddingBottom: 90 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white200,
  },
  headingContainer: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: COLORS.green100,
    justifyContent: "center",
  },
  listContainer: {
    flex: 8,
  },
  heading: {
    color: COLORS.blue200,
    fontSize: SIZE.heading,
    fontFamily: FONTS.regular,
    marginLeft: 25,
  },
  text: {
    color: COLORS.blue200,
    fontSize: SIZE.heading02,
  },
  textContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GoalsView;
