import { Text, Button, StyleSheet, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LIGHT_THEME, DARK_THEME } from "../utils/ThemeColors";

export type HeaderProps = {
  displayQR: boolean;
  setDisplayQR: (value: boolean) => void;
  lightTheme: boolean;
  setLightTheme: (value: boolean) => void;
};

const Header = ({
  displayQR,
  setDisplayQR,
  lightTheme,
  setLightTheme,
}: HeaderProps) => {
  const themeColors = lightTheme ? LIGHT_THEME : DARK_THEME;

  return (
    <View
      style={[styles.header, { backgroundColor: themeColors.headerBackground }]}
    >
      <View style={styles.headerTop}>
        <Text style={styles.headerTitle}>My Portfolio</Text>

        <View>
          <MaterialCommunityIcons
            name="theme-light-dark"
            size={24}
            color="white"
            onPress={() => setLightTheme(!lightTheme)}
          />
        </View>
      </View>

      <View
        style={[
          styles.headerButtons,
          { backgroundColor: themeColors.buttonsBackground },
        ]}
      >
        <Button
          onPress={() => setDisplayQR(true)}
          title="Mi Info"
          color={displayQR ? themeColors.currentTab : themeColors.otherTab}
        />

        <Button
          onPress={() => setDisplayQR(false)}
          title="Mi Repo"
          color={!displayQR ? themeColors.currentTab : themeColors.otherTab}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    paddingLeft: 85,
    paddingRight: 20,
  },
  headerTitle: {
    color: "white",
    fontSize: 30,
    textTransform: "uppercase",
    marginTop: -3,
    marginBottom: 3,
  },
  headerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 75,
    paddingRight: 75,
    paddingTop: 4,
  },
  themeIcon: {
    color: "white",
  },
});
