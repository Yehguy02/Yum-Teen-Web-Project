import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router";
function Signup(){
    const navigate = useNavigate();
    return (
        <>
        <div className='flex justify-center items-center min-h-screen bg-[#faf0d2] bg-gradient-to-r from-[#faf0d2] via-[#f2ce9b] to-[#f79000]'>
            <Card className="w-full max-w-sm border-2">
            <CardHeader>
                <CardTitle className="text-center text-2xl">Create an account</CardTitle>
                <Label className="text-center block">
                    Sign up to continue
                </Label>
            </CardHeader>
            <CardContent>
                <form>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                    <Label htmlFor="Name">Name</Label>
                    <Input
                        id="name"
                        type="name"
                        placeholder="Diss Nut"
                        required
                    />
                    <Label htmlFor="email">Email</Label>
                    <Input
                        className="bg-white text-black border-gray-300"
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                    />
                    <Label htmlFor="password">Password</Label>
                    <Input
                        className="bg-white text-black border-gray-300"
                        id="password"
                        type="password"
                        placeholder="12345678"
                        required
                    />
                    <Label htmlFor="confirm_password">Confirm password</Label>
                    <Input
                        className="bg-white text-black border-gray-300"
                        id="confirm_password"
                        type="password"
                        placeholder="12345678"
                        required
                    />
                    <Label htmlFor="phone_number">Phone number</Label>
                    <Input
                        className="bg-white text-black border-gray-300" 
                        id="phone_number"
                        type="phone_number"
                        placeholder="0987654321"
                        required
                    />
                        <div className="flex space-x-2 mt-2 ">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">Remember me</Label>
                        </div>
                    </div>
                </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button onClick={()=> navigate('/login')} type="submit" className="w-full">
                    Sign up
                </Button>
                <Button variant="outline" className="w-full mt-1" onClick={()=>navigate('/login')}>
                    Back to Login
                </Button>   
            </CardFooter>
            </Card>
        </div>
        </>
    );
}

export default Signup