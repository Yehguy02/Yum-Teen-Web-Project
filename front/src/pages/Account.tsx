import { Card,CardContent,CardHeader,CardTitle,CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router";
import { useState } from "react";
import { User, Settings, History, LogOut } from "lucide-react"
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"
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
                    {activeDiv === "history" && <><Label className="text-xl">History</Label></>}
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
                                <User></User>Account
                            </Label>
                            <Label onClick={()=>setActiveDiv("settings")} className={`p-4 
                                ${
                                    activeDiv === "settings"
                                    ? "bg-gray-200 hover:bg-gray-200/80"
                                    : "hover:bg-gray-200"
                                }`}>
                                <Settings></Settings>Settings
                            </Label>
                            <Label onClick={()=>setActiveDiv("history")} className={`p-4 
                                ${
                                    activeDiv === "history"
                                    ? "bg-gray-200 hover:bg-gray-200/80"
                                    : "hover:bg-gray-200"
                                }`}>
                                <History></History>History
                            </Label>
                            <Label onClick={()=>setActiveDiv("logout")} className={`p-4 
                                ${
                                    activeDiv === "logout"
                                    ? "bg-gray-200 hover:bg-gray-200/80"
                                    : "hover:bg-gray-200"
                                }`}>
                                <LogOut></LogOut>Logout
                            </Label>
                        </div>
                        <div className="grid gap-2">
                            {activeDiv === "account" && <>
                            <div className="h-[500px]">
                                    <Label htmlFor="name">Name</Label>
                                <Input
                                    className="w-[500px] my-3"
                                    id="name"
                                    type="name"
                                    placeholder="Diss Nut"
                                    required
                                />
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    className="w-[500px] my-3"
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                                <Label htmlFor="phone_number">Phone number</Label>
                                <Input
                                    className="w-[500px] my-3"
                                    id="phone_number"
                                    type="phone_number"
                                    placeholder="0987654321"
                                    required
                                />
                                <Label htmlFor="payment">Payment</Label>
                                <Input
                                    className="w-[500px] my-3"
                                    id="payment"
                                    type="payment"
                                    placeholder="yessir"
                                    required
                                />
                                <div className="flex gap-3 justify-center">
                                    <Button className="mt-4 bg-white-100 text-red-700 border-red-700 border-2 hover:bg-red-700 hover:text-white w-1/2 transition duration-300">Discard Changes</Button>
                                    <Button className="mt-4 bg-[#ffbc5c] text-white border-[#ffbc5c] border-2 hover:bg-[#ffbc5c]/80 hover:text-white w-1/2 transition duration-300">Save Changes</Button>
                                </div>
                            </div>
                            </>}
                            {activeDiv === "settings" && <>
                            <div className="h-[500px]">

                            </div>
                            </>}
                            {activeDiv === "history" && <>
                            <Label>Order List</Label>
                            <div className="border-2 overflow-y-auto border-gray-300 rounded-xl p-3 h-[475px]">
                                <Card className="w-[500px]">
                                    <div className="flex justify-between">
                                        <Label className="mx-3">Order ID: 12345 Order Date: XX/XX/XXXX </Label>
                                        <Button className=" mr-3 bg-white border-2 w-[60px] text-black hover:text-white hover:bg-[#ffbc5c] transition duration-300">Check</Button>
                                    </div>
                                </Card>
                                <Card className="w-[500px] mt-5">
                                    <div className="flex justify-between">
                                        <Label className="mx-3">Order ID: 12345 Order Date: XX/XX/XXXX </Label>
                                        <Button className=" mr-3 bg-white border-2 w-[60px] text-black hover:text-white hover:bg-[#ffbc5c] transition duration-300">Check</Button>
                                    </div>
                                </Card>
                                <Card className="w-[500px] mt-5">
                                    <div className="flex justify-between">
                                        <Label className="mx-3">Order ID: 12345 Order Date: XX/XX/XXXX </Label>
                                        <Button className=" mr-3 bg-white border-2 w-[60px] text-black hover:text-white hover:bg-[#ffbc5c] transition duration-300">Check</Button>
                                    </div>
                                </Card>
                                <Card className="w-[500px] mt-5">
                                    <div className="flex justify-between">
                                        <Label className="mx-3">Order ID: 12345 Order Date: XX/XX/XXXX </Label>
                                        <Button className=" mr-3 bg-white border-2 w-[60px] text-black hover:text-white hover:bg-[#ffbc5c] transition duration-300">Check</Button>
                                    </div>
                                </Card>
                                <Card className="w-[500px] mt-5">
                                    <div className="flex justify-between">
                                        <Label className="mx-3">Order ID: 12345 Order Date: XX/XX/XXXX </Label>
                                        <Button className=" mr-3 bg-white border-2 w-[60px] text-black hover:text-white hover:bg-[#ffbc5c] transition duration-300">Check</Button>
                                    </div>
                                </Card>            
                            </div>
                            </>}
                            {activeDiv === "logout" && <>
                            <div className="h-[500px]">
                                <Label className="w-[600px] mb-3">Are you sure you want to log out?</Label>
                                <Label className="mb-3">Logging out will end your current session. You’ll need to sign in again to access your account.</Label>
                                <br></br>
                                <div className="flex gap-3 justify-center">
                                <Button className="mt-4 bg-white-100 text-red-700 border-red-700 border-2 hover:bg-red-700 hover:text-white w-1/2 transition duration-300">Cancel</Button>
                                <Button className="mt-4 bg-red-700 text-white border-red-700 hover:bg-red-700/60 hover:text-white w-1/2 transition duration-300">Log Out</Button>
                            </div>
                            </div></>}
                            
                        </div>
                    </div>      
                </CardContent>
            </Card>
        </div>
        </>
    );
}

export default Account