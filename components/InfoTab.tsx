import { StyleSheet, Text, Image, View, ImageBackground } from "react-native";
import React from "react";
import Hobbies from "./Hobbies";
import {
  LIGHT_THEME_BACKGROUND,
  DARK_THEME_BACKGROUND,
} from "../utils/ThemeColors";

export type InfoProps = {
  lightTheme: boolean;
};

const Info = ({ lightTheme }: InfoProps) => {
  return (
    <View style={styles.infoTab}>
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
            styles.descriptionContainer,
            {
              backgroundColor: lightTheme
                ? LIGHT_THEME_BACKGROUND
                : DARK_THEME_BACKGROUND,
            },
          ]}
        >
          <Image
            style={styles.avatar}
            source={require("../assets/images/profile/AnaSanchez.jpeg")}
          />

          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionTitle}>Hey there, this is Ana!</Text>

            <Text style={styles.description}>
              I'm just a programming student trying to figure out my way into
              this crazy world of ones and zeros, despite my teacher's efforts
              to make it as difficult as possible.
            </Text>
          </View>
        </View>

        <Hobbies lightTheme={lightTheme} />
      </ImageBackground>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  infoTab: {
    width: "100%",
    height: "100%",
  },
  background: {
    flex: 1,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginLeft: -5,
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    padding: 5,
    paddingRight: 16,
    borderRadius: 10,
    marginTop: 30,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  descriptionBox: {
    width: "70%",
    margin: 10,
  },
  descriptionTitle: {
    fontWeight: "700",
    fontSize: 15,
    color: "white",
  },
  description: {
    textAlign: "justify",
    fontSize: 12,
    color: "white",
  },
});
