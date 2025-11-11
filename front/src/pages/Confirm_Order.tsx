import ConfirmOrder_Orders from "@/components/custom/confirm_order/confirmOrder-orders"
import ConfirmOrder_PaymentMethod from "@/components/custom/confirm_order/confirmOrder-paymentMethod"
import ConfirmOrder_Promo from "@/components/custom/confirm_order/confirmOrder-Promotion"
import type { Order } from "./Home";

import { useState } from "react";
import { Link } from "react-router";
export default function ComfirmOrder(){

    type payment_method = "Cash" | "PromptPay" | "YumWallet";
    const order1 : Order = { id : 1, name : "Curry Rice", quanity : 1, base_price : 50, note : "no spicy"};
    const order2 : Order = { id : 2, name : "Pizza", quanity : 2, base_price : 100};
    const [orders, setOrder] = useState([order1, order2]);
    let sum = 0;
    const [discount, setDiscount] = useState(10);
    for(const order of orders){
        sum += order.base_price * order.quanity;
    }
    return(
        <>
        <div className="bg-gray-100 p-5 px-10 min-h-screen">
            <div>
                <h1>&lt; Back</h1>
            </div>
            <h1 className="text-2xl font-bold">Confirm Order</h1>
            <div className="flex flex-row">
                <div className="w-3/5 p-5 h-100">
                    <ConfirmOrder_Orders orders={orders}/>
                </div>
                <div className="w-2/5 p-5 ">
                    <ConfirmOrder_PaymentMethod/>
                    <ConfirmOrder_Promo/>
                    <div className="flex flex-col  gap-5 bg-white p-5">
                        <div className="border p-5 rounded-2xl">
                            <h1 className="font-bold">Order Summary</h1>
                            <div className="flex flex-row justify-between">
                                <p>Total</p>
                                <p>฿{sum}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p>Discount</p>
                                <p className="text-green-400">฿{discount}</p>
                            </div>
                            <div className="flex flex-row justify-between mt-5">
                                <p>Final</p>
                                <p>฿{sum-discount}</p>
                            </div>
                        </div>
                        <div className="text-center w-full">
                            <Link to="/user/finish">
                                <button className="bg-green-500 text-white px-5 py-3 font-bold rounded w-8/10">Confirm Payment</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}