import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, TextInput, StyleSheet, Pressable, Image, FlatList } from "react-native";
import { COLORS, SIZE, FONTS, SHADOWS } from "../data/theme";
import { Task } from "../components/Task";
import { FilledLargeButton } from "../components/Button";
import IonIcons from '@expo/vector-icons/Ionicons';
import { SelectList } from 'react-native-dropdown-select-list';
import plants from "../data/plants";
import { useSelector } from "react-redux";
import { ColorBox } from "../components/Button";

const EditGoal = () => {
    const goal = useSelector((state) => state.goals.selectedGoal);
    const [name, setName] = useState(goal.name);
    const [plant, setPlant] = useState(goal.plant);
    const [color, setColor] = useState(goal.color)

    const renderItem = ({ item }) => (
        <Task 
            text={item.name}
            complete={item.complete}
        />
    )

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: color}]}>
            <ScrollView contentContainerStyle={{alignItems: 'center', paddingBottom: 70, paddingTop: 20}}>
                <View style={styles.border}>
                    {color === COLORS.blue200 
                        ? <Text style={[styles.label, {color: COLORS.white100}]}>NAME</Text> 
                        : <Text style={styles.label}>NAME</Text>}
                    <TextInput 
                        style={[styles.input, {width: 300}]}
                        value={name} 
                        onChangeText={name => setName(name)}
                    />
                </View>
                <View style={styles.border}>
                    {color === COLORS.blue200 
                        ? <Text style={[styles.label, {color: COLORS.white100}]}>STEPS</Text> 
                        : <Text style={styles.label}>STEPS</Text>}
                    <View style={styles.stepContainer}>
                        <FlatList 
                            data={goal.steps}
                            renderItem={renderItem}
                            scrollEnabled={false}
                        />
                    </View>
                    <Pressable style={styles.stepButtonContainer}>
                        <IonIcons name="add" size={32} color={COLORS.white100} />
                        <Text style={styles.text}>Add new step</Text>
                    </Pressable>
                </View>
                <View style={styles.border}>
                    {color === COLORS.blue200 
                        ? <Text style={[styles.label, {color: COLORS.white100}]}>DATE DUE</Text> 
                        : <Text style={styles.label}>DATE DUE</Text>}
                    <View style={styles.dateContainer}>
                        <Text style={styles.text}>date</Text>
                        <Pressable>
                            <IonIcons name="calendar" size={32} color={COLORS.white100} />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.border}>
                    {color === COLORS.blue200 
                        ? <Text style={[styles.label, {color: COLORS.white100}]}>COLOR</Text> 
                        : <Text style={styles.label}>COLOR</Text>}
                    <View style={styles.colorContainer}>
                    {color === COLORS.blue100 
                            ? <ColorBox selected={true} color={COLORS.blue100} /> 
                            : <ColorBox selected={false} color={COLORS.blue100} onPress={() => setColor(COLORS.blue100)} />}
                        {color === COLORS.blue200 
                            ? <ColorBox selected={true} color={COLORS.blue200} /> 
                            : <ColorBox selected={false} color={COLORS.blue200} onPress={() => setColor(COLORS.blue200)} />}
                        {color === COLORS.green100 
                            ? <ColorBox selected={true} color={COLORS.green100} /> 
                            : <ColorBox selected={false} color={COLORS.green100} onPress={() => setColor(COLORS.green100)} />}
                        {color === COLORS.green200 
                            ? <ColorBox selected={true} color={COLORS.green200} /> 
                            : <ColorBox selected={false} color={COLORS.green200} onPress={() => setColor(COLORS.green200)} />}
                        {color === COLORS.coral200 
                            ? <ColorBox selected={true} color={COLORS.coral200} /> 
                            : <ColorBox selected={false} color={COLORS.coral200} onPress={() => setColor(COLORS.coral200)} />}
                    </View>
                </View>
                <View style={styles.border}>
                    {color === COLORS.blue200 
                        ? <Text style={[styles.label, {color: COLORS.white100}]}>PLANT</Text> 
                        : <Text style={styles.label}>PLANT</Text>}
                    <View style={styles.plantContainer}>
                        <View style={styles.imageBackground}>
                            <Image 
                                source={plant.image} 
                                style={styles.image}
                            />
                        </View>
                        <SelectList 
                            data={plants}
                            placeholder={plant.name}
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
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.green200,
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
    },
    stepContainer: {
        width: '100%',
        justifyContent: 'flex-start'
    }
});

export default EditGoal;