import React from 'react';
import { View } from 'react-native';
import IonIcons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../data/theme';

export const StackHeader = () => {
    return (
        <View style={styles.buttonContainer}>
            <IonIcons name="arrow-back-outline" size={32} color={COLORS.blue200} />
            <IonIcons name="brush-outline" size={32} color={COLORS.blue200} />
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
    },
});