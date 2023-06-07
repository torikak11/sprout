import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  FlatList,
  Alert,
} from "react-native";
import { COLORS, SIZE, FONTS, SHADOWS } from "../data/theme";
import { FilledLargeButton } from "../components/Button";
import { ColorSelector } from "../components/Selector";
import IonIcons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useCreateGoalMutation, useGetPlantsQuery } from "../store/apiSlice";

const NewGoal = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [steps, setSteps] = useState([]);
  const [plant, setPlant] = useState(null);
  const [color, setColor] = useState(COLORS.green200);

  //fetch plants data
  const {
    data: plantsData,
    isLoading: plantsIsLoading,
    error: plantsError,
  } = useGetPlantsQuery();

  if (plantsError) {
    return <Text>Error fetching plants: {plantsError.error}</Text>;
  }

  if (plantsIsLoading) {
    return <Text>Loading</Text>;
  }

  // fetch createGoal hook
  const [createGoal, { data, isLoading, error }] = useCreateGoalMutation();

  if (error) {
    return <Text>Error creating goal: {error.error}</Text>;
  }

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  const handleAddGoal = async () => {
    const newGoal = {
      name,
      steps: steps.filter((step) => step.name !== ""),
      plant: plant._id,
      color,
    };
    const result = await createGoal(newGoal); //dispatch(goalsSlice.actions.addGoal({newGoal}));
    if (result.data?.status === "OK") {
      Alert.alert("Goal created");
    }
    setName("");
    setSteps([]);
    setPlant(null);
    setColor(COLORS.green200);
    navigation.navigate("Add New");
  };

  const handleAddStep = () => {
    const newStep = { id: Date.now().toString(), name: "", complete: false };
    setSteps([...steps, newStep]);
  };

  const handleDeleteStep = (index) => {
    const newSteps = steps.filter((step, i) => i !== index);
    setSteps(newSteps);
  };

  const handleStepChange = (index, text) => {
    const newSteps = [...steps];
    newSteps[index].name = text;
    newSteps.filter((step) => step.name !== "");
    setSteps(newSteps);
  };

  const handleAddPlant = (item) => {
    setPlant(item);
  };

  const renderSteps = ({ item, index }) => {
    return (
      <View style={styles.stepContainer}>
        <TextInput
          style={styles.stepInput}
          value={item.name}
          placeholder="Add step here"
          maxLength={60}
          onChangeText={(text) => handleStepChange(index, text)}
        />
        <Pressable onPress={() => handleDeleteStep(index)}>
          <IonIcons
            name="remove-circle-outline"
            size={32}
            color={COLORS.white100}
          />
        </Pressable>
      </View>
    );
  };

  const renderPlants = ({ item }) => {
    return (
      <View style={styles.plantButton}>
        <Pressable
          style={
            item._id === plant._id
              ? styles.selectedPlantContainer
              : styles.plantContainer
          }
          onPress={() => handleAddPlant(item)}
        >
          <Image source={item.image} style={styles.plantImage} />
        </Pressable>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: color }]}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 70,
          paddingTop: 20,
        }}
      >
        <View style={styles.border}>
          <Text
            style={
              color === COLORS.blue200
                ? [styles.label, { color: COLORS.white100 }]
                : styles.label
            }
          >
            NAME
          </Text>
          <TextInput
            style={[styles.input, { width: 300 }]}
            value={name}
            maxLength={80}
            onChangeText={(name) => setName(name)}
          />
        </View>
        <View style={styles.border}>
          <Text
            style={
              color === COLORS.blue200
                ? [styles.label, { color: COLORS.white100 }]
                : styles.label
            }
          >
            STEPS
          </Text>
          <View style={styles.stepsContainer}>
            <FlatList
              data={steps}
              renderItem={renderSteps}
              scrollEnabled={false}
            />
          </View>
          <View style={styles.addStepContainer}>
            <Pressable
              style={styles.stepButtonContainer}
              onPress={handleAddStep}
            >
              <IonIcons name="add" size={32} color={COLORS.white100} />
              <Text style={styles.text}>Add Step</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.border}>
          <Text
            style={
              color === COLORS.blue200
                ? [styles.label, { color: COLORS.white100 }]
                : styles.label
            }
          >
            COLOR
          </Text>
          <ColorSelector currentColor={color} setColor={setColor} />
        </View>
        <View style={styles.border}>
          <Text
            style={
              color === COLORS.blue200
                ? [styles.label, { color: COLORS.white100 }]
                : styles.label
            }
          >
            PLANT
          </Text>
          <View style={styles.plantsContainer}>
            <FlatList
              data={plantsData}
              renderItem={renderPlants}
              scrollEnabled={false}
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <FilledLargeButton
            name="Save"
            dark={color === COLORS.blue200 ? true : false}
            onPress={handleAddGoal}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  border: {
    width: "80%",
    borderBottomColor: COLORS.white200,
    borderBottomWidth: 1,
    alignItems: "center",
    paddingBottom: 20,
  },
  label: {
    fontSize: SIZE.subheading,
    fontFamily: FONTS.regular,
    marginVertical: 10,
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
  stepButtonContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 5,
    color: COLORS.white100,
    fontSize: SIZE.body,
  },
  imageBackground: {
    backgroundColor: COLORS.white100,
    padding: 5,
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  stepInput: {
    height: 40,
    width: 250,
    borderRadius: 10,
    paddingHorizontal: 5,
    backgroundColor: COLORS.white100,
    fontFamily: FONTS.regular,
    color: "#333",
    ...SHADOWS.shadow01,
  },
  stepsContainer: {
    width: "100%",
    justifyContent: "flex-start",
  },
  stepContainer: {
    width: "100%",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addStepContainer: {
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  plantsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 10,
  },
  selectedPlantContainer: {
    width: "100%",
    aspectRatio: 1 / 1,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: COLORS.white100,
    alignItems: "center",
    justifyContent: "center",
  },
  plantContainer: {
    width: "100%",
    aspectRatio: 1 / 1,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: "#DDD",
    alignItems: "center",
    justifyContent: "center",
  },
  plantButton: {
    width: "20%",
    alignItems: "center",
  },
  plantImage: {
    resizeMode: "contain",
    height: 40,
    width: 40,
  },
  plantText: {
    fontSize: SIZE.span,
    fontFamily: FONTS.regular,
    color: COLORS.white100,
    marginTop: 10,
  },
});

export default NewGoal;
