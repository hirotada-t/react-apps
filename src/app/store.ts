import { configureStore } from "@reduxjs/toolkit";
import ticTacToeReducer from "./tic-tac-toe/slice";
import settingsReducer from "./slice";

const store = configureStore({
  reducer: {
    ticTacToe: ticTacToeReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;