import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import { COLORS, FONTS, SIZE } from '../data/theme';
import { FilledLargeButton } from '../components/Button';
import IonIcons from '@expo/vector-icons/Ionicons';
import {  useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { useState } from 'react';

const HabitDetails = () => {
    const habit = null;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [complete, setComplete] = useState(habit.complete);
    const [streak, setStreak] = useState(habit.streak)

    const handleDeleteHabiit = () => {
        //dispatch(habitsSlice.actions.deleteHabit(habit.id));
        navigation.navigate("Stack Habits");
    }

    const handleCompleteStreak = () => {
        const updatedStreak = complete ? streak - 1 : streak + 1;
        const updatedComplete = !complete;

        const updatedHabit = {
            id: habit.id,
            name: habit.name,
            color: habit.color,
            plant: habit.plant,
            streak: updatedStreak,
            complete: updatedComplete,
        };
        setStreak(updatedStreak);
        setComplete(updatedComplete);
        dispatch(habitsSlice.actions.editHabit(updatedHabit));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.plantContainer}>
                <Image source={habit.plant.images.small} style={styles.image} />
            </View>
            <View style={[styles.detailsContainer, {backgroundColor: habit.color}]}>
                <ScrollView>
                    <View style={{alignItems: 'center'}}>
                        <View style={styles.border}>
                            <Text style={styles.nameText}>{habit.name}</Text>
                        </View>
                        <View style={styles.border}>
                            <Text style={habit.color === COLORS.blue200 ? [styles.label, {color: COLORS.white100}] : styles.label}>PROGRESS</Text>
                            <View style={styles.progressContainer}>
                                <Text style={styles.percentage}>
                                    {streak}
                                </Text>
                            </View>
                            <Text style={styles.text}>day streak</Text>
                        </View>
                        <View style={styles.border}>
                            <Text style={habit.color === COLORS.blue200 ? [styles.label, {color: COLORS.white100}] : styles.label}>MARK AS COMPLETE</Text>
                            <Pressable onPress={handleCompleteStreak}>
                                <IonIcons name={complete ? "checkmark-circle" : "ellipse-outline"} size={52} color={COLORS.white100} />
                            </Pressable>
                        </View>
                        <View style={{marginTop: 10,}}>
                        {habit.color === COLORS.blue200 
                            ? <FilledLargeButton 
                                name="Delete Habit" 
                                dark={true} 
                                onPress={handleDeleteHabiit}
                                /> 
                            : <FilledLargeButton 
                                name="Delete Habit" 
                                dark={false} 
                                onPress={handleDeleteHabiit}
                                />
                        }
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
        alignItems: 'center',
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
        width: '80%',
        borderBottomColor: COLORS.white200,
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingBottom: 10,
        marginBottom: 10,
    },
    label: {
        fontSize: SIZE.subheading,
        fontFamily: FONTS.regular,
        marginBottom: 5,
    },
    progressContainer: {
        justifyContent: 'center',
        alignItems: 'center',
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
    text: {
        marginTop: 7,
        color: COLORS.white100,
    }
});

export default HabitDetails;