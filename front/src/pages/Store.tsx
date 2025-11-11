import { useState } from "react";
export type Order = {
    id : number,
    name: string,
    quanity: number,
    base_price : number,
    note? : string
}

import StoreMain from "@/components/custom/store/storeMain"
import HomeOrder from "@/components/custom/home/home-order"
import NavBar from "@/components/custom/global/NavBar";

export default function Store(){

    const [order, setOrder] = useState([
        { id : 1, name : "Curry Rice", quanity : 1, base_price : 50, note : "no spicy"}, 
        { id : 2, name : "Pizza", quanity : 2, base_price : 100}]);
    return(
        <>  
            <div className="bg-gray-200 w-screen min-h-screen flex flex-row justify-between">
                <NavBar num={0}/>
                <StoreMain/>
                <HomeOrder orders={order}/>
            </div>
        </>
    )
}