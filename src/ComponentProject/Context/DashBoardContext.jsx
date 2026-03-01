import { createContext, useContext,useState} from "react";

export const useWhiteBoard = () => {
  return useContext(WhiteboardContext);
};

const WhiteboardContext = createContext();



const WhiteBoardContextProvider = ({ children }) => {

  const [Tool, setTool] = useState("");
  const [Elements, setElements] = useState([]);
  const [Colour, setColour] = useState("");

  const value = {
  Tool,
  setTool,
  Elements,
  setElements,
  Colour,
  setColour,
};
  return (
    <>
      <WhiteboardContext.Provider value={value}>
        {children}
      </WhiteboardContext.Provider>
    </>
  );
};

export default WhiteBoardContextProvider;
