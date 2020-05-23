import React, { FC } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface ITodoItem {
  title: string;
  id: number;
  onDelete: {
    bind: (
      arg0: typeof globalThis,
      arg1: number
    ) =>
      | ((event: import("react-native").GestureResponderEvent) => void)
      | undefined;
  };
}

const TodoItem: FC<ITodoItem> = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(globalThis, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
export default TodoItem;
