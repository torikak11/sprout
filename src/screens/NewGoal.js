import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, TextInput, StyleSheet, Pressable, Image } from "react-native";
import { COLORS, SIZE, FONTS, SHADOWS } from "../data/theme";
import { FilledLargeButton, ColorBox, PlantBox } from "../components/Button";
import IonIcons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { goalsSlice } from "../store/goalsSlice";
import { useDispatch } from "react-redux";

const EditGoal = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [steps, setSteps] = useState([]);
    const [plant, setPlant] = useState("Zinnia");
    const [color, setColor] = useState(COLORS.green200);

    const handleAddGoal = () => {
        const newGoal = {
            id: Date.now().toString(),
            name, 
            steps,
            plant,
            color,
        };
        dispatch(goalsSlice.actions.addGoal({newGoal}));
        setName('');
        setSteps([]);
        setPlant("Zinnia");
        setColor(COLORS.green200);
        navigation.navigate('Add New')
    }

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: color}]}>
            <ScrollView contentContainerStyle={{alignItems: 'center', paddingBottom: 70, paddingTop: 20}}>
                <View style={styles.border}>
                    {color === COLORS.blue200 
                        ? <Text style={[styles.label, {color: COLORS.white100}]}>NAME</Text> 
                        : <Text style={styles.label}>NAME</Text>}
                    <TextInput 
                        style={[styles.input, {width: 300}]}
                        value={name} 
                        onChangeText={name => setName(name)}
                    />
                </View>
                <View style={styles.border}>
                    {color === COLORS.blue200 
                        ? <Text style={[styles.label, {color: COLORS.white100}]}>STEPS</Text> 
                        : <Text style={styles.label}>STEPS</Text>}
                    <Pressable style={styles.stepButtonContainer}>
                        <IonIcons name="add" size={32} color={COLORS.white100} />
                        <Text style={styles.text}>Add new step</Text>
                    </Pressable>
                </View>
                <View style={styles.border}>
                    {color === COLORS.blue200 
                        ? <Text style={[styles.label, {color: COLORS.white100}]}>COLOR</Text> 
                        : <Text style={styles.label}>COLOR</Text>}
                    <View style={styles.colorContainer}>
                        {color === COLORS.blue100 
                            ? <ColorBox selected={true} color={COLORS.blue100} /> 
                            : <ColorBox selected={false} color={COLORS.blue100} onPress={() => setColor(COLORS.blue100)} />}
                        {color === COLORS.blue200 
                            ? <ColorBox selected={true} color={COLORS.blue200} /> 
                            : <ColorBox selected={false} color={COLORS.blue200} onPress={() => setColor(COLORS.blue200)} />}
                        {color === COLORS.green100 
                            ? <ColorBox selected={true} color={COLORS.green100} /> 
                            : <ColorBox selected={false} color={COLORS.green100} onPress={() => setColor(COLORS.green100)} />}
                        {color === COLORS.green200 
                            ? <ColorBox selected={true} color={COLORS.green200} /> 
                            : <ColorBox selected={false} color={COLORS.green200} onPress={() => setColor(COLORS.green200)} />}
                        {color === COLORS.coral100 
                            ? <ColorBox selected={true} color={COLORS.coral100} /> 
                            : <ColorBox selected={false} color={COLORS.coral100} onPress={() => setColor(COLORS.coral100)} />}
                    </View>
                </View>
                <View style={styles.border}>
                    {color === COLORS.blue200 
                        ? <Text style={[styles.label, {color: COLORS.white100}]}>PLANT</Text> 
                        : <Text style={styles.label}>PLANT</Text>}
                    <View style={styles.colorContainer}>
                        {plant === "Zinnia"
                            ? <PlantBox selected={true} image={require("../../assets/images/small-plant.png")} /> 
                            : <PlantBox selected={false} image={require("../../assets/images/small-plant.png")} onPress={() => setPlant("Zinnia")} />}
                        {plant === "Tomato"
                            ? <PlantBox selected={true} image={require("../../assets/images/s-tomato.png")} /> 
                            : <PlantBox selected={false} image={require("../../assets/images/s-tomato.png")} onPress={() => setPlant("Tomato")} />}
                        {plant === "Sunflower"
                            ? <PlantBox selected={true} image={require("../../assets/images/s-tomato.png")} /> 
                            : <PlantBox selected={false} image={require("../../assets/images/s-tomato.png")} onPress={() => setPlant("Sunflower")} />}
                        {plant === "Tulip"
                            ? <PlantBox selected={true} image={require("../../assets/images/s-tomato.png")} /> 
                            : <PlantBox selected={false} image={require("../../assets/images/s-tomato.png")} onPress={() => setPlant("Tulip")} />}
                        {plant === "Lily"
                            ? <PlantBox selected={true} image={require("../../assets/images/s-tomato.png")} /> 
                            : <PlantBox selected={false} image={require("../../assets/images/s-tomato.png")} onPress={() => setPlant("Lily")} />}
                    </View>
                </View>
                <View style={{marginTop: 20}}>
                    {color === COLORS.blue200 
                        ? <FilledLargeButton 
                            name="Save" 
                            dark={true}
                            onPress={handleAddGoal} 
                            /> 
                        : <FilledLargeButton 
                            name="Save" 
                            dark={false} 
                            onPress={handleAddGoal} 
                            />
                    }
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
    dateContainer: {
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    plantContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    colorContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 10,
    },
    colorBox: {
        width: '16%',
        aspectRatio: 1 / 1,
        backgroundColor: 'blue',
        borderRadius: 5,
        marginHorizontal: 0,
    }
});

export default EditGoal;