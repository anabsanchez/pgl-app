import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Hobbies from "./Hobbies";
import Repo from "./RepoTab";
import Header from "./Header";

export type PortfolioProps = {
  lightTheme: boolean;
  setLightTheme: (value: boolean) => void;
};

const Tab = createMaterialTopTabNavigator();

const Portfolio = ({ lightTheme, setLightTheme }: PortfolioProps) => {
  return (
    <>
      <Header lightTheme={lightTheme} setLightTheme={setLightTheme} />

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: lightTheme ? "#F49879" : "#1B110E",
          },
          tabBarIndicatorStyle: {
            backgroundColor: lightTheme ? "#F5F5F5" : "#F49879",
          },
          tabBarActiveTintColor: lightTheme ? "#F5F5F5" : "#F49879",
          tabBarInactiveTintColor: lightTheme
            ? "rgba(245, 245, 245, .5)"
            : "rgba(244, 152, 121, .5)",
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
