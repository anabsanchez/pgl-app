import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import hobbiesData from "../utils/HobbiesData";

const LIGHT_THEME = {
  containerBackground: "rgba(150, 40, 40, .3)",
  itemBackground: "rgba(255, 165, 0, 0.3)",
  titleTextColor: "white", // Color blanco para el modo claro
  hobbyTextColor: "white", // Color blanco para los hobbies en modo claro
};

const DARK_THEME = {
  containerBackground: "rgba(40, 40, 40, 0.4)",
  itemBackground: "rgba(255, 165, 0, 0.1)",
  titleTextColor: "rgba(244, 152, 121, .7)", // Color actual para el título en modo oscuro
  hobbyTextColor: "rgba(244, 152, 121, .8)", // Color actual para el texto de los hobbies en modo oscuro
};

export type HobbiesProps = {
  lightTheme: boolean;
};

const Hobbies = ({ lightTheme }: HobbiesProps) => {
  const themeColors = lightTheme ? LIGHT_THEME : DARK_THEME;

  return (
    <ImageBackground
      source={
        lightTheme
          ? require("../assets/images/background/BlindingSun(perfect for light theme).jpeg")
          : require("../assets/images/background/SolarSystem.jpg")
      }
      resizeMode="cover"
      style={styles.background}
    >
      <View
        style={[
          styles.hobbiesContainer,
          { backgroundColor: themeColors.containerBackground },
        ]}
      >
        <Text
          style={[styles.hobbiesTitle, { color: themeColors.titleTextColor }]}
        >
          Now, here's some of the stuff I enjoy:
        </Text>
        <ScrollView style={styles.hobbiesList}>
          {hobbiesData.map((hobby, index) => (
            <View
              key={index}
              style={[
                styles.hobbyItem,
                { backgroundColor: themeColors.itemBackground },
              ]}
            >
              <Text
                style={[
                  styles.hobbyText,
                  { color: themeColors.hobbyTextColor },
                ]}
              >
                {hobby.text}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Hobbies;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  hobbiesContainer: {
    width: 300,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  hobbiesTitle: {
    fontWeight: "800",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
  hobbiesList: {
    padding: 10,
    width: 300,
    alignSelf: "center",
  },
  hobbyItem: {
    padding: 15,
    margin: 5,
    borderRadius: 5,
  },
  hobbyText: {
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
  },
});
