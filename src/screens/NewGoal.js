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
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import { COLORS, SIZE, FONTS, SHADOWS } from "../data/theme";
import { FilledLargeButton } from "../components/Button";
import { ColorSelector } from "../components/Selector";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getPlants } from "../api/plants";

const NewGoal = () => {
  const {
    data: plantData,
    isLoading: plantsIsLoading,
    error: plantsError,
  } = useQuery({
    queryKey: ["plants"],
    queryFn: getPlants,
  });
  const plants = plantData?.plants;

  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [steps, setSteps] = useState([]);
  const [plant, setPlant] = useState(plants[0]);
  const [color, setColor] = useState(COLORS.green200);

  const handleAddGoal = async () => {
    const newGoal = {
      name,
      steps: steps.filter((step) => step.name !== ""),
      plant: plant._id,
      color,
    };
    setName("");
    setSteps([]);
    setPlant({});
    setColor(COLORS.green200);
    navigation.navigate("Add New");
  };

  const handleAddStep = async () => {
    const newStep = { id: Date.now().toString(), name: "", complete: false };
    setSteps([...steps, newStep]);
  };

  const handleDeleteStep = async (index) => {
    const newSteps = steps.filter((step, i) => i !== index);
    setSteps(newSteps);
  };

  const handleStepChange = async (index, text) => {
    const newSteps = [...steps];
    newSteps[index].name = text;
    newSteps.filter((step) => step.name !== "");
    setSteps(newSteps);
  };

  const handleAddPlant = async (item) => {
    setPlant(item);
  };

  if (plantsIsLoading) {
    return <ActivityIndicator />;
  }

  if (plantsError) {
    return <Text>{plantsError.message}</Text>;
  }

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
          <Ionicons
            name="remove-circle-outline"
            size={32}
            color={COLORS.white100}
          />
        </Pressable>
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
              <Ionicons name="add" size={32} color={COLORS.white100} />
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
            {plants.map((item) => {
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
                  <Text style={styles.plantText} numberOfLines={1}>
                    {item.name}
                  </Text>
                </View>
              );
            })}
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
  plantText: {
    color: COLORS.white100,
    fontSize: SIZE.small,
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
    justifyContent: "center",
    gap: 10,
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
    backgroundColor: "#CCC",
    alignItems: "center",
    justifyContent: "center",
  },
  plantButton: {
    width: "20%",
    alignItems: "center",
  },
  plantImage: {
    resizeMode: "contain",
    width: "80%",
    height: "80%",
  },
  plantText: {
    fontSize: SIZE.span,
    fontFamily: FONTS.regular,
    color: COLORS.white100,
    marginTop: 10,
  },
});

export default NewGoal;
