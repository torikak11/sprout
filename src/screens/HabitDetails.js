import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import { COLORS, FONTS, SIZE } from '../data/theme';
import { FilledLargeButton } from '../components/Button';
import Ionicons from '@expo/vector-icons/Ionicons';
import {  useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { habitsSlice } from '../store/habitsSlice';

const HabitDetails = () => {
    const habit = useSelector((state) => state.habits.selectedHabit);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleDeleteHabiit = () => {
        dispatch(habitsSlice.actions.deleteHabit(habit.id));
        navigation.navigate("Stack Habits");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.plantContainer}>
                <Image source={habit.plant.image} />
            </View>
            <View style={[styles.detailsContainer, {backgroundColor: habit.color}]}>
                <ScrollView>
                    <View style={{alignItems: 'center'}}>
                        <View style={styles.border}>
                            <Text style={styles.nameText}>{habit.name}</Text>
                        </View>
                        <View style={styles.border}>
                            {habit.color === COLORS.blue200 
                                ? <Text style={[styles.label, {color: COLORS.white200}]}>PROGRESS</Text> 
                                : <Text style={styles.label}>PROGRESS</Text>}
                            <View style={styles.progressContainer}>
                                <Text style={styles.percentage}>
                                    {habit.streak}
                                </Text>
                            </View>
                            <Text style={styles.text}>day streak</Text>
                        </View>
                        <View style={styles.border}>
                            {habit.color === COLORS.blue200 
                                ? <Text style={[styles.label, {color: COLORS.white200}]}>MARK AS COMPLETE</Text> 
                                : <Text style={styles.label}>MARK AS COMPLETE</Text>}
                            {habit.completed 
                                ? <Ionicons name="checkmark-circle" size={52} color={COLORS.white100} /> 
                                : <Ionicons name="checkmark-circle-outline" size={52} color={COLORS.white100} />}
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