import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useNavigate } from "react-router"
import { useState } from "react"
import { toast } from "sonner"
import { EyeIcon,EyeClosed } from "lucide-react"

function App() {
  const [showPassword,setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isStore,setStore] = useState(false);


  const handleLogin = async (e : React.FormEvent) => {
    e.preventDefault();

    // send form to back end
    const formData = {
      email : email,
      password : password,
    }

    const url = "http://localhost:8000/api/login"
    const res = await fetch(url, {
      method : 'POST',
      body: JSON.stringify(formData),
      headers: {"Content-Type": "application/json"}
    });
    
    const data = await res.json();

    if (res.ok){
      const token = data.token;
      localStorage.setItem('token' , token);
      navigate('/');
    }else{
      toast.error(data.detail);
    }

  }
  
  return (
    <>
    <div className='flex justify-center items-center min-h-screen bg-[#faf0d2] bg-gradient-to-r from-[#faf0d2] via-[#f2ce9b] to-[#f79000]'>
        <Card className="w-full max-w-sm border-2">
      <CardHeader>
          <CardTitle className="text-center text-2xl mb-3">
            Welcome Back User!
          </CardTitle>
      </CardHeader>
      <form onSubmit={handleLogin}>
      <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2 mb-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-4 "
                />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="relative ">
                <Label className="mb-2"htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required 
                  onChange={(e) => setPassword(e.target.value)}  />
                <Button type="button" variant="ghost" size="icon" className="absolute right-1" onClick={()=> setShowPassword(!showPassword)} >{showPassword ? (<EyeIcon className="h-4 w-4"/>):(<EyeClosed className="h-4 w-4"/>)}</Button>
              </div>
            </div>
          <div className="mt-2.5">
            <div className="flex space-x-2 ">
            <Checkbox className="mt-1" id="terms" />
            <Label htmlFor="terms">Remember me</Label>
            <a
                  href="/forget"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-blue-600"
                >
                  Forget your password?
                </a>
            </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full mt-5">
          Login
        </Button>
        <hr />
        <div className="flex space-x-1 text-sm mt-3">
            <a className="text-gray-400">Don't have an account?</a>
        <a
            href="/user/signup"
            className=" underline-offset-4 hover:underline text-blue-600">
            Sign up?
        </a>
        </div>
      </CardFooter>
      </form>
    </Card>
    </div>
      
    </>
  )
}

export default App