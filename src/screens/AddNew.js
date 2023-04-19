import { SafeAreaView, View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZE } from '../data/theme';
import { useNavigation } from '@react-navigation/native';

const AddNew = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.border}>
                <Text style={styles.heading}>Create New</Text>
            </View>
            <Pressable 
                style={styles.button}
                onPress={() => navigation.navigate('New Goal')}
            >
                <Text style={styles.text}>Goal</Text>
            </Pressable>
            <Pressable 
                style={styles.button}
                onPress={() => navigation.navigate('New Habit')}
            >
                <Text style={styles.text}>Habit</Text>
            </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white200,
    },
    button: {
        width: '60%',
        backgroundColor: COLORS.green200,
        aspectRatio: 8 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginVertical: 10,
    },
    text: {
        fontFamily: FONTS.bold,
        fontSize: SIZE.subheading,
        color: COLORS.white100,

    },
    heading: {
        fontFamily: FONTS.regular,
        fontSize: SIZE.heading02,
        paddingBottom: 15,
    },
    border: {
        width: '80%',
        borderBottomColor: COLORS.green100,
        borderBottomWidth: 1,
        alignItems: 'center',
        marginBottom: 15,
    },
})

export default AddNew;