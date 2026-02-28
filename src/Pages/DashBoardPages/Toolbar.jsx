import { Pen, EraserIcon, Menu, Share2,Square,Diamond,Circle,MoveRight,Minus,ALargeSmall,MousePointer } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

export default function Toolbar({Tool,setTool}) {

  const handletoolSelection =(value)=>{
    if(value){
      setTool(value)
    }
  } 

  return (
    <div className="h-16 w-full p-4">
      <div className="flex justify-between">
        <div className=" bg-blue-400 hover:bg-blue-500  active:border-2 border-blue-800 p-2 rounded-lg w-9 h-9 ">
          <Menu size={16} className="w-full" />
        </div>
        <div className="border-2 border-gray-400 rounded-xl p-1">
          <ToggleGroup type="single" spacing={3} defaultValue="pen" onValueChange={handletoolSelection}>
            <ToggleGroupItem value="pen">
              <Pen />
            </ToggleGroupItem>
            <ToggleGroupItem value="eraser">
              <EraserIcon  />
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
        <div className="bg-blue-600 hover:bg-blue-700   p-2 rounded-lg w-9 h-9 ">
          <Share2 size={20} color="white"/>
        </div>
      </div>
    </div>
  );
}
