import { useState } from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS, SIZE, FONTS, SHADOWS } from "../data/theme";
import { FilledLargeButton } from "../components/Button";
import { ColorSelector, HabitPlantSelector } from "../components/Selector";
import { useNavigation } from "@react-navigation/native";
import habitPlants from "../data/goalPlants";

const NewHabit = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [plant, setPlant] = useState(habitPlants[0]);
    const [color, setColor] = useState(COLORS.green200)

    const handleAddHabit = () => {
        const newHabit = {
            id: Date.now().toString(),
            name, 
            plant,
            color,
        };
        //dispatch(habitsSlice.actions.addHabit({newHabit}));
        setName('');
        setPlant(habitPlants[0]);
        setColor(COLORS.green200);
        navigation.navigate('Add New')
    }

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: color}]}>
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
                        onPress={handleAddHabit}
                    />
                </View>
            </View>
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

export default NewHabit;