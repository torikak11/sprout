import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList } from "react-native";
import { GoalsList } from "../components/List";
import goals from "../data/goals";
import { COLORS, FONTS, SHADOWS, SIZE } from "../data/theme";

const GoalsView = () => {
    const renderItem = ({ item }) => (
        <GoalsList
            name={item.name}
            background={item.color}
            percentage={item.percentage}
        />
    )

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.text}>Goals List</Text>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={goals}
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
    listContainer: {
        flex: 7,
    },
    text: {
        color: COLORS.blue200,
        fontSize: SIZE.heading,
        fontFamily: FONTS.regular,
        textAlign: 'center',
    },
});

export default GoalsView;