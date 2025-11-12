import DisplayStoreItem from "@/components/custom/global/DisplayStoreItem.tsx"
import type {Store} from "@/index"

export default function DisplayStore({title, stores_list} : {title : string, stores_list? : Store[]}){
    if (!stores_list){
        stores_list = [
            {
                id : 1,
                name : "Name",
                star : 4.3,
                avg_time : [15, 30],
                description : "Thai food naja",
                payment : "Promptpay"
            },
            {
                id : 2,
                name : "Name",
                star : 4.3,
                avg_time : [15, 30],
                description : "Thai food naja",
                payment : "Promptpay"
            },
            {
                id : 3,
                name : "Name",
                star : 4.3,
                avg_time : [15, 30],
                description : "Thai food naja",
                payment : "Promptpay"
            },{
                id : 4,
                name : "Name",
                star : 4.3,
                avg_time : [15, 30],
                description : "Thai food naja",
                payment : "Promptpay"
            },
            {
                id : 5,
                name : "Name",
                star : 4.3,
                avg_time : [15, 30],
                description : "Thai food naja",
                payment : "Promptpay"
            },
            {
                id : 6,
                name : "Name",
                star : 4.3,
                avg_time : [15, 30],
                description : "Thai food naja",
                payment : "Promptpay"
            },       
            
        ]
    }
    return(
        // href of each store in "/user/store/{store_id}"
        <div className="w-full">
            <h1 className="text-xl font-bold mb-5">{title}</h1>
            <div className="flex flex-row gap-5 flex-wrap">
                {stores_list.map((store) => {
                    return(
                        <DisplayStoreItem key={store.id} name={store.name} star={store.star} avg_time={store.avg_time} description={store.description} id={store.id}/>
                    )
                })}
            </div>
        </div>
    )
}