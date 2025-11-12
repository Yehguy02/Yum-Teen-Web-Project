import NavBar from "@/components/custom/global/NavBar";
import DisplayStore from "@/components/custom/global/DisplayStore";
import HomeOrder from "@/components/custom/home/home-order";

import { useState } from "react";
import type { Order } from "@/index";

function Favourite(){
    const [orders, setOrder] = useState<Order[]>([]);
    sessionStorage.setItem("orders", JSON.stringify(orders));
    return(
        <>
            <div className="bg-gray-200 min-h-screen">
                <NavBar num={3}/>
                <div className="pl-25 pr-40 pt-10">
                    <DisplayStore title="Favourite"/>
                </div>
                <HomeOrder orders={orders} setOrders={setOrder}/>
            </div>
        </>
    )
}

export default Favourite;