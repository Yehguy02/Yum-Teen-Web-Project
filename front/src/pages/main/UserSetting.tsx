import NavBar from "@/components/custom/global/NavBar";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import NavRow from "@/components/custom/global/RowNav";
function UserSetting(){
    return(
        <> 
            <NavBar num={4}/>
            <div className="bg-gray-200 min-h-screen pt-15 sm:pl-110">
                <Card className="px-5 sm:px-10 w-[380px] sm:w-[600px] justify-center">
                    <Label className="sm:text-3xl text-xl">Settings</Label>
                    <div className="h-[500px] sm:h-[350px]">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            className="w-[300px] sm:w-[500px] my-3"
                            id="name"
                            type="name"
                            placeholder="Diss Nut"
                            required
                        />
                        <Label htmlFor="email">Email</Label>
                        <Input
                            className="w-[300px] sm:w-[500px] my-3"
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                        <Label htmlFor="phone_number">Phone number</Label>
                        <Input
                            className="w-[300px] sm:w-[500px] my-3"
                            id="phone_number"
                            type="phone_number"
                            placeholder="0987654321"
                            required
                        />
                        <Label htmlFor="payment">Payment</Label>
                        <Input
                            className="w-[300px] sm:w-[500px] my-3"
                            id="payment"
                            type="payment"
                            placeholder="yessir"
                            required
                        />
                        <div className="flex gap-3 justify-first">
                            <Button className="mt-4 bg-white-100 text-red-700 border-red-700 border-2 hover:bg-red-700 hover:text-white sm:w-[250px] transition duration-300">Discard Changes</Button>
                            <Button className="mt-4 bg-[#ffbc5c] text-white border-[#ffbc5c] border-2 hover:bg-[#ffbc5c]/80 hover:text-white sm:w-[250px] transition duration-300">Save Changes</Button>
                        </div>
                    </div>
                </Card>
            </div>
            <NavRow num={4}/>
        </>
    )
}

export default UserSetting;