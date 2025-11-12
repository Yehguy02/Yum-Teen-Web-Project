import { useNavigate } from "react-router";
import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router";
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import type {Order} from "@/index";

export default function HomeOrder(){
    const navigate = useNavigate();

    const [orders, setOrders] = useState<Order[]>(() => {
        try {
            const raw = sessionStorage.getItem("orders");
            const parsed = JSON.parse(raw || "[]");
            return Array.isArray(parsed) ? parsed : [];
        } catch (e) {
            console.error("Failed to parse orders from sessionStorage", e);
            return [];
        }
    });
    useEffect(() => {
        sessionStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);


    const [discount, setDiscount] = useState<number>(() => {
        const stored = sessionStorage.getItem("discount");
        return stored ? JSON.parse(stored) as number : 0;
    });
    const [discountPer, setDiscountPer] = useState<number>(() => {
        const stored = sessionStorage.getItem("discount%");
        return stored ? JSON.parse(stored) as number : 0;
    });

    function handleQuantityModify(id : number, name : string, amount : number){
        const curr_order = orders.find((order) => order.id == id && order.name == name);
        if (!curr_order) return
        const quantity = curr_order.quanity + amount;
        if(quantity <= 0){
            const newOrders = orders.filter(order => order.id !== curr_order.id);
            setOrders(newOrders);
        }
        else if(quantity >= 100){
            toast.warning("You cannot have quanity less than 100");
            return;
        }
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order.id === id && order.name === name
                    ? { ...order, quanity: quantity }
                    : order
            )
        );
    }


    const receipt = useMemo(() => {
        if (!Array.isArray(orders)) return 0;
        return orders.reduce((sum, order) => {
            const price = order.discounted_price ?? order.base_price;
            return sum + price * order.quanity;
        }, 0);
    }, [orders]);
    return(
        <Card className="bg-white w-80 h-3/4 top-5 right-0 flex flex-col justify-between pb-8 fixed mr-3">
            <div>
                <h1 className="font-bold m-4 text-xl">My Orders</h1>
                <ul>
                    {orders.map((order) =>{
                        return <li key={order.id} className="mb-4">
                            <div className="flex flex-row justify-between mx-6 text-lg">
                                <div>
                                    <h1>{order.quanity} x {order.name}</h1>
                                </div>
                                <div>
                                    {order.discounted_price ? (
                                        <h1>฿{order.discounted_price * order.quanity} 
                                            <span className="line-through text-gray-400 ml-1">{order.base_price * order.quanity}
                                            </span>
                                        </h1>
                                    ) : (
                                        <h1>฿{order.base_price * order.quanity}</h1>
                                    )}
                                </div>
                            </div>
                            <p className="text-gray-400 ml-8 text-base">{order.note}</p>
                            <div className="flex flex-row justify-between gap-1.5 ml-8 text-gray-500 border-1  rounded-2xl px-2 w-20 mt-2">
                                <div className="w-5 h-5  text-center text-sm flex justify-center cursor-pointer" 
                                onClick={() => handleQuantityModify(order.id, order.name, 1)}>
                                    +</div>
                                <p>{order.quanity}</p>
                                <div className="w-5 h-5  text-center text-sm flex justify-center cursor-pointer" 
                                onClick={() => handleQuantityModify(order.id, order.name, -1)}>
                                    -</div>
                            </div>
                            </li>;
                    })}
                </ul>
            </div>
            <div>
                <div className="border-2 rounded border-amber-500 m-4 p-2">
                    <div className="flex flex-row justify-between text-base">
                        <h1>Total</h1>
                        <h1>฿{receipt}</h1>
                    </div>
                    {(discount > 0 || discountPer > 0) ? (
                        <div className="flex flex-row justify-between text-base">
                            <h1>Discount</h1>
                            <h1 className="text-green-400">฿{discount + (receipt*(discountPer/100))}</h1>
                        </div>
                    ) : (
                        null
                    )}
                    <div className="flex flex-row justify-between text-lg font-bold mt-4 ">
                        <h1>Final</h1>
                        {receipt - (discount + (receipt*(discountPer/100))) >= 0 ? (
                            <h1>฿{receipt - (discount + (receipt*(discountPer/100)))}</h1>
                        ) : (
                            <h1>฿0</h1>
                        )}
                    </div>
                </div>
                <div className="text-center">
                    <Link to="/user/confirm">
                        <button className="bg-green-500 text-white py-2 px-2 rounded w-8/10">Process</button>
                    </Link>
                </div>
            </div>
        </Card>
    )
}