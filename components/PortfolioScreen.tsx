import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Hobbies from "./HobbiesTab";
import Repo from "./RepoTab";
import Header from "./Header";
import { LIGHT_THEME, DARK_THEME } from "../utils/ThemeColors";

export type PortfolioProps = {
  lightTheme: boolean;
  setLightTheme: (value: boolean) => void;
};

const Tab = createMaterialTopTabNavigator();

const Portfolio = ({ lightTheme, setLightTheme }: PortfolioProps) => {
  const themeColors = lightTheme ? LIGHT_THEME : DARK_THEME;

  return (
    <>
      <Header lightTheme={lightTheme} setLightTheme={setLightTheme} />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: themeColors.tabBarBackground,
          },
          tabBarIndicatorStyle: {
            backgroundColor: themeColors.tabBarIndicator,
          },
          tabBarActiveTintColor: themeColors.tabBarActiveTint,
          tabBarInactiveTintColor: themeColors.tabBarInactiveTint,
        }}
      >
        <Tab.Screen
          name="Hobbies"
          children={() => <Hobbies lightTheme={lightTheme} />}
        />
        <Tab.Screen
          name="QR Repo"
          children={() => <Repo lightTheme={lightTheme} />}
        />
      </Tab.Navigator>
    </>
  );
};

export default Portfolio;
