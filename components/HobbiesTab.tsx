import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  ImageBackground,
} from "react-native";
import hobbiesData from "../utils/HobbiesData";
import { LIGHT_THEME, DARK_THEME } from "../utils/ThemeColors";

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
