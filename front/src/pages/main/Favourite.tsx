import NavBar from "@/components/custom/global/NavBar";
import DisplayStore from "@/components/custom/global/DisplayStore";
import HomeOrder from "@/components/custom/home/home-order";

import { useState } from "react";
import type { Order, Store } from "@/index";

function Favourite(){
    const [orders, setOrder] = useState<Order[]>([]);
    sessionStorage.setItem("orders", JSON.stringify(orders));

    const [stores, setStores] = useState<Store[]>([]);
    const fetchSearch = async () => {
        const res = await fetch("http://localhost:8000/user/favorites");
        if (res.ok){
            const data = await res.json();
            setStores(data.favorites);
        }
    }
    fetchSearch();

    return(
        <>
            <div className="bg-gray-200 min-h-screen">
                <NavBar num={3}/>
                <div className="pl-25 pr-40 pt-10">
                    <DisplayStore title="Favourite" stores_list={stores}/>
                </div>
                <HomeOrder orders={orders} setOrders={setOrder}/>
            </div>
        </>
    )
}

export default Favourite;