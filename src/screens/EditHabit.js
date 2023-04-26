import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet, StatusBar, Image } from "react-native";
import { COLORS, SIZE, FONTS, SHADOWS } from "../data/theme";
import { FilledLargeButton, ColorBox } from "../components/Button";
import { SelectList } from 'react-native-dropdown-select-list';
import plants from "../data/plants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { habitsSlice } from "../store/habitsSlice";

const EditGoal = () => {
    const habit = useSelector((state) => state.habits.selectedHabit);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [name, setName] = useState(habit.name);
    const [plant, setPlant] = useState(habit.plant.name);
    const [color, setColor] = useState(habit.color);

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: color}]}>
            <StatusBar barStyle={'dark-content'} />
            <View style={{paddingTop: 20, alignItems: 'center'}}>
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
                    <View style={styles.plantContainer}>
                        <View style={styles.imageBackground}>
                            <Image 
                                source={habit.plant.image} 
                                style={styles.image}
                            />
                        </View>
                        <SelectList 
                            data={plants}
                            placeholder={plant}
                            setSelected={(item) => setPlant(item)}
                            boxStyles={{backgroundColor: COLORS.white100, width: 200}}
                            fontFamily={FONTS.regular}
                            maxHeight={100}
                            dropdownStyles={{
                                backgroundColor: COLORS.white100,
                                width: "100%",
                            }}
                        />
                    </View>
                </View>
                <View style={{marginTop: 20}}>
                    {color === COLORS.blue200 
                        ? <FilledLargeButton 
                            name="Save" 
                            dark={true} 
                            onPress={() => {
                                dispatch(habitsSlice.actions.setSelectedHabit(habit.id));
                                navigation.navigate('Habit Details');
                            }} 
                            /> 
                        : <FilledLargeButton 
                            name="Save" 
                            dark={false} 
                            onPress={() => {
                                dispatch(habitsSlice.actions.setSelectedHabit(habit.id));
                                navigation.navigate('Habit Details');
                            }} 
                            />
                    }
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