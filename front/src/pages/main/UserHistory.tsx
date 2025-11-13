import NavBar from "@/components/custom/global/NavBar";
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
import { useState } from "react";
import type {  Order } from "@/index";

type Queue = {
    date : string,
    menu_list : Order[],
    order_id : number,
    order_status : string,
    payment_status : boolean
    total_price : number
}
function UserHistorty(){
    const [histories, setHistories] = useState<Queue[]>([]);
    const fetchCurrentOrder = async () => {
        const res = await fetch("http://localhost:8000/user/history");
        if(res.ok){
            const data = await res.json();
            setHistories(data.order_history);
        }
    }
    console.log(histories);

    fetchCurrentOrder();
    return(
        <>
            <NavBar num={2}/>
            <div className="bg-gray-200 min-h-screen pt-7 px-3">
                <Card className="ml-22 pt-5 px-7 w-[1370px]">
                    <div className="flex justify-between">
                        <Label className="text-3xl">Current Order</Label>
                        <Button className="text-black bg-white hover:bg-white hover:underline text-lg">Back</Button>
                    </div>
                    <Label className="text-lg">Keep track of your purchases and orders.</Label>
                    <div className="pt-3 grid grid-cols-4">
                        {histories ? (
                            histories.map((history, index) => (
                                <Card key={index} className="w-[300px] px-4 pt-4 my-4">
                                <div className="flex justify-between">
                                    <Label className="text-lg">{history.date}</Label>
                                    <Label className="text-lg mr-2">฿{history.total_price}</Label>
                                </div> 

                                <div className="flex justify-end">

                                    <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className="text-black bg-white hover:bg-white text-3xl mr-0 cursor-pointer">
                                        &rarr;
                                        </Button>
                                    </DialogTrigger>

                                    <DialogContent className="w-[300px]">
                                        <DialogTitle>Order List:</DialogTitle>
                                        {history.menu_list && history.menu_list.length > 0 ? (
                                        history.menu_list.map((menu, i) => (
                                            <DialogDescription key={i}>{menu.name}</DialogDescription>
                                        ))
                                        ) : (
                                        <DialogDescription>No items</DialogDescription>
                                        )}
                                    </DialogContent>
                                    </Dialog>
                                </div>
                                </Card>
                            ))
                            ) : (
                            <>Loading...</>
                            )}
                    </div>
                </Card>
            </div>
        </>
    )
}

export default UserHistorty;