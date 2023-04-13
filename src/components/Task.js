import { COLORS, SIZE, SHADOWS, FONTS } from "../data/theme";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export const Task = (props) => {
    return (
        <View style={styles.container}>
            {props.complete 
                ? <Ionicons name="checkbox-outline" size={32} color={COLORS.white100} /> 
                : <Ionicons name="square-outline" size={32} color={COLORS.white100} />}
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        color: COLORS.white100,
        fontSize: SIZE.small,
        marginLeft: 7,
    }
});