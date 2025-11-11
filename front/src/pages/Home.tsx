import HomeOrder from "@/components/custom/home/home-order";
import HomeSearchBar from "@/components/custom/home/home-searchbar";
import HomeAllStore from "@/components/custom/home/main/home-all-store";
import NavBar from "@/components/custom/global/NavBar";
import { useState, createContext} from "react";


export type Order = {
    id : number,
    name: string,
    quanity: number,
    base_price : number,
    note? : string,
    img_src? : string
}
function Home(){
    const order1 : Order = { id : 1, name : "Curry Rice", quanity : 1, base_price : 50, note : "no spicy"};
    const order2 : Order = { id : 2, name : "Pizza", quanity : 2, base_price : 100};
    const [order, setOrder] = useState([order1, order2]);
    return(
        <>
            <div className="bg-gray-200 w-screen flex flex-row justify-between">
                <NavBar num={0}/>
                    <div className="flex flex-col items-center w-full pr-80 pl-25">
                        <HomeSearchBar/>
                        <HomeAllStore/>
                    </div>
                <HomeOrder orders={order}/>
            </div>
        </>
    )
}

export default Home;