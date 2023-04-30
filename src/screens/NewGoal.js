import { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Text, TextInput, StyleSheet, Pressable, FlatList } from "react-native";
import { COLORS, SIZE, FONTS, SHADOWS } from "../data/theme";
import { FilledLargeButton } from "../components/Button";
import { ColorSelector, PlantSelector } from "../components/Selector";
import IonIcons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { goalsSlice } from "../store/goalsSlice";
import { useDispatch } from "react-redux";
import goalPlants from "../data/goalPlants";

const NewGoal = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [steps, setSteps] = useState([]);
    const [plant, setPlant] = useState(goalPlants[0]);
    const [color, setColor] = useState(COLORS.green200);

    const handleAddGoal = () => {
        const newGoal = {
            id: Date.now().toString(),
            name, 
            steps: steps.filter((step) => step.name !== ''),
            plant,
            color,
        };
        dispatch(goalsSlice.actions.addGoal({newGoal}));
        setName('');
        setSteps([]);
        setPlant(goalPlants[0]);
        setColor(COLORS.green200);
        navigation.navigate('Stack Goals')
    };

    const handleAddStep = () => {
        const newStep = {id: Date.now().toString(), name: '', complete: false};
        setSteps([...steps, newStep]);
    };

    const handleDeleteStep = (index) => {
        const newSteps = steps.filter((step, i) => i !== index);
        setSteps(newSteps);
    };

    const handleStepChange = (index, text) => {
        const newSteps = [...steps];
        newSteps[index].name = text;
        newSteps.filter((step) => step.name !== '');
        setSteps(newSteps);
    };

    const renderSteps = ({item, index}) => {
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
                    <IonIcons name="remove-circle-outline" size={32} color={COLORS.white100} />
                </Pressable>
            </View>
        );
    };

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: color}]}>
            <ScrollView contentContainerStyle={{alignItems: 'center', paddingBottom: 70, paddingTop: 20}}>
                <View style={styles.border}>
                    <Text style={color === COLORS.blue200 ? [styles.label, {color: COLORS.white100}] : styles.label}>NAME</Text> 
                    <TextInput 
                        style={[styles.input, {width: 300}]}
                        value={name} 
                        maxLength={80}
                        onChangeText={name => setName(name)}
                    />
                </View>
                <View style={styles.border}>
                <Text style={color === COLORS.blue200 ? [styles.label, {color: COLORS.white100}] : styles.label}>STEPS</Text>
                    <View style={styles.stepsContainer}>
                        <FlatList 
                            data={steps}
                            renderItem={renderSteps}
                            scrollEnabled={false}
                        />
                    </View>
                    <View style={styles.addStepContainer}>
                        <Pressable style={styles.stepButtonContainer} onPress={handleAddStep} >
                            <IonIcons name="add" size={32} color={COLORS.white100} />
                            <Text style={styles.text}>Add Step</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.border}>
                <Text style={color === COLORS.blue200 ? [styles.label, {color: COLORS.white100}] : styles.label}>COLOR</Text>
                    <ColorSelector currentColor={color} setColor={setColor} />
                </View>
                <View style={styles.border}>
                <Text style={color === COLORS.blue200 ? [styles.label, {color: COLORS.white100}] : styles.label}>PLANT</Text>
                    <PlantSelector currentPlantName={plant.name} setPlant={setPlant} />
                </View>
                <View style={{marginTop: 20}}>
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
        width: '80%',
        borderBottomColor: COLORS.white200,
        borderBottomWidth: 1,
        alignItems: 'center',
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
        color: '#333',
        ...SHADOWS.shadow01
    },
    stepButtonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
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
        resizeMode: 'contain',
    },
    stepInput: {
        height: 40,
        width: 250,
        borderRadius: 10,
        paddingHorizontal: 5,
        backgroundColor: COLORS.white100,
        fontFamily: FONTS.regular,
        color: '#333',
        ...SHADOWS.shadow01
    },
    stepsContainer: {
        width: '100%',
        justifyContent: 'flex-start'
    },
    stepContainer: {
        width: '100%',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addStepContainer: {
        width: '100%',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default NewGoal;