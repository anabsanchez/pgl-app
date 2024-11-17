import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import WelcomeScreen from "./components/WelcomeScreen";

export default function App() {
  const [lightTheme, setLightTheme] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <View style={styles.container}>
      <WelcomeScreen
        lightTheme={lightTheme}
        setLightTheme={setLightTheme}
        navigateToPortfolio={() => setShowWelcome(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
