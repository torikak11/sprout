import { COLORS, SIZE, SHADOWS } from "../data/theme";
import { StyleSheet, Pressable, Text, Image, View } from "react-native";

export const FilledSmallButton = (props) => {
    return (
        <Pressable 
            style={styles.filledSmallButton}
            onPress={props.onPress}
        >
            <Text style={styles.filledSmallButtonText}>
                {props.name}
            </Text>
        </Pressable>
    );
};

export const OutlineSmallButton = (props) => {
    return (
        <Pressable 
            style={styles.outlineSmallButton}
            onPress={props.onPress}
        >
            <Text style={styles.outlineSmallButtonText}>
                {props.name}
            </Text>
        </Pressable>
    )
};

export const FilledLargeButton = (props) => {
    return (
        <Pressable 
            style={props.dark 
                ? [styles.filledLargeButton, {backgroundColor: COLORS.white100}] 
                : [styles.filledLargeButton, {backgroundColor: COLORS.blue200}]}
            onPress={props.onPress}
        >
            <Text 
                style={props.dark 
                    ? [styles.filledLargeButtonText, {color: COLORS.blue200}] 
                    : [styles.filledLargeButtonText, {color: COLORS.white100}]}
            >
                {props.name}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    filledSmallButton: {
        width: 90,
        height: 35,
        backgroundColor: COLORS.blue200,
        borderRadius: 20,
        ...SHADOWS.shadow01,
        alignItems: 'center',
        justifyContent: 'center',
    },
    filledSmallButtonText: {
        color: COLORS.white100,
    },
    outlineSmallButton: {
        width: 90,
        height: 35,
        borderWidth: 2,
        borderColor: COLORS.blue200,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    outlineSmallButtonText: {
        color: COLORS.blue200,
    },
    filledLargeButton: {
        width: 300,
        height: 50,
        borderRadius: 30,
        ...SHADOWS.shadow01,
        alignItems: 'center',
        justifyContent: 'center',
    },
    filledLargeButtonText: {
        fontSize: SIZE.body,
    },
});