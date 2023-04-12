import { COLORS, SIZE, SHADOWS } from "../data/theme";
import { StyleSheet, Pressable, Text } from "react-native";

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
});