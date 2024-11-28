import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LIGHT_THEME, DARK_THEME } from "../utils/ThemeColors";

export type WelcomeProps = {
  lightTheme: boolean;
  setLightTheme: (value: boolean) => void;
  navigateToPortfolio: () => void;
};

const Welcome = ({
  lightTheme,
  setLightTheme,
  navigateToPortfolio,
}: WelcomeProps) => {
  const themeColors = lightTheme ? LIGHT_THEME : DARK_THEME;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themeColors.welcomeBackground },
      ]}
    >
      <TouchableOpacity
        onPress={() => setLightTheme(!lightTheme)}
        style={styles.themeIcon}
      >
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={24}
          color={themeColors.themeIconColor}
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <Image
          source={
            lightTheme
              ? require("../assets/images/welcome/rocket_light.png")
              : require("../assets/images/welcome/rocket_dark.png")
          }
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.title,
              { fontSize: 60, color: themeColors.titleTextColor },
            ]}
          >
            Welcome
          </Text>
          <Text
            style={[
              styles.title,
              { fontSize: 45, color: themeColors.titleTextColor },
            ]}
          >
            aboard
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: themeColors.welcomeButtonBackground },
          ]}
          onPress={navigateToPortfolio}
        >
          <Text
            style={[
              styles.buttonText,
              { color: themeColors.welcomeButtonTextColor },
            ]}
          >
            let's start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  themeIcon: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
  image: {
    width: 300,
    height: 300,
    marginTop: -150,
    marginRight: -100,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    bottom: 50,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    position: "absolute",
    bottom: 100,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
