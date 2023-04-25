import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Image, Text, FlatList } from 'react-native';
import { COLORS, FONTS, SIZE } from '../data/theme';
import { Task } from '../components/Task';
import { FilledLargeButton } from '../components/Button';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const GoalDetails = () => {
    const goal = useSelector((state) => state.goals.selectedGoal);
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <Task 
            text={item.name}
            complete={item.complete}
        />
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.plantContainer}>
                <Image source={goal.plant.image} style={styles.image} />
            </View>
            <View style={[styles.detailsContainer, {backgroundColor: goal.color}]}>
                <ScrollView contentContainerStyle={{paddingBottom: 70, paddingTop: 20}}>
                    <View style={{alignItems: 'center'}}>
                        <View style={styles.border}>
                            <Text style={styles.nameText}>{goal.name}</Text>
                        </View>
                        <View style={styles.border}>
                            {goal.color === COLORS.blue200 
                                ? <Text style={[styles.label, {color: COLORS.white200}]}>PROGRESS</Text> 
                                : <Text style={styles.label}>PROGRESS</Text>}
                            <View style={styles.progressContainer}>
                                <Text style={styles.percentage}>
                                    {goal.percentage}%
                                </Text>
                            </View>
                        </View>
                        <View style={styles.border}>
                            {goal.color === COLORS.blue200 
                                ? <Text style={[styles.label, {color: COLORS.white200}]}>STEPS</Text> 
                                : <Text style={styles.label}>STEPS</Text>}
                            <View style={styles.stepContainer}>
                                <FlatList 
                                    data={goal.steps}
                                    renderItem={renderItem}
                                    scrollEnabled={false}
                                />
                            </View>
                        </View>
                        <View style={{marginVertical: 10}}>
                            {goal.color === COLORS.blue200 
                                ? <FilledLargeButton 
                                    name="Delete Goal" 
                                    dark={true}
                                    onPress={() => {
                                        navigation.navigate("Stack Goals")
                                    }} 
                                    /> 
                                : <FilledLargeButton 
                                    name="Delete Goal" 
                                    dark={false}
                                    onPress={() => {
                                        navigation.navigate("Stack Goals")
                                    }}  
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
        paddingLeft: 30,
    },
    image: {
        resizeMode: 'contain',
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
        paddingBottom: 15,
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
    stepContainer: {
        width: '100%',
        justifyContent: 'flex-start'
    }
});

export default GoalDetails;