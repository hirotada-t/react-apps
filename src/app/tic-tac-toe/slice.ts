import { createSlice } from "@reduxjs/toolkit";
import { GameCell, GameResultArr } from "./types";

const ticTacToeSlice = createSlice({
  name: "ticTacToe",
  initialState: {
    boardSize: 3,
    game: <GameResultArr>Array(9).fill(null),
    history: <number[]>[],
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
      const history = state.history.slice(0, step + 1);
      state.game = Array(state.boardSize ** 2).fill(null);
      history.forEach((diff, turn) => {
        state.game[diff] = turn % 2 as GameCell;
      });
      state.turn = step + 1;
    },
    updateGame: (state, action) => {
      const game = state.game.slice();
      const history = state.history.slice();
      const index = action.payload;
      const turn = state.turn;

      game[index] = turn % 2 as GameCell; // クリックしたマスの位置でgameを更新
      if (history[turn]) history.splice(turn); // 履歴を確認中に新しい手を打つと以降の履歴を削除

      state.turn = turn + 1;
      state.game = game;
      state.history = [...history, index];
    },
  },
});

// export const { makeMove } = ticTacToeSlice.actions;

// export const selectSquares = (state) => state.ticTacToe.squares;

export default ticTacToeSlice.reducer;