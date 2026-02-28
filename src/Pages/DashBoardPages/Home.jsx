import { useAuth } from "@/ComponentProject/AuthContext/Context";
import { Button } from "@/components/ui/button";
import Toolbar from "./Toolbar";

function HomePage() {
  const { LogOut } = useAuth();

  const handelLogout = async () => {
    try {
      await LogOut();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* <Button onClick={handelLogout}>Log Out</Button> */}
      <div className="h-screen w-screen">
        <Toolbar/>
      </div>
    </>
  );
}

export default HomePage;
