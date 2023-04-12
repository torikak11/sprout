import { StyleSheet, SafeAreaView, View, Text, FlatList } from "react-native";
import { VerticalList } from "../components/List";
import goals from "../data/goals";
import { COLORS, FONTS, SHADOWS, SIZE } from "../data/theme";

export default function GoalsView() {
    const renderItem = ({ item }) => (
        <VerticalList
            name={item.name}
            background={item.color}
            percentage={item.percentage}
        />
    )

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.text}>Goals List</Text>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={goals}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headingContainer: {
        flex: 1,
        borderBottomWidth: 2,
        borderColor: COLORS.green100,
        justifyContent: 'center',
    },
    listContainer: {
        flex: 7,
    },
    text: {
        color: COLORS.blue200,
        fontSize: SIZE.heading,
        fontFamily: FONTS.regular,
        textAlign: 'center',
    }
});