import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList } from "react-native";
import { GoalsList } from "../components/List";
import { COLORS, FONTS, SIZE } from "../data/theme";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { goalsSlice } from '../store/goalsSlice';

const GoalsView = () => {
    const navigation = useNavigation();
    const goals = useSelector(state => state.goals.goals);
    const dispatch = useDispatch();

    const renderItem = ({ item }) => (
        <GoalsList
            name={item.name}
            background={item.color}
            percentage={item.percentage}
            onPress={() => {
                dispatch(goalsSlice.actions.setSelectedGoal(item.id));
                navigation.navigate('Goal Details');
            }}
        />
    )

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.text}>Your Goals</Text>
            </View>
            <View style={styles.listContainer}>
                {goals.length > 0 
                    ? <FlatList
                        data={goals}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{marginTop: 20}}
                        />
                    : <View><Text>No Goals</Text></View>
                }
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
    listContainer: {
        flex: 8,
    },
    text: {
        color: COLORS.blue200,
        fontSize: SIZE.heading,
        fontFamily: FONTS.regular,
        marginLeft: 25,
    },
});

export default GoalsView;