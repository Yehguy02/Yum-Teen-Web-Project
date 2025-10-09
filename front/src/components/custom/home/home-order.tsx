import type {Order} from "../../../pages/Home.tsx";
import { useState, useMemo } from "react";

type OrdersListProps = {
  orders: Order[];
};

export default function HomeOrder({orders} : OrdersListProps){
    const [discount, setDiscount] = useState(10);
    const [discountPercent, setDiscountPercent] = useState(10);
    const receipt = useMemo(() => {
        return orders.reduce((sum, order) => sum + order.base_price * order.quanity, 0);
    }, [orders]);
    return(
        <div className="bg-white w-80 h-3/4 top-5 right-0 mr-5 mt-5 flex flex-col justify-between pb-8 shadow rounded fixed">
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
                                    <h1>฿{order.base_price * order.quanity}</h1>
                                </div>
                            </div>
                            <p className="text-gray-400 ml-8 text-base">{order.note}</p>
                            <div className="flex flex-row gap-1.5 ml-8 text-gray-500">
                                <div className="w-5 h-5  text-center text-sm border-1 rounded-full flex justify-center" onClick={() => order.quanity = order.quanity + 1}>+</div>
                                <p>{order.quanity}</p>
                                <div className="w-5 h-5  text-center text-sm border-1 rounded-full flex justify-center" onClick={() => order.quanity = order.quanity - 1}>-</div>
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
                    {(discount > 0 || discountPercent > 0) ? (
                        <div className="flex flex-row justify-between text-base">
                            <h1>Discount</h1>
                            <h1 className="text-green-400">฿{discount + (receipt*(discountPercent/100))}</h1>
                        </div>
                    ) : (
                        null
                    )}
                    <div className="flex flex-row justify-between text-lg font-bold mt-4 ">
                        <h1>Final</h1>
                        <h1>฿{receipt - (discount + (receipt*(discountPercent/100)))}</h1>
                    </div>
                </div>
                <div className="text-center">
                    <button className="bg-green-500 text-white py-2 px-2 rounded w-8/10">Process</button>
                </div>
            </div>
        </div>
    )
}