export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = (text: string) => {
  return { type: ADD_TODO, title: text };
};

export const removeTodo = () => {
  return { type: REMOVE_TODO };
};
