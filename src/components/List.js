import { COLORS, SIZE, SHADOWS, FONTS } from "../data/theme";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export const VerticalList = (props) => {
    return (
        <View style={[styles.container, {backgroundColor: props.background}]} >
            <View style={styles.contentContainer}>
                <View style={styles.progressContainer}>
                    <Text style={styles.percentage}>
                        {props.percentage}%
                    </Text>
                </View>
                <Text style={styles.text}>
                    {props.name.length > 20 ? props.name.slice(0,21) + '...' : props.name}
                </Text>
                <View style={styles.iconContainer}>
                    <Ionicons name="arrow-forward-outline" size={32} color={COLORS.white100} />
                </View>
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
    iconContainer: {
        marginLeft: 'auto',
    },
    text: {
        color: COLORS.white100,
        fontSize: SIZE.subheading,
        fontFamily: FONTS.regular,
        marginLeft: 10,
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
        fontWeight: 'bold',
    },
});