import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { User,Lock } from 'lucide-react'
function App() {
  
  return (
    <>
    <div className='flex justify-center items-center mt-30'>
        <Card className="w-full max-w-sm border-2">
      <CardHeader>
        <CardTitle className="text-2xl">Welcome Back!</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <User className="text-gray-300"size={18} />
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="p-4 "
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Lock className="text-gray-300" size={18}/>
              <Input id="password" type="password" required />
            </div>
          </div>
          <div className="mt-2.5">
            <div className="flex space-x-2 ">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Remember me</Label>
            <a
                  href="/forgot"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-blue-600"
                >
                  Forgot your password?
                </a>
            </div>
        </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <hr />
        <div className="flex gap-3">
            <Button variant="outline" className="w-40 inline-block">
                Login with Google
            </Button>
            <Button variant="outline" className="inline-block w-40">
                Login with Gmail
            </Button>
        </div>
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