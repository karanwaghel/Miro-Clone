

import Toolbar from "./Toolbar";
import { useWhiteBoard } from "@/ComponentProject/Context/DashBoardContext";

function HomePage() {
  const {Tool,setTool,Elements,setElements} = useWhiteBoard();


  

  return (
    <>
      <div className="h-screen w-screen">
        <Toolbar/>
      </div>
    </>
  );
}

export default HomePage;
