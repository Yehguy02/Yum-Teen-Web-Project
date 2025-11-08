import { Card,CardContent,CardHeader,CardTitle,CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router";
import { useState } from "react";
function Account(){
    const navigate = useNavigate();
    const [activeDiv, setActiveDiv] = useState("account");
    
    return(
        <>
        <div className='flex justify-center items-center min-h-screen bg-[#faf0d2] bg-gradient-to-r from-[#faf0d2] via-[#f2ce9b] to-[#f79000]'>
            <Card className="w-full max-w-6xl max-h-5xl border-2">
                <CardHeader className="flex items-center space-x-25">
                    <CardTitle className="text-2xl">Account Settings</CardTitle>
                    {activeDiv === "account" && <><Label className="text-xl">Edit your Profile</Label></>}
                    {activeDiv === "settings" && <><Label className="text-xl">Settings</Label></>}
                    {activeDiv === "logout" && <><Label className="text-xl">Logout</Label></>}
                    
                </CardHeader>
                <CardContent>
                    <div className="flex gap-6">
                        <div className="w-1/4">
                            <Label onClick={()=>setActiveDiv("account")} className={`p-4 
                                ${
                                    activeDiv === "account"
                                    ? "bg-gray-200 hover:bg-gray-200/80"
                                    : "hover:bg-gray-200"
                                }`}>
                                Accounts
                            </Label>
                            <Label onClick={()=>setActiveDiv("settings")} className={`p-4 
                                ${
                                    activeDiv === "settings"
                                    ? "bg-gray-200 hover:bg-gray-200/80"
                                    : "hover:bg-gray-200"
                                }`}>
                                Settings
                            </Label>
                            <Label onClick={()=>setActiveDiv("logout")} className={`p-4 
                                ${
                                    activeDiv === "logout"
                                    ? "bg-gray-200 hover:bg-gray-200/80"
                                    : "hover:bg-gray-200"
                                }`}>
                                Logout
                            </Label>
                        </div>
                        <div className="grid gap-2">
                            {activeDiv === "account" && <>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                className="w-[400px]"
                                id="name"
                                type="name"
                                placeholder="Diss Nut"
                                required
                            />
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                            <Label htmlFor="phone_number">Phone number</Label>
                            <Input
                                className="bg-white text-black border-gray-700" 
                                id="phone_number"
                                type="phone_number"
                                placeholder="0987654321"
                                required
                            />
                            <div className="flex gap-3 justify-center">
                                <Button className="mt-4 bg-white-100 text-red-700 border-red-700 border-2 hover:bg-red-700 hover:text-white w-1/2">Discard Changes</Button>
                                <Button className="mt-4 bg-[#ffbc5c] text-white border-[#ffbc5c] border-2 hover:bg-[#ffbc5c]/80 hover:text-white w-1/2">Save Changes</Button>
                            </div></>}
                            {activeDiv === "settings" && <div>🔥 This is the first new div</div>}
                            {activeDiv === "logout" && <div>⚡ This is the second new div</div>}
                            
                        </div>
                    </div>      
                </CardContent>
            </Card>
        </div>
        </>
    );
}

export default Account