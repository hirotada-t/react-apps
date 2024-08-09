import store from "@/app/store"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { SelectContent, SelectItem, SelectTrigger, SelectValue, Select } from "@/components/ui/select"
import { BOARD_SIZE_OPTIONS } from "../constant"
import { useState } from "react"

export default function GameSettings() {
  const [boardSize, setBoardSize] = useState<number>(3);
  const [judgeCount, setJudgeCount] = useState<number>(3);

  const changeSettings = () => {
    store.dispatch({ type: 'ticTacToe/updateBoardSize', payload: boardSize });
    store.dispatch({ type: 'ticTacToe/updateJudgeCount', payload: judgeCount });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Game Settings</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-11/12">
        <DialogHeader>
          <DialogTitle>Edit Board</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="col-span-4 sm:col-span-1">
            Board Size
          </Label>
          <Select onValueChange={(v)=>setBoardSize(Number(v))}>
            <SelectTrigger className="col-span-4 sm:col-span-3">
              <SelectValue placeholder="Change board size (default=3)" />
            </SelectTrigger>
            <SelectContent>
              {BOARD_SIZE_OPTIONS.map((item, i) => (
                <SelectItem key={i} value={(item).toString()}>
                  {item}x{item}
                </SelectItem>
              ))
              }
            </SelectContent>
          </Select>
          <Label className="col-span-4 sm:col-span-1">
            Win Conditions
          </Label>
          <Select onValueChange={(v)=>setJudgeCount(Number(v))}>
            <SelectTrigger className="col-span-4 sm:col-span-3">
              <SelectValue placeholder="Change win num (default=3)" />
            </SelectTrigger>
            <SelectContent>
              {[...Array(boardSize - 2)].map((_, i) => i + 3).map((item, j) => (
                <SelectItem key={j} value={(item).toString()}>
                  {item}
                </SelectItem>
              ))
              }
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={changeSettings}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}