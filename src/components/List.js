import { COLORS, SIZE, SHADOWS } from "../data/theme";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export const VerticalList = (props) => {
    return (
        <View style={[styles.container, {backgroundColor: props.background}]} >
            <View style={styles.nameContainer}>
                <Text style={styles.text}>
                    {props.name.length > 25 ? props.name.slice(0,26) + '...' : props.name}
                </Text>
                <Ionicons name="arrow-forward-outline" size={36} color={COLORS.white100} />
            </View>
            <View style={styles.progressContainer}>
                <Text style={styles.percentage}>
                    {props.percentage}%
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 20,
        borderRadius: 20,
        ...SHADOWS.shadow01,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: COLORS.white100,
        fontSize: SIZE.subheading,
    },
    progressContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        marginHorizontal: 30,
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: COLORS.white100,
    },
    percentage: {
        fontSize: SIZE.subheading,
        color: COLORS.white100,
        fontWeight: 'bold',
    }
});