import {useState} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Image, Text, FlatList } from 'react-native';
import { COLORS, FONTS, SIZE } from '../data/theme';
import { Task } from '../components/Task';
import { FilledLargeButton } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const GoalDetails = () => {
    const goal = null
    const navigation = useNavigation();
    const [steps, setSteps] = useState(goal.steps);
    const [percentage, setPercentage] = useState(goal.percentage);

    const renderItem = ({ item }) => (
        <Task 
            text={item.name}
            complete={item.complete}
            onPress={() => handleCompleteStep(item)}
        />
    );

    const handleCompleteStep = (item) => {
        const updatedSteps = steps.map(step => {
            if (step.id === item.id) {
                return {
                    ...step,
                    complete: !step.complete
                }
            }
            return step;
        });

        const stepsCompleted = updatedSteps.filter((step) => step.complete).length;
        const updatedPercentage = Math.floor((stepsCompleted / updatedSteps.length) * 100);

        const editedGoal = {
            id: goal.id,
            name: goal.name,
            steps: updatedSteps,
            plant: goal.plant,
            color: goal.color,
            percentage: updatedPercentage,
            complete: updatedPercentage === 100 ? true : false,
        }
        setSteps(updatedSteps);
        setPercentage(updatedPercentage);
    };

    const handleDeleteGoal = () => {
        dispatch(goalsSlice.actions.deleteGoal(goal.id));
        navigation.navigate('Stack Goals');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.plantContainer}>
                <Image source={goal.plant.images.small} style={styles.image} />
            </View>
            <View style={[styles.detailsContainer, {backgroundColor: goal.color}]}>
                <ScrollView contentContainerStyle={{paddingBottom: 70, paddingTop: 20}}>
                    <View style={{alignItems: 'center'}}>
                        <View style={styles.border}>
                            <Text style={styles.nameText}>{goal.name}</Text>
                        </View>
                        <View style={styles.border}>
                            <Text style={goal.color === COLORS.blue200 ? [styles.label, {color: COLORS.white200}] : styles.label}>PROGRESS</Text>
                            <View style={styles.progressContainer}>
                                <Text style={styles.percentage}>
                                    {percentage}%
                                </Text>
                            </View>
                        </View>
                        <View style={styles.border}>
                            <Text style={goal.color === COLORS.blue200 ? [styles.label, {color: COLORS.white200}] : styles.label}>STEPS</Text>
                            <View style={styles.stepContainer}>
                                <FlatList 
                                    data={steps}
                                    renderItem={renderItem}
                                    scrollEnabled={false}
                                />
                            </View>
                        </View>
                        <View style={{marginVertical: 10}}>
                            <FilledLargeButton 
                                name="Delete Goal"
                                dark={goal.color === COLORS.blue200 ? true : false}
                                onPress={handleDeleteGoal}
                            />
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