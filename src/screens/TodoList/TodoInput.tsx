import React, { useState, FC } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

interface ITodoInput {
  onAddGoal: (arg0: string) => void;
  visible: boolean;
  onCancel: (
    ev: import("react-native").NativeSyntheticEvent<
      import("react-native").NativeTouchEvent
    >
  ) => void;
}

const TodoInput: FC<ITodoInput> = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const TodoInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type here"
          style={styles.input}
          onChangeText={TodoInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "40%",
  },
});
export default TodoInput;
