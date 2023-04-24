import { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, ImageBackground, Text, Image, Pressable } from "react-native";
import { FilledSmallButton, OutlineSmallButton } from '../components/Button';
import { COLORS, FONTS, SIZE } from "../data/theme";
import goals from "../data/goals";
import habits from "../data/habits";
import all from "../data/habits";


const Home = () => {
    //sets state to current time for greeting
    const [currentTime, setCurrentTime] = useState('');
    const [image, setImage] = useState('');
    const [pressed, setPressed] = useState(1);

    useEffect(() => {
        let hour = new Date().getHours();
        let greeting;
        let image;
        if (hour >= 4 && hour < 8){
            greeting = 'Good Morning';
            image = require('../../assets/images/early-morning-landscape.png');
        } else if (hour >= 8 && hour < 12) {
            greeting = 'Good Morning';
            image = require('../../assets/images/morning-landscape.png');
        } else if (hour >= 12 && hour < 17) {
            greeting = 'Good Afternoon';
            image = require('../../assets/images/afternoon-landscape.png');
        } else if (hour >= 17 && hour < 21) {
            greeting = 'Good Evening';
            image = require('../../assets/images/evening-landscape.png');
        } else {
            greeting = 'Good Night';
            image = require('../../assets/images/night-landscape.png');
        }
        setCurrentTime(greeting);
        setImage(image);
      });

    const renderItem = ({item}) => (
        <View style={styles.imageContainer}> 
            <Image 
                source={item.plant.image}
                style={styles.images}
            />
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={image}
                style={styles.image}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.textGreeting}>{currentTime},</Text>
                    <Text style={styles.textName}>Victoria</Text>
                </View>
                <View style={styles.plantContainer}>
                    {pressed === 1
                        ? <FlatList 
                            data={all}
                            renderItem={renderItem}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                        : pressed === 2
                        ? <FlatList 
                            data={goals}
                            renderItem={renderItem}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                        : <FlatList 
                            data={habits}
                            renderItem={renderItem}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    }
                </View>
                <View style={styles.buttonContainer}>
                    {pressed === 1 
                        ? <FilledSmallButton name="All" onPress={() => setPressed(1)} /> 
                        : <OutlineSmallButton name="All" onPress={() => setPressed(1)} />}
                    {pressed === 2 
                        ? <FilledSmallButton name="Goals" onPress={() => setPressed(2)} /> 
                        : <OutlineSmallButton name="Goals" onPress={() => setPressed(2)} />}
                    {pressed === 3 
                        ? <FilledSmallButton name="Habits" onPress={() => setPressed(3)} /> 
                        : <OutlineSmallButton name="Habits" onPress={() => setPressed(3)} />}
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
    },
    buttonContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textContainer: {
        marginLeft: 40,
        marginTop: 50,
        flex: 4,
    },
    textGreeting: {
        fontSize: SIZE.heading,
        color: COLORS.white100,
        fontFamily: FONTS.bold,
    },
    textName : {
        fontSize: SIZE.heading02,
        color: COLORS.white100,
        fontFamily: FONTS.regular,
    },
    plantContainer: {
        flex: 4,
    },
    imageContainer: {
        padding: 20,
        justifyContent: 'flex-end',
    },
    images: {
        resizeMode: 'contain',
    }
  });

  export default Home;