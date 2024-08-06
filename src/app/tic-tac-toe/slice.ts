import { createSlice } from "@reduxjs/toolkit";
import { GameResultArr } from "./types";

const ticTacToeSlice = createSlice({
  name: "ticTacToe",
  initialState: {
    game: <GameResultArr>Array(9).fill(null),
    turn: 0,
    boardSize: 4,
    history: <GameResultArr[]>[],
  },
  reducers: {
    updateBoardSize: (state, action) => {
      state.boardSize = action.payload;
    },
    updateGame: (state, action) => {
      const turn = state.turn;
      const game = state.game.slice();
      const history = state.history.slice();

      state.turn = turn + 1;
      game[action.payload] = turn % 2;
      state.game = game;
      state.history = [...history, game];

    },
  },
});

// export const { makeMove } = ticTacToeSlice.actions;

// export const selectSquares = (state) => state.ticTacToe.squares;

export default ticTacToeSlice.reducer;