import { GameCell, GameResultArr } from "@/types/tic-tac-toe";

export const gameEnd = (game: GameResultArr, index: number, judgeCount:number): boolean => {
  const player = game[index];
  const boardSize = Math.sqrt(game.length);
  const x = index % boardSize;
  const y = Math.floor(index / boardSize);
  
  const rowArr = game.slice(y * boardSize, (y + 1) * boardSize);
  const colArr = game.filter((_, i) => i % boardSize === x);
  const diagUPArr = getDiagArr(game, x, y);
  const diagDwnArr = getDiagArr(game, x, y, -1);

  const rowWin = continuousPlayer(rowArr, player, judgeCount);
  const colWin = continuousPlayer(colArr, player, judgeCount);
  const diag1Win = continuousPlayer(diagUPArr, player, judgeCount);
  const diag2Win = continuousPlayer(diagDwnArr, player, judgeCount);

  return rowWin || colWin || diag1Win || diag2Win;
}

const getDiagArr = (game: GameResultArr, x: number, y:number, angleFlag = 1):GameCell[] => {
  const diagArr: GameCell[] = [];
  const boardSize = Math.sqrt(game.length);
  const yIntercept = y - angleFlag * x;

  for (let xi = 0; xi < boardSize; xi++) {
    const yi = yIntercept + angleFlag * xi;
    if (game[xi + yi * boardSize] === undefined) continue;
    diagArr.push(game[xi + yi * boardSize]);
  }

  return diagArr;
};

const continuousPlayer = (arr: GameCell[], player: GameCell, judgeCount: number): boolean => {
  if (
    arr.length < judgeCount ||
    player === null
  ) return false;
  
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === player) {
      count++;
      if (count === judgeCount) return true;
    } else {
      count = 0;
    }
  }
  return false;
}