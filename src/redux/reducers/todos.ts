import { ADD_TODO, REMOVE_TODO } from "../actions";

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now().toString(), value: action.title },
        ],
      };
    }
    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(
          (todo: { id: number }) => todo.id !== action.id
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export default todosReducer;
