import type { Menu, Order } from "@/index"
import { useState, useEffect } from "react";

export default function DisplayMenu({title, menus_list} : {title : string, menus_list? : Menu[]}){
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
        console.log(orders);
    }, [orders]);

    function handleAddtoCart(id: number, name: string, base_price: number, discounted_price?: number){
        const curr_order = orders.find((order) => order.id == id && order.name == name);
        if (!curr_order){
            const newOrder = { id : id, name : name, quanity : 1, base_price : base_price , discounted_price : discounted_price}
            setOrders((prevOrders) => [...prevOrders, newOrder]);
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
        }
        window.location.reload();
    }

    if(!menus_list){
        menus_list = [
            {
                id : 1,
                name: "Food",
                base_price : 100,
            },
            {
                id : 2,
                name: "Food",
                base_price : 100,
            },
            {
                id : 3,
                name: "Food",
                base_price : 100,
            },
            {
                id : 4,
                name: "Food",
                base_price : 100,
            },
            {
                id : 5,
                name: "Food",
                base_price : 100,
            },
            {
                id : 6,
                name: "Food",
                base_price : 100,
            },
        ]
    }

    return(
        <>
            <div className="p-5">
                <h1 className="font-bold text-xl mb-3">{title}</h1>
                <div className="flex flex-row flex-wrap gap-7">
                    {menus_list.map((menu) => {
                        return(
                            <div className="w-50 h-50" key={menu.id}>
                                <div className="bg-blue-700 w-full h-40 rounded-xl">
                                    <img src={menu.img_src}></img>
                                </div>
                                <div className="px-2">
                                    <h1>{menu.name}</h1>
                                    <div className="flex flex-row justify-between">
                                        {menu.discount_price ? (
                                            <div className="flex flex-row gap-1">
                                                <p className="line-through text-gray-400">฿{menu.base_price}</p>
                                                <p>฿{menu.discount_price}</p>
                                            </div>
                                        ): (
                                            <p>฿{menu.base_price}</p>
                                        )}
                                        <div className="bg-amber-400 w-5 h-5 text-center text-white rounded-full flex hover:bg-amber-200"
                                        onClick={() => {
                                            handleAddtoCart(menu.id, menu.name, menu.base_price)
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}