import React, { FC, useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

import { addTodo, removeTodo } from "../../redux/actions";

interface ITodoListProps {}

const TodoList: FC<ITodoListProps> = (props) => {
  const [isAddMode, setIsAddMode] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todos.todos);

  const addGoalHandler = (todoTitle: string) => {
    dispatch(addTodo(todoTitle));
    setIsAddMode(false);
  };

  const removeGoalHandler = (todoId: number) => {
    dispatch(removeTodo(todoId));
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View>
      <Header title="TodoApp" />
      <View style={styles.screen}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <TodoInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoalAdditionHandler}
        />
        <FlatList
          style={styles.todoContainer}
          data={todos}
          renderItem={(itemData) => (
            <TodoItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  todoContainer: {
    marginTop: 50,
  },
});

export default TodoList;

{
  /* <FlatList
style={styles.todoContainer}
data={todos}
renderItem={(itemData) => (
  <TodoItem
    id={itemData.item.id}
    onDelete={removeGoalHandler}
    title={itemData.item.value}
  />
)}
/> */
}
