import { useEffect } from "react";

import type { Order } from "@/index"
import crossMark from "@/assets/global/xmark-solid-full.svg"


export default function ConfirmOrder_Orders({orders} : {orders : Order[]}){


    return(
        <div className="bg-white">
            <ul>
            {orders.map((order) => {
                return(
                    <li key={order.id} className="mb-2 p-5">
                        <div className="flex flex-row justify-between ">
                            <div className="flex flex-row">
                                <div className="w-30 h-30 bg-amber-300">
                                    <img></img>
                                </div>
                                <div className="flex flex-col justify-between p-3">
                                    <h1 className="font-bold text-lg">{order.name}</h1>
                                    {order.note ? (<p className="text-gray-500">{order.note}</p>): (<></>)}
                                    <div className="flex flex-row items-center gap-1.5 mt-3 text-sm border-1 justify-around w-20 rounded-2xl">
                                        <p>+</p>
                                        <p>{order.quanity}</p>
                                        <p>-</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between py-5  items-end">
                                <div className="w-5 h-5 rounded">
                                    <img src={crossMark}></img>
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
    )
}