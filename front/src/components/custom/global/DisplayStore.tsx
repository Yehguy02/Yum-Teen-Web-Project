import DisplayStoreItem from "@/components/custom/global/DisplayStoreItem.tsx"
import type {Store} from "@/index"
import { Label } from "@/components/ui/label"
export default function DisplayStore({title, stores_list} : {title : string, stores_list? : Store[]}){
    
    const fetchStore = async () => {
        const res = await fetch("/store/all");
        if (!res.ok){
            const data = await res.json();
            stores_list = data.store_list;
        }
    }
    fetchStore();

    if (!stores_list){
        stores_list = [
            {
                id : 1,
                name : "Name",
                avg_time : [15, 30],
                description : "Thai food naja",
                payment : "Promptpay",
                category : ["Thai", "Chinese"]
            },
            {
                id : 2,
                name : "Name",
                avg_time : [15, 30],
                description : "Thai food naja",
                payment : "Promptpay"
            },
            {
                id : 3,
                name : "Name",
                avg_time : [15, 30],
                description : "Thai food naja",
                payment : "Promptpay",
                category : ["Thai", "Chinese"]
            },{
                id : 4,
                name : "Name",
                avg_time : [15, 30],
                description : "Thai food naja",
                payment : "Promptpay",
                category : ["Thai", "Chinese"]
            },
            {
                id : 5,
                name : "Name",
                avg_time : [15, 30],
                description : "Thai food naja",
                payment : "Promptpay",
                category : ["Thai", "Chinese"]
            },
            {
                id : 6,
                name : "Name",
                avg_time : [15, 30],
                description : "Thai food naja",
                payment : "Promptpay",
                category : ["Thai", "Chinese"]
            },       
            
        ]
    }
    return(
        // href of each store in "/user/store/{store_id}"
        <div className="w-full">
            <Label className="text-3xl mb-5">{title}</Label>
            <div className="flex flex-row gap-5 flex-wrap">
                {stores_list.map((store) => {
                    return(
                        <DisplayStoreItem 
                            key={store.id} name={store.name} avg_time={store.avg_time} 
                            description="" id={store.id} category={store.category}/>
                    )
                })}
            </div>
        </div>
    )
}