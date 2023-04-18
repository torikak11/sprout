import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, TextInput, StyleSheet, Pressable, Image } from "react-native";
import { COLORS, SIZE, FONTS, SHADOWS } from "../data/theme";
import { FilledLargeButton } from "../components/Button";
import { SelectList } from 'react-native-dropdown-select-list';
import plants from "../data/plants";

const EditGoal = () => {
    const [name, setName] = useState('Exercise/Stretch');
    const [plant, setPlant] = useState('Tomato');
    const [color, setColor] = useState('Light Green')

    const colors = [
        {key: '1', value: 'Light Green'},
        {key: '2', value: 'Dark Green'},
        {key: '3', value: 'Blue'},
        {key: '4', value: 'Black'},
        {key: '5', value: 'Coral'},
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={{paddingTop: 20, alignItems: 'center'}}>
                <View style={styles.border}>
                    <Text style={styles.label}>NAME</Text>
                    <TextInput 
                        style={[styles.input, {width: 300}]}
                        value={name} 
                        onChangeText={name => setName(name)}
                    />
                </View>
                <View style={styles.border}>
                    <Text style={styles.label}>COLOR</Text>
                    <View style={styles.colorContainer}>
                        <Pressable style={[styles.colorBox, {backgroundColor: COLORS.blue100}]}></Pressable>
                        <Pressable style={[styles.colorBox, {backgroundColor: COLORS.blue200}]}></Pressable>
                        <Pressable style={[styles.colorBox, {backgroundColor: COLORS.green100, borderWidth: 2, borderColor: COLORS.white100}]}></Pressable>
                        <Pressable style={[styles.colorBox, {backgroundColor: COLORS.green200}]}></Pressable>
                        <Pressable style={[styles.colorBox, {backgroundColor: COLORS.coral200}]}></Pressable>
                    </View>
                </View>
                <View style={styles.border}>
                    <Text style={styles.label}>PLANT</Text>
                    <View style={styles.plantContainer}>
                        <View style={styles.imageBackground}>
                            <Image 
                                source={require('../../assets/images/small-plant.png')} 
                                style={styles.image}
                            />
                        </View>
                        <SelectList 
                            data={plants}
                            placeholder={plant}
                            setSelected={(item) => setPlant(item)}
                            boxStyles={{backgroundColor: COLORS.white100, width: 200}}
                            fontFamily={FONTS.regular}
                            maxHeight={100}
                            dropdownStyles={{
                                backgroundColor: COLORS.white100,
                                width: "100%",
                            }}
                        />
                    </View>
                </View>
                <View style={{marginTop: 20}}>
                    <FilledLargeButton name="Save" />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.green100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    border: {
        width: '80%',
        borderBottomColor: COLORS.white200,
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingBottom: 20,
    },
    label: {
        fontSize: SIZE.subheading,
        fontFamily: FONTS.regular,
        marginVertical: 10,
    },
    input: {
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 5,
        backgroundColor: COLORS.white100,
        fontFamily: FONTS.regular,
        color: '#333',
        ...SHADOWS.shadow01
    },
    stepButtonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        marginLeft: 5,
        color: COLORS.white100,
        fontSize: SIZE.body,
    },
    dateContainer: {
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageBackground: {
        backgroundColor: COLORS.white100,
        padding: 5,
        borderRadius: 5,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    plantContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    colorContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 10,
    },
    colorBox: {
        width: '16%',
        aspectRatio: 1 / 1,
        backgroundColor: 'blue',
        borderRadius: 5,
        marginHorizontal: 0,
    }
});

export default EditGoal;