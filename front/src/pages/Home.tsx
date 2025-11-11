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

    // get cart data from session storage
    // if empty, create one
    // if yes, save to orders

    const [orders, setOrder] = useState([
        { id : 1, name : "Curry Rice", quanity : 1, base_price : 50, note : "no spicy"}, 
        { id : 2, name : "Pizza", quanity : 2, base_price : 100}]);
    sessionStorage.setItem("orders", JSON.stringify(orders));

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