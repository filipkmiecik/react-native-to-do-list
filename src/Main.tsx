import React, { FC, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";

import NavigationTabs from "./components/NavigationTabs";

interface IMainProps {}

const Main: FC<IMainProps> = (props) => {
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
