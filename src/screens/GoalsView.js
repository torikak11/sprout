
import { StyleSheet, SafeAreaView, View, Text, FlatList } from "react-native";
import { GoalsList } from "../components/List";
import { COLORS, FONTS, SIZE } from "../data/theme";
import { useNavigation } from '@react-navigation/native';

const GoalsView = () => {
    const navigation = useNavigation();
    const sortedGoals = []

    const renderItem = ({ item }) => (
        <GoalsList
            name={item.name}
            background={item.color}
            percentage={item.percentage}
            onPress={() => {
                //dispatch(goalsSlice.actions.setSelectedGoal(item.id));
                navigation.navigate('Goal Details');
            }}
        />
    )

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Your Goals</Text>
            </View>
            <View style={styles.listContainer}>
                {goals.length > 0 
                    ? <FlatList
                        data={sortedGoals}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{marginTop: 20, paddingBottom: 90}}
                        />
                    : <View style={styles.textContainer}><Text style={styles.text}>No Goals</Text></View>
                }
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white200
    },
    headingContainer: {
        flex: 1,
        borderBottomWidth: 2,
        borderColor: COLORS.green100,
        justifyContent: 'center',
    },
    listContainer: {
        flex: 8,
    },
    heading: {
        color: COLORS.blue200,
        fontSize: SIZE.heading,
        fontFamily: FONTS.regular,
        marginLeft: 25
    },
    text: {
        color: COLORS.blue200,
        fontSize: SIZE.heading02,

    },
    textContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default GoalsView;