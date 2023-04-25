import {React, useState} from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
import { HabitsList } from '../components/List';
import { COLORS, FONTS, SIZE } from '../data/theme';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { habitsSlice } from '../store/habitsSlice';

const HabitsView = () => {
    const habits = useSelector(state => state.habits.habits);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <HabitsList
            name={item.name}
            background={item.color}
            complete={item.completed}
            arrowOnPress={() => {
                dispatch(habitsSlice.actions.setSelectedHabit(item.id));
                navigation.navigate('Habit Details');
            }}
            checkOnPress={() => console.warn("pressed")}
        />
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.text}>Your Habits</Text>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={habits}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{marginTop: 20}}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white200
    },
    headingContainer: {
        flex: 1,
        borderBottomWidth: 2,
        borderColor: COLORS.green100,
        justifyContent: 'center',
    },
    text: {
        color: COLORS.blue200,
        fontSize: SIZE.heading,
        fontFamily: FONTS.regular,
        marginLeft: 25,
    },
    listContainer: {
        flex: 8,
    },
});

export default HabitsView;