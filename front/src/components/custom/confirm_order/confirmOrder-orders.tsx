import type { Order } from "@/index"
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
                                    <div className="flex flex-row items-center gap-1.5 mt-3">
                                        <div className="w-4 h-4 rounded-xs bg-green-300"></div>
                                        <p className="text-sm">{order.quanity}</p>
                                        <div className="w-4 h-4 rounded-xs bg-green-300"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between py-5  items-end">
                                <div className="bg-red-500 w-5 h-5 rounded">
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