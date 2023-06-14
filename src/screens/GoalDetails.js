
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { COLORS, FONTS, SIZE } from "../data/theme";
import { Task } from "../components/Task";
import { FilledLargeButton } from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGoal, getGoal, updateGoal } from "../api/goals";

const GoalDetails = (props) => {
  const id = props.route.params.id;
  const navigation = useNavigation();

  //get goal query
  const {
    data,
    isLoading: goalIsLoading,
    error,
  } = useQuery({
    queryKey: ["goals", id],
    queryFn: () => getGoal(id),
  });

  const goal = data?.goal;

  const queryClient = useQueryClient();

  //update goal query
  const {
    mutateAsync: updateMutate,
    isLoading: updateLoading,
    isError: updateError,
  } = useMutation({
    mutationFn: updateGoal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["goals"] });
    },
  });

  //delete goal query
  const {
    mutateAsync: deleteMutate,
    isLoading: deleteLoading,
    isError: deleteError,
  } = useMutation({
    mutationFn: deleteGoal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["goals"] });
    },
  });

  const renderItem = ({ item }) => (
    <Task
      text={item.name}
      complete={item.complete}
      onPress={() => handleCompleteStep(item)}
    />
  );

  const handleCompleteStep = async (item) => {
    const updatedSteps = goal.steps.map((step) => {
      if (step._id === item._id) {
        return {
          ...step,
          complete: !step.complete,
        };
      }
      return step;
    });

    const stepsCompleted = updatedSteps.filter((step) => step.complete).length;
    const updatedPercentage = Math.floor(
      (stepsCompleted / updatedSteps.length) * 100
    );

    const editedGoal = {
      _id: goal._id,
      name: goal.name,
      steps: updatedSteps,
      plant: {_id: goal.plant._id},
      color: goal.color,
      percentage: updatedPercentage,
      complete: updatedPercentage === 100 ? true : false,
    };

    try {
      await updateMutate(editedGoal);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  };

  const handleDeleteGoal = async () => {
    try {
      await deleteMutate(id);
      navigation.navigate("Stack Goals");
    } catch (err) {
      console.log("Error: ", err.message);
    }
  };

  if (goalIsLoading || updateLoading || deleteLoading) {
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
      <View style={styles.plantContainer}>
        <Image
          source={
            goal.percentage === 100
              ? {uri: goal.plant.images.large}
              : goal.percentage <= (50)
              ? {uri: goal.plant.images.small}
              : {uri: goal.plant.images.medium}
          }
          style={styles.image}
        />
      </View>
      <View style={[styles.detailsContainer, { backgroundColor: goal.color }]}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 70, paddingTop: 20 }}
        >
          <View style={{ alignItems: "center" }}>
            <View style={styles.border}>
              <Text style={styles.nameText}>{goal.name}</Text>
            </View>
            <View style={styles.border}>
              <Text
                style={
                  goal.color === COLORS.blue200
                    ? [styles.label, { color: COLORS.white200 }]
                    : styles.label
                }
              >
                PROGRESS
              </Text>
              <View style={styles.progressContainer}>
                <Text style={styles.percentage}>{goal.percentage}%</Text>
              </View>
            </View>
            <View style={styles.border}>
              <Text
                style={
                  goal.color === COLORS.blue200
                    ? [styles.label, { color: COLORS.white200 }]
                    : styles.label
                }
              >
                STEPS
              </Text>
              <View style={styles.stepContainer}>
                <FlatList
                  data={goal.steps}
                  renderItem={renderItem}
                  scrollEnabled={false}
                />
              </View>
            </View>
            <View style={{ marginVertical: 10 }}>
              <FilledLargeButton
                name="Delete Goal"
                dark={goal.color === COLORS.blue200 ? true : false}
                onPress={handleDeleteGoal}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white200,
  },
  plantContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    resizeMode: "contain",
    height: "90%",
    width: "50%",
  },
  detailsContainer: {
    flex: 6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  nameText: {
    marginTop: 20,
    fontFamily: FONTS.regular,
    fontSize: SIZE.heading02,
    color: COLORS.white100,
  },
  border: {
    width: "80%",
    borderBottomColor: COLORS.white200,
    borderBottomWidth: 1,
    alignItems: "center",
    paddingBottom: 15,
    marginBottom: 10,
  },
  label: {
    fontSize: SIZE.subheading,
    fontFamily: FONTS.regular,
    marginBottom: 5,
  },
  progressContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: COLORS.white100,
  },
  percentage: {
    fontSize: SIZE.subheading,
    color: COLORS.white100,
  },
  stepContainer: {
    width: "100%",
    justifyContent: "flex-start",
  },
});

export default GoalDetails;
