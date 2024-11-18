import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./components/WelcomeScreen";
import Portfolio from "./components/Portfolio";

export default function App() {
  const [lightTheme, setLightTheme] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {showWelcome ? (
          <WelcomeScreen
            lightTheme={lightTheme}
            setLightTheme={setLightTheme}
            navigateToPortfolio={() => setShowWelcome(false)}
          />
        ) : (
          <Portfolio lightTheme={lightTheme} setLightTheme={setLightTheme} />
        )}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
