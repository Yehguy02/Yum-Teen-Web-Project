import NavBar from "@/components/custom/global/NavBar";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import type {Store, Order} from "@/index";
import DisplayStore from "@/components/custom/global/DisplayStore";
import HomeOrder from "@/components/custom/home/home-order";
import { storeAPI } from "@/services/api";

function SearchNamePage(){
    const {keyword} = useParams();
    const [stores, setStores] = useState<Store[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSearch = async () => {
            try {
                if (!keyword) {
                    setStores([]);
                    setIsLoading(false);
                    return;
                }
                
                const data = await storeAPI.searchByName(keyword);
                console.log("Search results:", data);
                
                // Transform backend store data to frontend Store type
                const transformStoreData = (backendStore: any): Store => ({
                    id: typeof backendStore.getID === 'function' ? backendStore.getID() : backendStore.id,
                    name: typeof backendStore.getName === 'function' ? backendStore.getName() : backendStore.name,
                    description: typeof backendStore.getCategory === 'function' ? backendStore.getCategory() : backendStore.category,
                    payment: "Promptpay",
                    category: [typeof backendStore.getCategory === 'function' ? backendStore.getCategory() : backendStore.category],
                });

                if (data.results && Array.isArray(data.results)) {
                    setStores(data.results.map(transformStoreData));
                } else {
                    setStores([]);
                }
            } catch (error) {
                console.error("Failed to search stores:", error);
                toast.error("Failed to search stores");
                setStores([]);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchSearch();
    }, [keyword]);

    const [discount] = useState<Order[]>(() => {
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
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : stores.length === 0 ? (
                        <div>No stores found for "{keyword}"</div>
                    ) : (
                        <DisplayStore title={`Search Results for "${keyword}"`} stores_list={stores}/>
                    )}
                </div>
                <HomeOrder orders={orders} setOrders={setOrders}/>
            </div>
        </>
    )
}

export default SearchNamePage;