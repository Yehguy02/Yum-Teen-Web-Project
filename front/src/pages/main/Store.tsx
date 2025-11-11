import { useState } from "react";

import StoreMain from "@/components/custom/store/storeMain"
import HomeOrder from "@/components/custom/home/home-order"
import NavBar from "@/components/custom/global/NavBar";

export default function Store(){
    return(
        <>  
            <div className="bg-gray-200 w-screen min-h-screen flex flex-row justify-between">
                <NavBar num={0}/>
                <StoreMain/>
                <HomeOrder/>
            </div>
        </>
    )
}