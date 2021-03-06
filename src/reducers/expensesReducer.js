const expensesReducerDefault = [];

const expensesReducer = (state = expensesReducerDefault, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter((item) => item.id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, ...action.changeObj };
        } else {
          return item;
        }
      });
    case "SET_EXPENSES":
      return action.expenses;
    case "CLEAR_EXPENSES":
      return [];
    default:
      return state;
  }
};

export default expensesReducer;
