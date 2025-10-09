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
import HomeSideBar from "@/components/custom/home/home-sidebar"

export default function Store(){
    const order1 : Order = { id : 1, name : "Curry Rice", quanity : 1, base_price : 50, note : "no spicy"};
    const order2 : Order = { id : 2, name : "Pizza", quanity : 2, base_price : 100};
    const [order, setOrder] = useState([order1, order2]);
    return(
        <>  
            <div className="bg-gray-200 w-screen flex flex-row justify-between">
                <HomeSideBar/>
                <StoreMain/>
                <HomeOrder orders={order}/>
            </div>
        </>
    )
}