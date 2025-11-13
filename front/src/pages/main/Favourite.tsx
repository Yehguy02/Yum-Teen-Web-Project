import NavBar from "@/components/custom/global/NavBar";
import DisplayStore from "@/components/custom/global/DisplayStoreFav.tsx";
import HomeOrder from "@/components/custom/home/home-order";
import NavRow from "@/components/custom/global/RowNav";
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
            <NavBar num={3}/>
            <div className="bg-gray-200 min-h-screen pt-15 sm:pt-5">
                <div className="pl-5 sm:pl-25 pr-30 sm:pr-40 pt-10">
                    <DisplayStore title="Favourite" stores_list={stores}/>
                </div>
                <HomeOrder orders={orders} setOrders={setOrder}/>
            </div>
            <NavRow num={3}/>
        </>
    )
}

export default Favourite;