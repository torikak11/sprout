import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
import habits from '../data/habits';
import { HabitsList } from '../components/List';
import { COLORS, FONTS, SIZE } from '../data/theme';

const HabitsView = () => {
    const renderItem = ({ item }) => (
        <HabitsList
            name={item.name}
            background={item.color}
            completed={item.completed}
            onPress={() => console.warn("Pressed")}
        />
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.text}>Habits List</Text>
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
        textAlign: 'center',
    },
    listContainer: {
        flex: 7,
    },
});

export default HabitsView;