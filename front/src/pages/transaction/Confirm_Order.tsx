import ConfirmOrder_Orders from "@/components/custom/confirm_order/confirmOrder-orders"
import ConfirmOrder_PaymentMethod from "@/components/custom/confirm_order/confirmOrder-paymentMethod"
import ConfirmOrder_Promo from "@/components/custom/confirm_order/confirmOrder-Promotion"

import { useState } from "react";
import { Link } from "react-router";
import { Card } from "@/components/ui/card"
import type {Order} from "@/index";

export default function ComfirmOrder(){

    let sum = 0;
    const [orders, setOrders] = useState<Order[]>(JSON.parse(sessionStorage.getItem("orders") || "[]"));
    for(const order of orders){
        sum += (order.discounted_price ?? order.base_price) * order.quanity;
    }

    const [discount, setDiscount] = useState<number>(() => {
        const stored = sessionStorage.getItem("discount");
        return stored ? JSON.parse(stored) as number : 0;
    });
    const [discountPer, setDiscountPer] = useState<number>(() => {
        const stored = sessionStorage.getItem("discount%");
        return stored ? JSON.parse(stored) as number : 0;
    });




    return(
        <>
        <div className="bg-gray-100 p-5 px-10 min-h-screen">
            <div>
                <Link to="/">
                    <h1>&lt; Back</h1>
                </Link>
            </div>
            <h1 className="text-2xl font-bold">Confirm Order</h1>
            <div className="flex flex-row gap-4">
                <Card className="w-3/5 p-5 h-100 mt-3">
                    <ConfirmOrder_Orders orders={orders}/>
                </Card>
                <Card className="w-2/5 p-5 mt-3">
                    <ConfirmOrder_PaymentMethod/>
                    <ConfirmOrder_Promo/>
                    <div className="flex flex-col  gap-5 bg-white p-5">
                        <Card className="border p-5 rounded-2xl">
                            <h1 className="font-bold">Order Summary</h1>
                            <div className="flex flex-row justify-between">
                                <p>Total</p>
                                <p>฿{sum}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p>Discount</p>
                                <p className="text-green-400">฿{discount + (sum * (discountPer/100))}</p>
                            </div>
                            <div className="flex flex-row justify-between mt-5">
                                <p>Final</p>
                                <p>฿{sum-(discount + (sum * (discountPer/100)))}</p>
                            </div>
                        </Card>
                        <div className="text-center w-full">
                            <Link to="/user/finish">
                                <button className="bg-green-500 text-white px-5 py-3 font-bold rounded w-8/10 hover:text-green-500 hover:bg-white border-2 border-green-500">Confirm Payment</button>
                            </Link> 
                        </div>
                    </div>
                </Card>
            </div>
        </div>
        </>
    )
}