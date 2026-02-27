import { useNavigate } from "react-router-dom";


function NotFound() {

    const nav = useNavigate();

    return (
    <>
    <div className=" h-screen w-screen flex items-center justify-center">
        <h1 className="text-2xl"> Page does not Exist</h1>
            
    </div>
    </>);
    
}

export default NotFound;