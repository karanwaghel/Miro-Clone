import { useAuth } from '@/ComponentProject/AuthContext/Auth';
import { Button } from '@/components/ui/button';
import { AwardIcon } from 'lucide-react';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



function HomePage() {

    const {LogOut} = useAuth();
    const nav = useNavigate();

    const handelLogout = async ()=>{
        try{
            await LogOut();
        }catch(err){
            console.error(err)
        }
    };

    return ( <>
    <Link to={'/login'}>Home</Link>
    <Button onClick={handelLogout}>Log Out</Button>
    </> );
}

export default HomePage;