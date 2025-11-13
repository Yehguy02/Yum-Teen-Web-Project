import HomeOrder from "@/components/custom/home/home-order";
import HomeSearchBar from "@/components/custom/home/home-searchbar";
import HomeAllStore from "@/components/custom/home/main/home-all-store";
import NavBar from "@/components/custom/global/NavBar";
import RowBar from "@/components/custom/global/RowNav";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import type { Order, Store } from "@/index";
import { storeAPI } from "@/services/api";

type BackendStore = {
    id?: number;
    getID?: () => number;
    name?: string;
    getName?: () => string;
    category?: string;
    getCategory?: () => string;
};

function Home() {
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

    useEffect(() => {
        sessionStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);

    useEffect(() => {
        sessionStorage.setItem("discount", JSON.stringify(discount));
    }, [discount]);

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const data = await storeAPI.getHome();

                const transformStoreData = (backendStore: BackendStore): Store => ({
                    id: backendStore.id || backendStore.getID?.() || 0,
                    name: backendStore.name || backendStore.getName?.() || "Unknown",
                    avg_time: [15, 30],
                    description: backendStore.category || backendStore.getCategory?.() || "No description",
                    payment: "Promptpay",
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

    return (
        <>
            <NavBar num={0} />
            <div className="bg-gray-200 min-h-screen flex flex-col items-stretch sm:flex-row sm:items-start sm:justify-between mt-20">
                <main className="w-full sm:ml-24 lg:ml-28 xl:ml-32">
                    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 pb-12 pt-6 sm:px-6 sm:pt-10 lg:px-8">
                        <HomeSearchBar />
                        <HomeAllStore
                            popularStores={popularStores}
                            trendingStores={trendingStores}
                            isLoading={isLoading}
                        />
                    </div>
                </main>
                <div className="hidden shrink-0 sm:block sm:pr-6 sm:pt-6 lg:pr-10">
                    <HomeOrder orders={orders} setOrders={setOrders} />
                </div>
            </div>
            <RowBar num={0} />
        </>
    );
}

export default Home;