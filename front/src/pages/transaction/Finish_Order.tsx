import { Link } from "react-router"
import sucessIcon from "@/assets/finish/check.png"

export default function FinishOrder(){
    // fetch this order detail
    return(
        <div className="bg-gray-100 px-50 flex flex-col gap-10">
            <div className="absolute left-20 top-5">
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
            <div className="bg-white p-5">
                <h1 className="font-bold text-2xl mb-10">Order detail</h1>
                <div className="flex flex-row justify-between">
                    <div>
                        <p>Order number:</p>
                        <p>Date:</p>
                        <p>Payment method:</p>
                    </div>
                    <div className="text-right">
                        <p>086</p>
                        <p>23 May 2025</p>
                        <p>Promptpay</p>
                    </div>
                </div>
                <hr className="my-5"></hr>
                <div className="flex flex-row gap-25  justify-end">
                    <div className="">
                        <p>Subtotal:</p>
                        <p>Discount:</p>
                        <p>Total:</p>
                    </div>
                    <div className="">
                        <p>฿100.00</p>
                        <p>฿20.00</p>
                        <p>฿80.00</p>
                    </div>
                </div>
            </div>
            <div className="px-10">
                <h1 className="text-xl mb-5">Order list</h1>
                <ul>
                    <li>
                        <div className="flex flex-row justify-between mb-2">
                            <div>
                                <p className="text-lg font-medium">1x Pizza</p>
                                <p>No spicy</p>
                            </div>
                            <div>
                                <p>฿100</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row justify-between mb-2">
                            <div>
                                <p className="text-lg font-medium">1x Pizza</p>
                                <p>No spicy</p>
                            </div>
                            <div>
                                <p>฿100</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row justify-between mb-2">
                            <div>
                                <p className="text-lg font-medium">1x Pizza</p>
                                <p>No spicy</p>
                            </div>
                            <div>
                                <p>฿100</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}