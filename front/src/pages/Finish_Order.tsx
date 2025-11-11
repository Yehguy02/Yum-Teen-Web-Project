import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
export default function FinishOrder(){
    return(
        <div className="bg-gray-100 px-50 flex flex-col gap-10">
            <div className="absolute left-20 top-5">
                <p>&lt; Back</p>
            </div>
            <div className="text-center">
                <div className="my-5">
                    <img className="w-130 h-100 mx-auto" src="./src/assets/finish/sucess_microsaction.gif"></img>
                </div>
                <h1 className="text-3xl font-bold">Thank you</h1>
                <h1 className="text-3xl font-bold my-5">Your Order has been received!</h1>
                <p className="text-md text-gray-500">Please wait until your queue is up.....</p>
            </div>
            <Card className="bg-white p-5">
                <h1 className="font-bold text-2xl mb-10">Order detail</h1>
                <div className="flex flex-row justify-between">
                    <div>
                        <p className="mb-2">Order number:</p>
                        <p className="mb-2">Date:</p>
                        <p className="mb-2">Payment method:</p>
                    </div>
                    <div className="text-right">
                        <p className="mb-2">086</p>
                        <p className="mb-2">23 May 2025</p>
                        <p className="mb-2">Promptpay</p>
                    </div>
                </div>
                <hr className="my-5"></hr>
                <div className="flex flex-row gap-25  justify-end">
                    <div className="">
                        <p className="mb-2">Subtotal:</p>
                        <p className="mb-2">Discount:</p>
                        <p className="mb-2">Total:</p>
                    </div>
                    <div className="">
                        <p className="mb-2">฿100.00</p>
                        <p className="mb-2">฿20.00</p>
                        <p className="mb-2">฿80.00</p>
                    </div>
                </div>
            </Card>
            <Card className="p-5 mb-20">
                <Label className="text-xl font-bold text-2xl">Order list</Label>
                <hr className=""></hr>
                <ul>
                    <li>
                        <div className="flex flex-row justify-between mb-3">
                            <div>
                                <p className="text-lg font-medium">1x Pizza</p>
                                <p className="text-gray-400">No spicy</p>
                            </div>
                            <div>
                                <p>฿100</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row justify-between mb-3">
                            <div>
                                <p className="text-lg font-medium">1x Pizza</p>
                                <p className="text-gray-400">Large</p>
                                <p className="text-gray-400">Pepperroni</p>
                            </div>
                            <div>
                                <p>฿100</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row justify-between mb-3">
                            <div>
                                <p className="text-lg font-medium">1x Pizza</p>
                                <p className="text-gray-400">No spicy</p>
                            </div>
                            <div>
                                <p>฿100</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </Card>
        </div>
    )
}