import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";

export type RepoProps = {
  lightTheme: boolean;
};

const Repo = ({ lightTheme }: RepoProps) => (
  <ImageBackground
    source={
      lightTheme
        ? require("../assets/images/background/BlindingSun(perfect for light theme).jpeg")
        : require("../assets/images/background/SolarSystem.jpg")
    }
    resizeMode="cover"
    style={styles.background}
  >
    <View style={styles.repoTab}>
      <View style={styles.qrContainer}>
        <View style={styles.qrWrapper}>
          <QRCode value="https://github.com/anabsanchez" size={100} />
        </View>
      </View>
    </View>
  </ImageBackground>
);

export default Repo;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  repoTab: {
    justifyContent: "center",
    alignItems: "center",
  },
  qrContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    height: 160,
    borderRadius: 80,
    overflow: "hidden",
  },
  qrWrapper: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
