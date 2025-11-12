import DisplayStoreItem from "@/components/custom/global/DisplayStoreItem.tsx"
import type {Store} from "@/index"
import { Label } from "@/components/ui/label"
export default function DisplayStore({title, stores_list} : {title : string, stores_list? : Store[]}){
    if (!stores_list){
        stores_list = [
            {
                id : 1,
                name : "Name",
                star : 4.3,
                avg_time : [15, 30],
                description : "Thai food naja",
            },
            {
                id : 2,
                name : "Name",
                star : 4.3,
                avg_time : [15, 30],
                description : "Thai food naja",
            },
            {
                id : 3,
                name : "Name",
                star : 4.3,
                avg_time : [15, 30],
                description : "Thai food naja",
            },{
                id : 4,
                name : "Name",
                star : 4.3,
                avg_time : [15, 30],
                description : "Thai food naja",
            },
            {
                id : 5,
                name : "Name",
                star : 4.3,
                avg_time : [15, 30],
                description : "Thai food naja",
            },
            {
                id : 6,
                name : "Name",
                star : 4.3,
                avg_time : [15, 30],
                description : "Thai food naja",
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
                        <DisplayStoreItem key={store.id} name={store.name} star={store.star} avg_time={store.avg_time} description={store.description} id={store.id}/>
                    )
                })}
            </div>
        </div>
    )
}