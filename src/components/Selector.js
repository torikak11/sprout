import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZE } from "../data/theme";
import { View, Pressable, Image, Text } from "react-native";
import goalPlants from "../data/goalPlants";
import habitPlants from "../data/habitPlants";

const ColorBox = (props) => {
  return (
    <Pressable
      style={
        props.selected
          ? [styles.outlineColorContainer, { backgroundColor: props.color }]
          : [styles.colorContainer, { backgroundColor: props.color }]
      }
      onPress={props.onPress}
    ></Pressable>
  );
};

export const ColorSelector = (props) => {
  return (
    <View style={styles.colorsContainer}>
      {props.currentColor === COLORS.blue100 ? (
        <ColorBox selected={true} color={COLORS.blue100} />
      ) : (
        <ColorBox
          selected={false}
          color={COLORS.blue100}
          onPress={() => props.setColor(COLORS.blue100)}
        />
      )}
      {props.currentColor === COLORS.blue200 ? (
        <ColorBox selected={true} color={COLORS.blue200} />
      ) : (
        <ColorBox
          selected={false}
          color={COLORS.blue200}
          onPress={() => props.setColor(COLORS.blue200)}
        />
      )}
      {props.currentColor === COLORS.green100 ? (
        <ColorBox selected={true} color={COLORS.green100} />
      ) : (
        <ColorBox
          selected={false}
          color={COLORS.green100}
          onPress={() => props.setColor(COLORS.green100)}
        />
      )}
      {props.currentColor === COLORS.green200 ? (
        <ColorBox selected={true} color={COLORS.green200} />
      ) : (
        <ColorBox
          selected={false}
          color={COLORS.green200}
          onPress={() => props.setColor(COLORS.green200)}
        />
      )}
      {props.currentColor === COLORS.coral100 ? (
        <ColorBox selected={true} color={COLORS.coral100} />
      ) : (
        <ColorBox
          selected={false}
          color={COLORS.coral100}
          onPress={() => props.setColor(COLORS.coral100)}
        />
      )}
    </View>
  );
};

export const PlantSelector = ({item, handleAddPlant, plantId}) => {
  return (
    <View style={styles.plantButton}>
      <Pressable
        style={
          item._id === plantId
            ? styles.selectedPlantContainer
            : styles.plantContainer
        }
        onPress={() => handleAddPlant(item)}
      >
        <Image source={item.image} style={styles.plantImage} />
      </Pressable>
      <Text style={styles.plantText} numberOfLines={1}>
        {item.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  colorContainer: {
    width: "17%",
    aspectRatio: 1 / 1,
    borderRadius: 5,
    marginHorizontal: 0,
  },
  outlineColorContainer: {
    width: "17%",
    aspectRatio: 1 / 1,
    borderRadius: 5,
    marginHorizontal: 0,
    borderWidth: 2,
    borderColor: COLORS.white100,
  },
  colorsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 10,
  },
  plantContainer: {
    width: "100%",
    aspectRatio: 1 / 1,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: "#DDD",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedPlantContainer: {
    width: "100%",
    aspectRatio: 1 / 1,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: COLORS.white100,
    alignItems: "center",
    justifyContent: "center",
  },
  plantButton: {
    width: "20%",
    alignItems: "center",
  },
  plantImage: {
    resizeMode: "contain",
    width: "90%",
    height: "90%",
  },
  text: {
    fontSize: SIZE.span,
    fontFamily: FONTS.regular,
    color: COLORS.white100,
    marginTop: 10,
  },
});
