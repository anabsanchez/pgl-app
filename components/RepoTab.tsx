import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";

export type RepoProps = {
  lightTheme: boolean;
};

const Repo = ({ lightTheme }: RepoProps) => {
  return (
    <View style={styles.repoTab}>
      <ImageBackground
        source={
          lightTheme
            ? require("../assets/images/background/BlindingSun(perfect for light theme).jpeg")
            : require("../assets/images/background/SolarSystem.jpg")
        }
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.qrContainer}>
          <View style={styles.qrWrapper}>
            <QRCode value="https://github.com/anabsanchez" size={100} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Repo;

const styles = StyleSheet.create({
  repoTab: {
    width: "100%",
    height: "100%",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  qrContainer: {
    position: "absolute",
    top: "40%",
    left: "30%",
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
