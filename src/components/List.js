import { COLORS, SIZE, SHADOWS, FONTS } from "../data/theme";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export const GoalsList = (props) => {
    return (
        <View style={[styles.container, {backgroundColor: props.background}]} >
            <View style={styles.contentContainer}>
                <View style={styles.progressContainer}>
                    <Text style={styles.percentage}>
                        {props.percentage}%
                    </Text>
                </View>
                <Pressable onPress={props.onPress} style={styles.pressContainer}>
                    <View style={{flex: 1}}>
                        <Text style={[styles.text, {marginLeft: 10}]} numberOfLines={1} >
                            {props.name}
                        </Text>
                    </View>
                    <View style={styles.iconContainer}> 
                        <Ionicons name="arrow-forward-outline" size={32} color={COLORS.white100} />
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

export const HabitsList = (props) => {
    return (
        <View style={[styles.container, {backgroundColor: props.background}]}>
            <View style={styles.contentContainer}>
                <Pressable onPress={props.checkOnPress}>
                    {props.complete 
                        ? <Ionicons name="checkmark-circle" size={48} color={COLORS.white100} /> 
                        : <Ionicons name="checkmark-circle-outline" size={48} color={COLORS.white100} />}
                </Pressable>
                <Pressable onPress={props.arrowOnPress} style={styles.pressContainer}>
                    <View style={{flex: 1}}>
                        <Text style={styles.text} numberOfLines={1}>
                            {props.name}
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Ionicons name="arrow-forward-outline" size={32} color={COLORS.white100} />
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 25,
        marginVertical: 8,
        marginHorizontal: 20,
        borderRadius: 20,
        ...SHADOWS.shadow01,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    pressContainer: {
        width: '80%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: COLORS.white100,
        fontSize: SIZE.subheading,
        fontFamily: FONTS.regular,
    },
    progressContainer: {
        justifyContent: 'center',
        alignItems: 'center',
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
    iconContainer: {
        marginLeft: 'auto'
    }
});