import NavBar from "@/components/custom/global/NavBar";
import NavRow from "@/components/custom/global/RowNav";
import HistoryItems from "@/components/custom/history/HistoryItems.tsx";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
function UserHistorty(){
    const histories = [
        {
            id : 1,
            date : "10/09/2025",
            store : "Pizza hut",
            price : 500,
            order : ["1x Mi","1x Et"]
        },
        {
            id : 2,
            date : "10/09/2025",
            store : "Pizza hut",
            price : 500,
            order : ["1x Mi","1x Et"]
        },
        {
            id : 3,
            date : "10/09/2025",
            store : "Pizza hut",
            price : 500,
            order : ["1x Mi","1x Et"]
        },
        {
            id : 3,
            date : "10/09/2025",
            store : "Pizza hut",
            price : 500,
            order : ["1x Mi","1x Et"]
        },
        {
            id : 3,
            date : "10/09/2025",
            store : "Pizza hut",
            price : 500,
            order : ["1x Mi","1x Et"]
        },
        {
            id : 3,
            date : "10/08/2025",
            store : "Pizza hut",
            price : 500,
            order : ["1x Mi","1x Et"]
        },

    ]
    return(
        <>
            <NavBar num={2}/>
            <div className="bg-gray-200 min-h-screen sm:pt-7 px-0 sm:px-3 pt-17">
                <Card className="sm:ml-22 pt-5 sm:px-7 sm:w-[1370px] w-[370px] px-4">
                    <Label className="text-xl sm:text-3xl">History</Label>
                    <Label className="sm:text-lg ">Keep track of your previous purchases and completed orders.</Label>
                    <div className="pt-3 grid sm:grid-cols-4 grid-cols-1 gap-2">
                        {histories.map((history)=>{
                            return(
                                <Card className="w-[300px] px-4 pt-4 my-4 ">
                                    <div className="flex justify-between">
                                        <Label className="sm:text-lg text-base">{history.store}</Label>
                                        <Label className="sm:text-lg text-base mr-2">฿{history.price}</Label>
                                    </div> 
                                    <div className="flex justify-between">
                                        <Label className="mt-2">{history.date}</Label>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                            <Button className="text-black bg-white hover:bg-white text-3xl mr-0 cursor-pointer">&rarr;</Button>
                                            </DialogTrigger>
                                            <DialogContent className="w-[300px]">
                                                <DialogTitle>Order List: </DialogTitle>
                                                {history.order.map((menu)=>(
                                                    <DialogDescription>{menu}</DialogDescription>
                                                ))}
                                            </DialogContent>
                                        </Dialog>
                                    </div>  
                                    
                                </Card>
                            )
                        })}
                    </div>
                </Card>
            </div>
            <NavRow num={2}/>
        </>
    )
}

export default UserHistorty;