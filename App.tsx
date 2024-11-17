import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import InfoTab from "./components/InfoTab";
import Repo from "./components/RepoTab";

export default function App() {
  const [displayQR, setDisplayQR] = useState(true);
  const [lightTheme, setLightTheme] = useState(true);

  return (
    <View style={styles.container}>
      <Header
        displayQR={displayQR}
        setDisplayQR={setDisplayQR}
        lightTheme={lightTheme}
        setLightTheme={setLightTheme}
      />

      <View style={styles.body}>
        {displayQR ? (
          <InfoTab lightTheme={lightTheme} />
        ) : (
          <Repo lightTheme={lightTheme} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
    marginTop: 10,
  },
});
