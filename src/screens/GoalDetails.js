import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import IonIcons from '@expo/vector-icons/Ionicons';
import { COLORS, FONTS, SIZE } from '../data/theme';
import { Task } from '../components/Task';
import { FilledLargeButton } from '../components/Button';

const GoalDetails = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.plantContainer}>
                <Image source={require('../../assets/images/large-plant.png')} />
            </View>
            <View style={styles.detailsContainer}>
                <ScrollView contentContainerStyle={{paddingBottom: 70, paddingTop: 20}}>
                    <View style={{alignItems: 'center'}}>
                        <View style={styles.border}>
                            <Text style={styles.nameText}>Create a mobile app</Text>
                        </View>
                        <View style={styles.border}>
                            <Text style={styles.label}>PROGRESS</Text>
                            <View style={styles.progressContainer}>
                                <Text style={styles.percentage}>
                                    100%
                                </Text>
                            </View>
                        </View>
                        <View style={styles.border}>
                            <Text style={styles.label}>STEPS</Text>
                            <Task 
                                text="Design wireframe in Figma"
                                complete={true}
                            />
                            <Task 
                                text="Design static layout in Figma"
                                complete={true}
                            />
                            <Task 
                                text="Create project in React Native"
                                complete={true}
                            />
                        </View>
                        <View style={{marginVertical: 10}}>
                            <FilledLargeButton 
                                name="Delete Goal"
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
    },
    detailsContainer: {
        flex: 6,
        backgroundColor: COLORS.green200,
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
});

export default GoalDetails;