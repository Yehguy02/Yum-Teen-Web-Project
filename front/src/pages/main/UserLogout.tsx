import NavBar from "@/components/custom/global/NavBar";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { authAPI } from "@/services/api";
import Logout from "@/assets/other/logout.png"

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
            <NavBar num={4}/>
            <div className="bg-gray-200 min-h-screen pt-20 px-3 pl-120 pr-120">
                <Card className="h-[550px] shadow-lg p-10">
                    <Label className="text-3xl justify-center block text-center mb-5">Logout</Label>
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
        </>
    )
}

export default UserLogout;