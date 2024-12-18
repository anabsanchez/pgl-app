import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "./components/WelcomeScreen";
import Portfolio from "./components/PortfolioScreen";

export default function App() {
  const [lightTheme, setLightTheme] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {showWelcome ? (
          <Welcome
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
