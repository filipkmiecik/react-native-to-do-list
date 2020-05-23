const todos = (state = [], action: { type: any; id: number; text: string }) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo: { id: number; completed: boolean }) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
