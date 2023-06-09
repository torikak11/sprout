import { useState } from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet, StatusBar } from "react-native";
import { COLORS, SIZE, FONTS, SHADOWS } from "../data/theme";
import { FilledLargeButton, ColorBox, PlantBox } from "../components/Button";
import { HabitPlantSelector, ColorSelector } from "../components/Selector";
import { useNavigation } from "@react-navigation/native";

const EditGoal = () => {
    const habit = null;
    const navigation = useNavigation();
    const [name, setName] = useState(habit.name);
    const [plant, setPlant] = useState(habit.plant);
    const [color, setColor] = useState(habit.color);

    const handleSaveHabit = () => {
        const editedHabit = {
            id: habit.id,
            name, 
            plant,
            color,
            streak: habit.streak,
            complete: habit.complete,
        };
        navigation.navigate('Habit Details');
    }

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: color}]}>
            <StatusBar barStyle={'dark-content'} />
            <View style={{paddingTop: 20, alignItems: 'center'}}>
                <View style={styles.border}>
                    <Text style={color === COLORS.blue200 ? [styles.label, {color: COLORS.white100}] : styles.label}>NAME</Text>
                    <TextInput 
                        style={[styles.input, {width: 300}]}
                        value={name} 
                        maxLength={60}
                        onChangeText={name => setName(name)}
                    />
                </View>
                <View style={styles.border}>
                    <Text style={color === COLORS.blue200 ? [styles.label, {color: COLORS.white100}] : styles.label}>COLOR</Text>
                    <ColorSelector currentColor={color} setColor={setColor} />
                </View>
                <View style={styles.border}>
                    <Text style={color === COLORS.blue200 ? [styles.label, {color: COLORS.white100}] : styles.label}>PLANT</Text>
                    <HabitPlantSelector currentPlantName={plant.name} setPlant={setPlant} />
                </View>
                <View style={{marginTop: 20}}>
                <FilledLargeButton 
                        name="Save"
                        dark={color === COLORS.blue200 ? true : false}
                        onPress={handleSaveHabit}
                    />
                </View>
            </View>
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
});

export default EditGoal;