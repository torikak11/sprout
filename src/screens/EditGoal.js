import { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, View, Text, TextInput, StyleSheet, Pressable, FlatList } from "react-native";
import { COLORS, SIZE, FONTS, SHADOWS } from "../data/theme";
import { FilledLargeButton } from "../components/Button";
import { ColorSelector, PlantSelector } from "../components/Selector";
import IonIcons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

const EditGoal = () => {
    const goal = null;
    const navigation = useNavigation();
    const [name, setName] = useState(goal.name);
    const [steps, setSteps] = useState(goal.steps);
    const [plant, setPlant] = useState(goal.plant);
    const [color, setColor] = useState(goal.color);

    const handleSaveGoal = () => {
        const editedGoal = {
            id: goal.id,
            name, 
            steps,
            plant,
            color,
            percentage: goal.percentage,
            complete: goal.complete,
        };
        navigation.navigate('Goal Details');
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

    const renderItem = ({ item, index }) => (
        <View style={styles.stepContainer}>
            <TextInput 
                style={styles.stepInput}
                value={item.name}
                maxLength={60}
                onChangeText={(text) => handleStepChange(index, text)}
            />
            <Pressable onPress={() => handleDeleteStep(index)}>
                <IonIcons name="remove-circle-outline" size={32} color={COLORS.white100} />
            </Pressable>
        </View>
    );

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: color}]}>
            <StatusBar barStyle={'dark-content'} />
            <ScrollView contentContainerStyle={{alignItems: 'center', paddingBottom: 70, paddingTop: 20}}>
                <View style={styles.border}>
                <Text style={color === COLORS.blue200 ? [styles.label, {color: COLORS.white100}] : styles.label}>NAME</Text>
                    <TextInput 
                        style={styles.input}
                        value={name} 
                        onChangeText={name => setName(name)}
                        maxLength={80}
                    />
                </View>
                <View style={styles.border}>
                    <Text style={color === COLORS.blue200 ? [styles.label, {color: COLORS.white100}] : styles.label}>STEPS</Text>
                    <View style={styles.stepsContainer}>
                        <FlatList 
                            data={goal.steps}
                            renderItem={renderItem}
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
                        onPress={handleSaveGoal}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.green200,
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
        width: 300,
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

export default EditGoal;