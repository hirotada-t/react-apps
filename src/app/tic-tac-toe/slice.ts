import { createSlice } from "@reduxjs/toolkit";
import { GameCell, GameResultArr } from "./types";

const ticTacToeSlice = createSlice({
  name: "ticTacToe",
  initialState: {
    boardSize: 3,
    game: <GameResultArr>Array(9).fill(null),
    history: <GameResultArr[]>[],
    turn: 0,
  },
  reducers: {
    updateBoardSize: (state, action) => {
      state.boardSize = action.payload;
      state.game = Array(state.boardSize ** 2).fill(null);
      state.history = [];
      state.turn = 0;
    },
    resetGame: (state) => {
    },
    jumpTo: (state, action) => {
      const step = action.payload;
      state.game = state.history[step];
    },
    updateGame: (state, action) => {
      const index = action.payload;
      const turn = state.turn;
      const game = state.game.slice();
      game[index] = turn % 2 as GameCell;
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