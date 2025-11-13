import { Button } from "@/components/ui/button"
import {
  Card,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Link, useLocation } from "react-router"
import sucessIcon from "@/assets/finish/check.png"
import type { Order } from "@/index"

export default function FinishOrder(){
    // fetch this order detail
    const location = useLocation();
    const {orders, discount, sum} = location.state as {orders : Order[], discount : number, sum : number};


    return(
        <div className="bg-gray-100 px-50 flex flex-col gap-10">
            <div className="absolute left-15 top-5">
                <Link to="/">
                    <p>&lt; Back</p>
                </Link>
            </div>
            <div className="text-center mt-20">
                <div>
                    <img className="w-50 h-50 mx-auto" src={sucessIcon}></img>
                </div>
                <h1 className="text-3xl font-bold mt-15">Thank you</h1>
                <h1 className="text-3xl font-bold mb-5">Your Order has been recieved!</h1>
                <p className="text-md text-gray-500">Please wait until your queue is up</p>
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
                        <p className="mb-2">฿{sum}</p>
                        <p className="mb-2">฿{discount}</p>
                        <p className="mb-2">฿{sum-discount}</p>
                    </div>
                </div>
            </Card>
            <Card className="p-5 mb-20">
                <Label className="text-xl font-bold text-2xl">Order list</Label>
                <hr className=""></hr>
                <ul>
                    {orders ? ( orders.map((order) => {
                        return(
                            <li>
                                <div className="flex flex-row justify-between mb-3">
                                    <div>
                                        <p className="text-lg font-medium">{order.name}</p>
                                        {order.note ? 
                                        (<p className="text-gray-400">{order.note}</p>) 
                                        : (<></>)}
                                    </div>
                                    <div>
                                        {order.discounted_price ? 
                                        (<p>฿{order.discounted_price * order.quanity}</p>) 
                                        : (<p>฿{order.base_price * order.quanity}</p>)}
                                    </div>
                                </div>
                            </li>
                            )
                    })
                        ) : (<></>)}
                </ul>
            </Card>
        </div>
    )
}