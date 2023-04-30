import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZE } from "../data/theme";
import { View, Pressable, Image, Text } from "react-native";
import goalPlants from "../data/goalPlants";

const ColorBox = (props) => {
    return (
        <Pressable 
            style={props.selected 
                ? [styles.outlineColorContainer, {backgroundColor: props.color}] 
                : [styles.colorContainer, {backgroundColor: props.color}]}
            onPress={props.onPress}  
        >
        </Pressable>
    )
}

export const ColorSelector = (props) => {
    return (
        <View style={styles.colorsContainer}>
            {props.currentColor === COLORS.blue100 
                ? <ColorBox selected={true} color={COLORS.blue100} /> 
                : <ColorBox selected={false} color={COLORS.blue100} onPress={() => props.setColor(COLORS.blue100)} />}
            {props.currentColor === COLORS.blue200 
                ? <ColorBox selected={true} color={COLORS.blue200} /> 
                : <ColorBox selected={false} color={COLORS.blue200} onPress={() => props.setColor(COLORS.blue200)} />}
            {props.currentColor === COLORS.green100 
                ? <ColorBox selected={true} color={COLORS.green100} /> 
                : <ColorBox selected={false} color={COLORS.green100} onPress={() => props.setColor(COLORS.green100)} />}
            {props.currentColor === COLORS.green200 
                ? <ColorBox selected={true} color={COLORS.green200} /> 
                : <ColorBox selected={false} color={COLORS.green200} onPress={() => props.setColor(COLORS.green200)} />}
            {props.currentColor === COLORS.coral100 
                ? <ColorBox selected={true} color={COLORS.coral100} /> 
                : <ColorBox selected={false} color={COLORS.coral100} onPress={() => props.setColor(COLORS.coral100)} />}
        </View>
    );
};

const PlantBox = (props) => {
    return(
        <View style={styles.plantButton}>
            <Pressable 
                style={props.selected 
                    ? styles.selectedPlantContainer 
                    : styles.plantContainer}
                onPress={props.onPress} 
            >
                <Image source={props.image} style={styles.image} />
            </Pressable>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    )
}

export const PlantSelector = (props) => {
    return (
        <View style={styles.colorsContainer}>
            {props.currentPlantName === "Zinnia"
                ? <PlantBox name={"Zinnia"} selected={true} image={require("../../assets/images/large-plant.png")} /> 
                : <PlantBox name={"Zinnia"} selected={false} image={require("../../assets/images/large-plant.png")} onPress={() => props.setPlant(goalPlants[0])} />}
            {props.currentPlantName === "Sunflower"
                ? <PlantBox name={"Sunflower"} selected={true} image={require("../../assets/images/s-tomato.png")} /> 
                : <PlantBox name={"Sunflower"} selected={false} image={require("../../assets/images/s-tomato.png")} onPress={() => props.setPlant(goalPlants[1])} />}
            {props.currentPlantName === "Tulip"
                ? <PlantBox name={"Tulip"} selected={true} image={require("../../assets/images/small-plant.png")} /> 
                : <PlantBox name={"Tulip"} selected={false} image={require("../../assets/images/small-plant.png")} onPress={() => props.setPlant(goalPlants[2])} />}
            {props.currentPlantName === "Daisy"
                ? <PlantBox name={"Daisy"} selected={true} image={require("../../assets/images/s-tomato.png")} /> 
                : <PlantBox name={"Daisy"} selected={false} image={require("../../assets/images/s-tomato.png")} onPress={() => props.setPlant(goalPlants[3])} />}
        </View>
    );
};

const styles = StyleSheet.create({
    colorContainer: {
        width: '17%',
        aspectRatio: 1 / 1,
        borderRadius: 5,
        marginHorizontal: 0,
    },
    outlineColorContainer: {
        width: '17%',
        aspectRatio: 1 / 1,
        borderRadius: 5,
        marginHorizontal: 0,
        borderWidth: 2,
        borderColor: COLORS.white100,
    },
    colorsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 10,
    },
    plantContainer: {
        width: '100%',
        aspectRatio: 1 / 1,
        borderRadius: 5,
        marginHorizontal: 0,
        backgroundColor: "#DDD",
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedPlantContainer: {
        width: '100%',
        aspectRatio: 1 / 1,
        borderRadius: 5,
        marginHorizontal: 0,
        backgroundColor: COLORS.white100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        resizeMode: 'contain', 
        height: 40,
        width: 40, 

    },
    plantButton: {
        width: '20%',
        alignItems: 'center'
    },
    text: {
        fontSize: SIZE.span, 
        fontFamily: FONTS.regular,
        color: COLORS.white100,
        marginTop: 10
    }
});