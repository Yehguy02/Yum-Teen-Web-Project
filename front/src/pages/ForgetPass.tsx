import { Card,CardContent,CardHeader,CardTitle,CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router";
function Forgot(){
    const navigate = useNavigate();
    return(
        <>
        <div className='flex justify-center items-center min-h-screen bg-[#faf0d2] bg-gradient-to-r from-[#faf0d2] via-[#f2ce9b] to-[#f79000]'>
            <Card className="w-full max-w-sm border-2">
        <CardHeader>
            <CardTitle className="text-2xl">Forget your password</CardTitle>
            <Label className="text-sm mb-3 text-gray-500">Please enter the email address you'd like your password reset information sent to</Label>
        </CardHeader>
        <CardContent>
            <Label className="mb-2"htmlFor="Email">Enter email address</Label>
            <Input 
                id="email"
                type="email"
                placeholder="m@example.com"
                required
            />
        </CardContent>
        <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
                Request reset link 
            </Button>
            <hr />
            <Button variant="outline" className="w-full" onClick={()=>navigate('/login')}>
                Back to Login
            </Button>
      </CardFooter>
        </Card>
        </div>
        </>
    );
}

export default Forgot

