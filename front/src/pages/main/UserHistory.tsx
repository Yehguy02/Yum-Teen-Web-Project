import NavBar from "@/components/custom/global/NavBar";
import HistoryItems from "@/components/custom/history/HistoryItems.tsx";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
function UserHistorty(){
    const histories = [
        {
            id : 1,
            date : "10/09/2025",
            store : "Pizza hut",
            price : 500
        },
        {
            id : 2,
            date : "10/09/2025",
            store : "Pizza hut",
            price : 500
        },
        {
            id : 3,
            date : "10/09/2025",
            store : "Pizza hut",
            price : 500
        },
    ]

    // <ul>
    //                 {histories.map((history) => {
    //                     return(
    //                         <li key={history.id}>
    //                             <div className="bg-white my-5 p-6 px-8 rounded-2xl w-8/10 flex flex-row justify-between">
    //                                 <div>
    //                                     <p>{history.date}</p>
    //                                     <p>{history.store}</p>
    //                                 </div>
    //                                 <p>฿{history.price}</p>
    //                             </div>
    //                         </li>
    //                     )
    //                 })}
    //                 </ul>
    return(
        <>
            <NavBar num={2}/>
            <div className="bg-gray-200 min-h-screen pt-7 px-3">
                <Card className="ml-22 pt-5 px-5 w-[1370px]">
                    <Label className="text-3xl">History</Label>
                    <Label className="text-lg">Keep track of your previous purchases and completed orders.</Label>
                    <div>
                        
                    </div>
                </Card>
            </div>
        </>
    )
}

export default UserHistorty;