import { useState, useEffect } from "react";
import type { Order } from "@/index";

export default function DisplayStoreItems({id, name, base_price, discounted_price = 0, img_src} : {id :number, name : string, base_price : number, discounted_price? : number, img_src? : string;}){
    // add in cart
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

    function handleAddtoCart(id: number, name: string, base_price: number, discounted_price?: number){
        const curr_order = orders.find((order) => order.id == id && order.name == name);
        if (!curr_order){
            const newOrder = { id : id, name : name, quanity : 1, base_price : base_price , discounted_price : discounted_price}
            setOrders((orders) => [...orders, newOrder]);
            console.log(orders)
        }
        else{
            const quantity = curr_order.quanity + 1;
            setOrders(prevOrders =>
                prevOrders.map(order =>
                    order.id === id && order.name === name
                        ? { ...order, quanity: quantity }
                        : order
                )
            );
            console.log(orders)
        }
    }

    return(
        <Card className="w-50 h-50 p-2">
            <div className="bg-blue-700 w-full h-40 rounded-xl">
                <img src={img_src}></img>
            </div>
            <div className="px-2">
                <h1>{name}</h1>
                <div className="flex flex-row justify-between">
                    {discounted_price > 0 ? (
                        <div className="flex flex-row gap-1">
                            <p className="line-through text-gray-400">฿{base_price}</p>
                            <p>฿{discounted_price}</p>
                        </div>
                    ): (
                        <p>฿{base_price}</p>
                    )}
                    <div className="bg-amber-400 w-5 h-5 text-center text-white rounded-full flex hover:bg-amber-200"
                    onClick={() => {
                        handleAddtoCart(id, name, base_price)
                    }}></div>
                </div>
            </div>
        </Card>
    )
}