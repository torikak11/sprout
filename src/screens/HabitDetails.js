import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import IonIcons from '@expo/vector-icons/Ionicons';
import { COLORS, FONTS, SIZE } from '../data/theme';
import { Task } from '../components/Task';
import { FilledLargeButton } from '../components/Button';

const HabitDetails = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.plantContainer}>
                <Image source={require('../../assets/images/large-plant.png')} />
            </View>
            <View style={styles.detailsContainer}>
                <ScrollView>
                    <View style={{alignItems: 'center'}}>
                        <View style={styles.border}>
                            <Text style={styles.nameText}>Exercise/Stretch</Text>
                        </View>
                        <View style={styles.border}>
                            <Text style={styles.label}>PROGRESS</Text>
                            <View style={styles.progressContainer}>
                                <Text style={styles.percentage}>
                                    3
                                </Text>
                            </View>
                            <Text style={styles.text}>day streak</Text>
                        </View>
                        <View style={{marginTop: 10,}}>
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
        backgroundColor: COLORS.green100,
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
    text: {
        marginTop: 7,
        color: COLORS.white100,
    }
});

export default HabitDetails;