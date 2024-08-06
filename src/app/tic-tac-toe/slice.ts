import { createSlice } from "@reduxjs/toolkit";
import { GameResultArr } from "./types";

const ticTacToeSlice = createSlice({
  name: "ticTacToe",
  initialState: {
    game: <GameResultArr>Array(9).fill(null),
    turn: 0,
    boardSize: 3,
    history: <GameResultArr[]>[],
  },
  reducers: {
    updateBoardSize: (state, action) => {
      state.boardSize = action.payload;
    },
    resetGame: (state) => {
      state.game = Array(state.boardSize ** 2).fill(null);
      state.turn = 0;
      state.history = [];
    },
    updateGame: (state) => {
      const turn = state.turn;
      const game = state.game.slice();
      const history = state.history.slice();

      state.turn = turn + 1;
      state.game = game;
      state.history = [...history, game];
    },
  },
});

// export const { makeMove } = ticTacToeSlice.actions;

// export const selectSquares = (state) => state.ticTacToe.squares;

export default ticTacToeSlice.reducer;