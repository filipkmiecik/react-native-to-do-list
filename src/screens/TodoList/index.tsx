import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import Header from "../../components/Header";

interface ITodoListProps {}

const TodoList: FC<ITodoListProps> = (props) => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle: string) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId: number) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View>
      <Header title="TodoList" />
      <View style={styles.screen}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoalAdditionHandler}
        />
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
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
});

export default TodoList;
