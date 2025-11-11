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
import { EyeIcon,EyeClosed } from "lucide-react"
function App() {
  const navigate = useNavigate();
  const [showPassword,setShowPassword] = useState(false);
  return (
    <>
    <div className='flex justify-center items-center min-h-screen bg-[#faf0d2] bg-gradient-to-r from-[#faf0d2] via-[#f2ce9b] to-[#f79000]'>
        <Card className="w-full max-w-sm border-2">
      <CardHeader>
          <CardTitle className="text-center text-2xl">Welcome Back!</CardTitle>
          <div className="flex space-x-1 space-x-3 justify-end mb-3">
              <Switch id="store_acc" />
              <Label htmlFor="store_acc">Store Account</Label>
          </div>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="relative ">
                <Label className="mb-2"htmlFor="password">Password</Label>
                <Input id="password" type={showPassword ? "text" : "password"} required />
                <Button type="button" variant="ghost" size="icon" className="absolute right-1" onClick={()=> setShowPassword(!showPassword)} >{showPassword ? (<EyeIcon className="h-4 w-4"/>):(<EyeClosed className="h-4 w-4"/>)}</Button>
              </div>
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
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" onClick={() => navigate('/')}>
          Login
        </Button>
        <hr />
          <div className="flex space-x-1 text-sm mt-3">
              <a className="text-gray-400">Don't have an account?</a>
            <a
                href="/signup"
                className=" underline-offset-4 hover:underline text-blue-600">
                Sign up?
            </a>
          </div>
      </CardFooter>
    </Card>
    </div>
      
    </>
  )
}

export default App