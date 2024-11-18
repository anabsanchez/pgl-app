import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export type WelcomeProps = {
  lightTheme: boolean;
  setLightTheme: (value: boolean) => void;
  navigateToPortfolio: () => void;
};

const WelcomeScreen = ({
  lightTheme,
  setLightTheme,
  navigateToPortfolio,
}: WelcomeProps) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: lightTheme ? "#F49879" : "#1B110E" },
      ]}
    >
      <TouchableOpacity
        onPress={() => setLightTheme(!lightTheme)}
        style={styles.themeIcon}
      >
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={24}
          color={lightTheme ? "white" : "#F49879"} // ícono blanco en modo claro, #F49879 en modo oscuro
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <Image
          source={
            lightTheme
              ? require("../assets/images/rocket_light.png")
              : require("../assets/images/rocket_dark.png")
          }
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.title,
              { fontSize: 60, color: lightTheme ? "white" : "#F49879" },
            ]}
          >
            Welcome
          </Text>
          <Text
            style={[
              styles.title,
              { fontSize: 45, color: lightTheme ? "white" : "#F49879" },
            ]}
          >
            aboard
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: lightTheme ? "white" : "#F49879" },
          ]}
          onPress={navigateToPortfolio}
        >
          <Text
            style={[
              styles.buttonText,
              { color: lightTheme ? "#F49879" : "#1B110E" },
            ]}
          >
            let's start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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

export default WelcomeScreen;
