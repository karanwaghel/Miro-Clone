import {
  Pen,
  EraserIcon,
  Menu,
  Share2,
  Square,
  Diamond,
  Circle,
  MoveRight,
  Minus,
  ALargeSmall,
  MousePointer,
  LogOut as LogOutIcon
  
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { useWhiteBoard } from "@/ComponentProject/Context/DashBoardContext";
import { useAuth } from "@/ComponentProject/Context/AuthContext";

export default function Toolbar() {


  const { setTool } = useWhiteBoard();
  const {LogOut}= useAuth();

  const handletoolSelection = (value) => {
  if (value) {
      setTool(value);
    }
  };

  const handelLogout = async () => {
    try {
      await LogOut();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-16 w-full p-4">
      <div className="flex justify-between">
        <div className=" ">
          <Button className="rounded-lg w-10">
            <Menu size={16} />
          </Button>
        </div>
        <div className="shadow-md shadow-[#414753] rounded-xl p-1">
          <ToggleGroup
            type="single"
            defaultValue="pen"
            onValueChange={handletoolSelection}
          >
            <ToggleGroupItem value="pen">
              <Pen />
            </ToggleGroupItem>
            <ToggleGroupItem value="eraser">
              <EraserIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="square">
              <Square />
            </ToggleGroupItem>
            <ToggleGroupItem value="circle">
              <Circle />
            </ToggleGroupItem>
            <ToggleGroupItem value="diamond">
              <Diamond />
            </ToggleGroupItem>
            <ToggleGroupItem value="arrow">
              <MoveRight />
            </ToggleGroupItem>
            <ToggleGroupItem value="line">
              <Minus />
            </ToggleGroupItem>
            <ToggleGroupItem value="text">
              <ALargeSmall />
            </ToggleGroupItem>
            <ToggleGroupItem value="cursor">
              <MousePointer />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div>
          <Button className="rounded-lg">
            <Share2 size={20}  />
          </Button>
           <Button onClick={handelLogout}>
              <LogOutIcon/>
           </Button>
        </div>
      </div>
    </div>
  );
}


