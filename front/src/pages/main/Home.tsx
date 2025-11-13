import HomeOrder from "@/components/custom/home/home-order";
import HomeSearchBar from "@/components/custom/home/home-searchbar";
import HomeAllStore from "@/components/custom/home/main/home-all-store";
import NavBar from "@/components/custom/global/NavBar";
import { useState, createContext, useEffect} from "react";
import { toast } from "sonner";
import type { Order, Store } from "@/index";
import { storeAPI } from "@/services/api";

function Home(){
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

    const [popularStores, setPopularStores] = useState<Store[]>([]);
    const [trendingStores, setTrendingStores] = useState<Store[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    sessionStorage.setItem("orders", JSON.stringify(orders));
    sessionStorage.setItem("discount", JSON.stringify(discount));

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const data = await storeAPI.getHome();
                
                // Transform backend store data to frontend Store type
                const transformStoreData = (backendStore: any): Store => ({
                    id: backendStore.id || backendStore.getID?.() || 0,
                    name: backendStore.name || backendStore.getName?.() || "Unknown",
                    avg_time: [15, 30], // TODO: Get from backend if available
                    description: backendStore.category || backendStore.getCategory?.() || "No description",
                    payment: "Promptpay", // TODO: Get from backend if available
                    category: [backendStore.category || backendStore.getCategory?.() || "Other"],
                });

                if (data.Popular && Array.isArray(data.Popular)) {
                    setPopularStores(data.Popular.map(transformStoreData));
                }
                if (data.Trending && Array.isArray(data.Trending)) {
                    setTrendingStores(data.Trending.map(transformStoreData));
                }
            } catch (error) {
                console.error("Failed to fetch stores:", error);
                toast.error("Failed to load stores");
            } finally {
                setIsLoading(false);
            }
        };

        fetchStores();
    }, []);

    return(
        <>
            <div className="bg-gray-200 w-screen flex flex-row justify-between">
                <NavBar num={0}/>
                    <div className="flex flex-col items-center w-full pr-80 pl-25">
                        <HomeSearchBar/>
                        <HomeAllStore popularStores={popularStores} trendingStores={trendingStores}/>
                    </div>
                <HomeOrder orders={orders} setOrders={setOrders}/>
            </div>
        </>
    )
}

export default Home;