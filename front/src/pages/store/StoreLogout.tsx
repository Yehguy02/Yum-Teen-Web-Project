import NavBar from "@/components/custom/global/NavBar_Store";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Logout from "@/assets/other/logout.png";
import NavRow from "@/components/custom/global/RowNav_Store";
function UserLogout(){
    return(
        <> 
            <NavBar num={2}/>
            <div className="bg-gray-200 min-h-screen pt-22 pl-5 pb-5 sm:pt-20 sm:px-3 sm:pl-120 sm:pr-120">
                <Card className="sm:mx-30 h-3/4 shadow-lg w-[300px]">
                    <Label className="text-3xl justify-center">Logout</Label>
                    <img src={Logout} alt="Logout" className="mx-auto w-50" />
                    <div>
                        <Label className="text-2xl justify-center mb-1">Oh no You're Leaving...</Label>
                        <Label className="text-2xl justify-center">Are you sure??</Label>
                    </div>
                    <Button className="mx-13 rounded-lg bg-blue-500 text-xl p-6 hover:text-blue-500 hover:bg-white border-blue-500 border-2 w-[200px]">Naah, Just Kidding</Button>
                    <Button className="mx-13 rounded-lg bg-white text-xl text-blue-500 p-6 hover:text-white hover:bg-blue-500 border-blue-500 border-2 w-[200px]">Yea, Log me off</Button>
                </Card>
            </div>
            <NavRow num={2}/>
        </>
    )
}

export default UserLogout;