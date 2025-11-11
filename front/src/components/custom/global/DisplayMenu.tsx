import DisplayMenuItem from "../store/DisplayMenuItem"
import type {Store} from "@/index";


export default function DisplayStores({title, stores_list} : {title : string, stores_list : Store}){
    return(
        <div className="p-5">
            <h1 className="font-bold text-xl mb-3">{title}</h1>
            <div className="flex flex-row flex-wrap gap-7">
                <DisplayMenuItem name="Food" base_price={100}/>
                <DisplayMenuItem name="Food" base_price={100}/>
                <DisplayMenuItem name="Food" base_price={100}/>
                <DisplayMenuItem name="Food" base_price={100}/>
                <DisplayMenuItem name="Food" base_price={100}/>
                <DisplayMenuItem name="Food" base_price={100}/>
                <DisplayMenuItem name="Food" base_price={100}/>
                <DisplayMenuItem name="Food" base_price={100} discounted_price={90}/>
            </div>
        </div>
    )
}