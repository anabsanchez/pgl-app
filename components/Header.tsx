import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { LIGHT_THEME, DARK_THEME } from "../utils/ThemeColors";
import { useNavigation } from "@react-navigation/native";

export type HeaderProps = {
  lightTheme: boolean;
  setLightTheme: (value: boolean) => void;
};

const Header = ({ lightTheme, setLightTheme }: HeaderProps) => {
  const themeColors = lightTheme ? LIGHT_THEME : DARK_THEME;
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <View
      style={[styles.header, { backgroundColor: themeColors.headerBackground }]}
    >
      <View style={styles.headerTop}>
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={24}
          color={lightTheme ? "white" : "#F49879"}
          onPress={() => setLightTheme(!lightTheme)}
        />
        <Text
          style={[
            styles.headerTitle,
            { color: lightTheme ? "white" : "#F49879" },
          ]}
        >
          My Portfolio
        </Text>

        <MaterialIcons
          name="rocket-launch"
          size={24}
          color={lightTheme ? "white" : "#F49879"}
        />
      </View>

      <View
        style={[
          styles.descriptionContainer,
          {
            backgroundColor: lightTheme
              ? "rgba(245, 245, 245, 0.2)"
              : "rgba(244, 210, 121, 0.07)",
          },
        ]}
      >
        <Image
          style={styles.avatar}
          source={require("../assets/images/profile/AnaSanchez.jpeg")}
        />
        <View style={styles.descriptionBox}>
          <Text
            style={[
              styles.descriptionTitle,
              { color: lightTheme ? "white" : "#F49879" },
            ]}
          >
            Hey there, this is Ana!
          </Text>
          <Text
            style={[
              styles.description,
              { color: lightTheme ? "white" : "#F49879" },
            ]}
          >
            I'm just a programming student trying to figure out my way into this
            crazy world of ones and zeros, despite my teacher's efforts to make
            it as difficult as possible.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingTop: 50,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    flex: 1,
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  descriptionBox: {
    marginLeft: 15,
    flex: 1,
  },
  descriptionTitle: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    textAlign: "justify",
  },
});
