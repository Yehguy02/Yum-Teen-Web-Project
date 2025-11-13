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
import { useState } from "react";
import { toast } from "sonner";
import { authAPI } from "@/services/api";

function Signup(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email : "",
        password : "",
        confirmpassword : "",
    })
    const [isLoading, setIsLoading] = useState(false);

    const handleSignup = async (e : React.FormEvent) => {
        e.preventDefault();

        // Validate form
        if (!formData.email || !formData.password || !formData.confirmpassword) {
            toast.error("Please fill in all fields");
            return;
        }

        if (formData.confirmpassword !== formData.password) {
            toast.error("Passwords do not match!");
            return;
        }

        if (formData.password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        setIsLoading(true);

        try {
            const data = await authAPI.signup(formData.email, formData.password);
            
            if (data.access_token) {
                localStorage.setItem('token', data.access_token);
                toast.success("Signup successful!");
                navigate('/');
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Signup failed";
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
        <div className='flex justify-center items-center min-h-screen bg-[#faf0d2] bg-gradient-to-r from-[#faf0d2] via-[#f2ce9b] to-[#f79000]'>
            <Card className="w-full max-w-sm border-2">
            <CardHeader>
                <CardTitle className="text-center text-2xl">Create an account</CardTitle>
                <Label className="text-center block">
                    Sign up to Continue
                </Label>
            </CardHeader>
            <form onSubmit={handleSignup}>
            <CardContent>
                <div className="flex flex-col gap-6 mb-5">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            className="bg-white text-black border-gray-300"
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            value={formData.email}
                            onChange={(e) => {
                                setFormData(data => ({...data, email: e.target.value}))
                            }}
                        />
                        <Label htmlFor="password">Password</Label>
                        <Input
                            className="bg-white text-black border-gray-300"
                            id="password"
                            type="password"
                            placeholder="At least 6 characters"
                            required
                            value={formData.password}
                            onChange={(e) => {
                                setFormData(data => ({...data, password: e.target.value}))
                            }}
                        />
                        <Label htmlFor="confirm_password">Confirm password</Label>
                        <Input
                            className="bg-white text-black border-gray-300"
                            id="confirm_password"
                            type="password"
                            placeholder="Confirm your password"
                            required
                            value={formData.confirmpassword}
                            onChange={(e) => {
                                setFormData(data => ({...data, confirmpassword: e.target.value}))
                            }}
                        />
                        <div className="flex space-x-2 mt-2 ">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">I agree to the terms and conditions</Label>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Sign up"}
                </Button>
                <Button variant="outline" className="w-full mt-1" onClick={()=>navigate('/login')} disabled={isLoading}>
                    Back to Login
                </Button>   
            </CardFooter>
            </form>
            </Card>
        </div>
        </>
    );
}

export default Signup