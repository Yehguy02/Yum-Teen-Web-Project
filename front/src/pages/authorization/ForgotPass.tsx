import { Card,CardContent,CardHeader,CardTitle,CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";

function Forgot(){
    return(
        <>
        <div className='flex justify-center items-center mt-30'>
            <Card className="w-full max-w-sm border-2">
        <CardHeader>
            <CardTitle className="text-2xl">Forget Password</CardTitle>
        </CardHeader>
        <CardContent>
            <Label htmlFor="Email"></Label>
            <Input 
                id="email"
                type="email"
                placeholder="m@example.com"
                required
            />
        </CardContent>
        <CardFooter>
            <Button></Button>
        </CardFooter>
        </Card>
        </div>
        </>
    );
}

export default Forgot