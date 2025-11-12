import NavBar from "@/components/custom/global/NavBar";
import { useParams } from "react-router";
import { useState } from "react";
import type {Store, Order} from "@/index";
import DisplayStore from "@/components/custom/global/DisplayStore";
import HomeOrder from "@/components/custom/home/home-order";

function SearchNamePage(){
    const {keyword} = useParams();
    const [stores, setStores] = useState<Store[]>([]);
    const fetchSearch = async () => {
        const res = await fetch("/search/name/" + keyword);
        if (!res.ok){
            const data = await res.json();
            setStores(data.store_list);
        }
    }
    fetchSearch();
    const [discount, setDiscount] = useState<Order[]>(() => {
        try {
        const raw = sessionStorage.getItem("discount");
        return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    });
    const [orders, setOrders] = useState<Order[]>(() => {
        try {
        const raw = sessionStorage.getItem("orders");
        return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    });
    sessionStorage.setItem("orders", JSON.stringify(orders));
    sessionStorage.setItem("discount", JSON.stringify(discount));

    return(
        <>
            <div className="bg-gray-200 min-h-screen">
                <NavBar num={0}/>
                <div className="pl-25 pt-5">
                    <DisplayStore title="Search by Name" stores_list={stores}/>
                </div>
                <HomeOrder orders={orders} setOrders={setOrders}/>
            </div>
        </>
    )
}

export default SearchNamePage;