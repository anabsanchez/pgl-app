import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export type PortfolioProps = {
  lightTheme: boolean;
  setLightTheme: (value: boolean) => void;
};

const Tab = createMaterialTopTabNavigator();

const Portfolio = ({ lightTheme, setLightTheme }: PortfolioProps) => {
  return <></>;
};

export default Portfolio;
