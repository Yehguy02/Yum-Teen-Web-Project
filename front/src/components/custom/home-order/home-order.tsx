import type {Order} from "../../../pages/Home.tsx";

type OrdersListProps = {
  orders: Order[];
};

export default function HomeOrder({orders} : OrdersListProps){
    return(
        <div className="bg-white w-2/10 h-4/5 top-1/2 float-right mr-5">
            <h1>My Orders</h1>
            <ul>
                {orders.map((order) =>{
                    return <li key={order.id}>
                        <div>
                            <h1>{order.quanity} x {order.name}   ฿{order.base_price}</h1>
                            <p>{order.note}</p>
                        </div>
                        </li>;
                })}
            </ul>
        </div>
    )
}