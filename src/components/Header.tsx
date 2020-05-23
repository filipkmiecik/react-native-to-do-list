import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constans/Colors";

interface IHeaderProps {
  title: string;
}

const Header: FC<IHeaderProps> = (props) => {
  return (
    <View style={styles.header}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    paddingTop: 20,
    backgroundColor: Colors.main,
    fontFamily: "open-sans-bold",
    fontSize: 25,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Header;
