import HomeOrder from "@/components/custom/home-order/home-order";
import HomeSideBar from "@/components/custom/home/home-sidebar";
import { useState, createContext} from "react";


export type Order = {
    id : number,
    name: string,
    quanity: number,
    base_price : number,
    note? : string
}
function Home(){
    const order1 : Order = { id : 1, name : "Curry Rice", quanity : 1, base_price : 10, note : "no spicy"};
    const order2 : Order = { id : 2, name : "Pizza", quanity : 1, base_price : 10};
    const [order, setOrder] = useState([order1, order2]);
    return(
        <>
            <div className="bg-gray-200 w-screen h-screen">
                <HomeSideBar/>
                    <h1>Niggy</h1>
                <HomeOrder orders={order}/>
            </div>
        </>
    )
}

export default Home;