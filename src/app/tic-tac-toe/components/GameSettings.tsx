import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SelectContent, SelectItem, SelectTrigger, SelectValue, Select } from "@/components/ui/select"

export default function GameSettings() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Game Settings</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-11/12">
        <DialogHeader>
          <DialogTitle>Edit Board</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Board Size
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Change board size (default=3)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3x3</SelectItem>
                <SelectItem value="4">4x4</SelectItem>
                <SelectItem value="5">5x5</SelectItem>
                <SelectItem value="6">6x6</SelectItem>
                <SelectItem value="7">7x7</SelectItem>
                <SelectItem value="8">8x8</SelectItem>
                <SelectItem value="9">9x9</SelectItem>
                <SelectItem value="10">10x10</SelectItem>
                <SelectItem value="11">11x11</SelectItem>
                <SelectItem value="12">12x12</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}