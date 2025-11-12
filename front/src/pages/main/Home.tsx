import HomeOrder from "@/components/custom/home/home-order";
import HomeSearchBar from "@/components/custom/home/home-searchbar";
import HomeAllStore from "@/components/custom/home/main/home-all-store";
import NavBar from "@/components/custom/global/NavBar";
import { useState, createContext, useEffect} from "react";
import { toast } from "sonner";
import type { Order } from "@/index";

function Home(){

    // get cart data from session storage
    // if empty, create one
    // if yes, save to orders
    const [discount, setDiscount] = useState(10);
    const [discountPercent, setDiscountPercent] = useState(10);
    const [orders, setOrder] = useState<Order[]>([]);
    sessionStorage.setItem("orders", JSON.stringify(orders));
    sessionStorage.setItem("discount", JSON.stringify(discount));
    sessionStorage.setItem("discount%", JSON.stringify(discountPercent));

    // useEffect(() => {
        
    //     const res = await fetch("http://localhost:8000/home")
    //     const data = await res.json();

    //     if (res.ok){
    //         const data.
    //         localStorage.setItem('token' , token);
    //         navigate('/');
    //     }else{
    //         toast.error(data.detail);
    //     }
    // })
    // Fetch recommend stores, favourite stores, nearby store, trending store from backend than put it in HomeAllStore
    


    return(
        <>
            <div className="bg-gray-200 w-screen flex flex-row justify-between">
                <NavBar num={0}/>
                    <div className="flex flex-col items-center w-full pr-80 pl-25">
                        <HomeSearchBar/>
                        <HomeAllStore/>
                    </div>
                <HomeOrder/>
            </div>
        </>
    )
}

export default Home;