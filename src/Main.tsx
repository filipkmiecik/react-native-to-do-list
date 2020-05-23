import React, { FC, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import NavigationTabs from "./components/NavigationTabs";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

interface IMainProps {}

const Main: FC<IMainProps> = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <NavigationContainer>
      <View style={styles.screen}>
        <NavigationTabs />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Main;
