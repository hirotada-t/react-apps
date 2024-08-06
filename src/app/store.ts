import { configureStore } from "@reduxjs/toolkit";
import ticTacToeReducer from "./tic-tac-toe/slice";

const store = configureStore({
  reducer: {
    ticTacToe: ticTacToeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;