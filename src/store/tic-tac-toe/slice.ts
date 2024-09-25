import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameCell, GameResultArr } from "@/app/tic-tac-toe/types";

interface TicTacToeState {
  boardSize: number
  game: GameResultArr
  history: number[]
  turn: number
  judgeCount: number
}

const initialState: TicTacToeState = {
  boardSize: 3,
  game: Array(9).fill(null),
  history: [],
  turn: 0,
  judgeCount: 3,
}

const ticTacToeSlice = createSlice({
  name: "ticTacToe",
  initialState,
  reducers: {
    updateBoardSize: (state, action:PayloadAction<number>) => {
      state.boardSize = action.payload;
      state.game = Array(state.boardSize ** 2).fill(null);
      state.history = [];
      state.turn = 0;
    },
    updateJudgeCount: (state, action:PayloadAction<number>) => {
      state.judgeCount = action.payload;
    },
    resetGame: (state) => {
    },
    jumpTo: (state, action: PayloadAction<number>) => {
      const step = action.payload;
      const history = state.history.slice(0, step + 1);
      state.game = Array(state.boardSize ** 2).fill(null);
      history.forEach((diff, turn) => {
        state.game[diff] = turn % 2 as GameCell;
      });
      state.turn = step + 1;
    },
    updateGame: (state, action:PayloadAction<number>) => {
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

export const { 
  updateBoardSize, updateJudgeCount, resetGame, jumpTo, updateGame
} = ticTacToeSlice.actions;

export default ticTacToeSlice.reducer;