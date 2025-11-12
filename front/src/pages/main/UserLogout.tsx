import NavBar from "@/components/custom/global/NavBar";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Logout from "@/assets/other/logout.png"
function UserLogout(){
    return(
        <> 
            <NavBar num={5}/>
            <div className="bg-gray-200 min-h-screen pt-20 px-3 pl-120 pr-120">
                <Card className="h-[550px] shadow-lg">
                    <Label className="text-3xl justify-center">Logout</Label>
                    <img src={Logout} alt="Logout" className="mx-auto w-50" />
                    <div>
                        <Label className="text-2xl justify-center mb-1">Oh no You're Leaving...</Label>
                        <Label className="text-2xl justify-center">Are you sure??</Label>
                    </div>
                    <Button className="mx-40 rounded-lg bg-blue-500 text-xl p-6 hover:text-blue-500 hover:bg-white border-blue-500 border-2">Naah, Just Kidding</Button>
                    <Button className="mx-40 rounded-lg bg-white text-xl text-blue-500 p-6 hover:text-white hover:bg-blue-500 border-blue-500 border-2">Yea, Log me off</Button>
                </Card>
            </div>
        </>
    )
}

export default UserLogout;