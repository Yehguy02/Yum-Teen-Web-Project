import NavBar from "@/components/custom/global/NavBar.tsx";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { authAPI } from "@/services/api";
import Logout from "@/assets/other/logout.png"
import NavRow from "@/components/custom/global/RowNav.tsx";

function UserLogout(){
    const navigate = useNavigate();

    const handleLogout = () => {
        authAPI.logout();
        navigate('/login');
    }

    const handleCancel = () => {
        navigate('/');
    }

    return(
        <> 
            <NavBar num={5}/>
            <div className="bg-gray-200 min-h-screen pt-22 pl-5 pb-5 sm:pt-20 sm:px-3 sm:pl-120 sm:pr-120">
                <Card className="sm:mx-30 h-3/4 shadow-lg w-[300px]">
                    <Label className="text-3xl justify-center">Logout</Label>
                    <img src={Logout} alt="Logout" className="mx-auto w-50" />
                    <div className="text-center my-5">
                        <Label className="text-2xl justify-center block mb-2">Oh no, You're Leaving...</Label>
                        <Label className="text-2xl justify-center block">Are you sure??</Label>
                    </div>
                    <div className="flex gap-4 justify-center mt-10">
                        <Button 
                            onClick={handleCancel}
                            className="rounded-lg bg-blue-500 text-xl px-8 py-6 hover:text-blue-500 hover:bg-white border-blue-500 border-2"
                        >
                            Naah, Just Kidding
                        </Button>
                        <Button 
                            onClick={handleLogout}
                            className="rounded-lg bg-white text-xl text-blue-500 px-8 py-6 hover:text-white hover:bg-blue-500 border-blue-500 border-2"
                        >
                            Yea, Log me off
                        </Button>
                    </div>
                    
                </Card>
            </div>
            <NavRow num={5}/>
        </>
    )
}

export default UserLogout;