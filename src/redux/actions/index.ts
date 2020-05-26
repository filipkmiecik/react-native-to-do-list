export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = (todoTitle: string) => {
  return { type: ADD_TODO, title: todoTitle };
};

export const removeTodo = (todoId: number) => {
  return { type: REMOVE_TODO, id: todoId };
};
