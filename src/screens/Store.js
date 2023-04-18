import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZE } from '../data/theme';

const Store = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Coming soon...</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white200,
        justifyContent: 'center',
    },
    text: {
        fontFamily: FONTS.regular,
        fontSize: SIZE.heading02,
        textAlign: 'center',
    },
});

export default Store;