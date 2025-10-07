import type {Order} from "../../../pages/Home.tsx";
import { useState, useMemo } from "react";

type OrdersListProps = {
  orders: Order[];
};

export default function HomeOrder({orders} : OrdersListProps){
    const [discount, setDiscount] = useState(10);
    const [discountPercent, setDiscountPercent] = useState(10);
    const receipt = useMemo(() => {
        return orders.reduce((sum, order) => sum + order.base_price, 0);
    }, [orders]);
    return(
        <div className="bg-white w-3/10 h-4/5 top-1/2 float-right mr-5 mt-5 flex flex-col justify-between pb-3">
            <div>
                <h1 className="font-bold m-4 text-xl">My Orders</h1>
                <ul>
                    {orders.map((order) =>{
                        return <li key={order.id}>
                            <div className="flex flex-row justify-between mx-6 text-lg">
                                <div>
                                    <h1>{order.quanity} x {order.name}</h1>
                                </div>
                                <div>
                                    <h1>฿{order.base_price}</h1>
                                </div>
                            </div>
                            <p className="text-gray-400 ml-8 mb-4 text-base">{order.note}</p>
                            </li>;
                    })}
                </ul>
            </div>
            <div>
                <div className="border-2 rounded border-amber-500 m-4 p-2">
                    <div className="flex flex-row justify-between text-base">
                        <h1>Final</h1>
                        <h1>฿{receipt}</h1>
                    </div>
                    {(discount > 0 || discountPercent > 0) ? (
                        <div className="flex flex-row justify-between text-base">
                            <h1>Discount</h1>
                            <h1>฿{discount + (receipt*(discountPercent/100))}</h1>
                        </div>
                    ) : (
                        null
                    )}
                    <div className="flex flex-row justify-between text-lg font-bold mt-4">
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