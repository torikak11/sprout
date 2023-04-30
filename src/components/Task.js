import { COLORS, SIZE, SHADOWS, FONTS } from "../data/theme";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export const Task = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Ionicons name={props.complete ? "checkbox-outline" : "square-outline"} size={32} color={COLORS.white100} />
            </View>
            <Text style={styles.text} numberOfLines={2} >{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        flex: 1,
    },
    text: {
        flex: 7,
        color: COLORS.white100,
        fontSize: SIZE.small,
        marginLeft: 7,
    }
});