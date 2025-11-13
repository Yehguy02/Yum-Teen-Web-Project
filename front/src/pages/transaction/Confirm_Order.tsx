import crossMark from "@/assets/global/xmark-solid-full.svg"
import ConfirmOrder_PaymentMethod from "@/components/custom/confirm_order/confirmOrder-paymentMethod"
import ConfirmOrder_Promo from "@/components/custom/confirm_order/confirmOrder-Promotion"

import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

import type {Order} from "@/index";

export default function ComfirmOrder(){
    const navigate = useNavigate();

    let sum = 0;
    const [orders, setOrders] = useState<Order[]>(JSON.parse(sessionStorage.getItem("orders") || "[]"));
    for(const order of orders){
        sum += (order.discounted_price ?? order.base_price) * order.quanity;
    }

    const [discount, setDiscount] = useState<number>(() => {
        const stored = sessionStorage.getItem("discount");
        return stored ? JSON.parse(stored) as number : 0;
    });

    useEffect(() => {
            sessionStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);
    
    function handleQuantityModify(id : number, name : string, amount : number){
        const curr_order = orders.find((order) => order.id == id && order.name == name);
        if (!curr_order) return
        const quantity = curr_order.quanity + amount;
        if(quantity <= 0){ return; }
        else if(quantity >= 100){ return; }
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order.id === id && order.name === name
                    ? { ...order, quanity: quantity }
                    : order
            )
        );
        console.log(orders);
    }

    async function handleProcess(){
        // if sucess, go to finish and clear this orders
        // const res = await fetch("/order/process", {
        //     method : "POST",
        //     headers : {
        //         "Content-Type" : "application/json"
        //     },
        //     body : JSON.stringify({
        //         orders : orders,
        //         discount : discount,
        //         sum : sum
        //     })
        // });
        // if (!res.ok){
        //     const data = await res.json();
        //     alert(data.detail);
        //     return;
        // }

        if (sum <= 0) return;
        sessionStorage.setItem("orders", JSON.stringify([]));
        sessionStorage.setItem("discount", JSON.stringify(0));
        navigate("/user/finish", {state : {orders : orders, discount : discount, sum : sum}})
    }


    return(
        <>
        <div className="bg-gray-100 p-5 px-10 min-h-screen">
            <div>
                <Link to="/">
                    <h1>&lt; Back</h1>
                </Link>
            </div>
            <h1 className="text-2xl font-bold">Confirm Order</h1>
            <div className="flex flex-row">
                <div className="w-3/5 p-5 h-100">
                    <div className="bg-white">
                        <ul>
                        {orders.map((order) => {
                            return(
                            <li key={order.id} className="mb-2 p-5">
                                <div className="flex flex-row justify-between ">
                                    <div className="flex flex-row">
                                        <div className="w-30 h-30 bg-amber-300">
                                            <img src={order.img_src}></img>
                                        </div>
                                        <div className="flex flex-col justify-between p-3">
                                            <h1 className="font-bold text-lg">{order.name}</h1>
                                            {order.note ? (<p className="text-gray-500">{order.note}</p>): (<></>)}
                                            <div className="flex flex-row items-center gap-1.5 mt-3 text-sm border-1 justify-around w-20 rounded-2xl">
                                                <p className="cursor-pointer" 
                                                    onClick={() => handleQuantityModify(order.id, order.name, 1)}>+</p>
                                                <p>{order.quanity}</p>
                                                <p className="cursor-pointer"
                                                    onClick={() => handleQuantityModify(order.id, order.name, -1)}>-</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between py-5  items-end">
                                        <div className="w-5 h-5 rounded">
                                            <img src={crossMark}
                                            onClick={() => {
                                                const newOrders = orders.filter(curr_order => curr_order.id !== order.id);
                                                setOrders(newOrders);
                                            }}></img>
                                        </div>
                                            {order.discounted_price ? (
                                                <p>฿{order.discounted_price}
                                                    <span className="line-through text-gray-500 ml-1">{order.base_price}</span>
                                                </p>
                                            ) : (
                                                <p>฿{order.base_price}</p>
                                            )}
                                    </div>
                                </div>
                            </li>
                            )
                        })}
                        </ul>
                    </div>
                </div>
                <div className="w-2/5 p-5 ">
                    <ConfirmOrder_PaymentMethod/>
                    <ConfirmOrder_Promo discount={discount} setDiscount={setDiscount}/>
                    <div className="flex flex-col  gap-5 bg-white p-5">
                        <Card className="border p-5 rounded-2xl">
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
                                <p>฿{Math.max(sum-discount, 0)}</p>
                            </div>
                        </Card>
                        <div className="text-center w-full">
                            <button className="bg-green-500 text-white px-5 py-3 font-bold rounded w-8/10"
                            onClick={() => handleProcess()}>Confirm Payment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}