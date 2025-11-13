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
        <div className="w-full overflow-x-auto px-2 py-5 sm:p-5">
            <Label className="text-3xl sm:ml-0 mb-5">{title}</Label>
            <div className="sm:flex sm:flex-row gap-5 sm:ml-0 flex-wrap grid grid-cols-1">
                {stores_list.map((store) => {
                    return(
                        <DisplayStoreItem key={store.id} name={store.name} star={store.star} avg_time={store.avg_time} description={store.description} id={store.id}/>
                    )
                })}
            </div>
        </div>
    )
}