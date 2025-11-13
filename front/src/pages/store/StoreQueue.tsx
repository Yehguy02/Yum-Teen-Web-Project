import DisplayMenu from "@/components/custom/store/DisplayMenu.tsx";
import StarPic from "@/assets/home/star-solid-full.svg";
import { Card,CardHeader,CardContent,CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button' 
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import NavBarSt from '@/components/custom/global/NavBar_Store'
import type { Queue } from "@/index";


export default function StoreQueue(){
    const [storeInfo, setStoreInfo] = useState<Queue[]>(
        [
            {
                id: 1,
                store: "Store name",
                order: ["1x Pizza", "2x Coke"],
                status: "preparing",
                price : 250,
                date : "2024-07-20 14:30"
            },
            {
                id: 2,
                store: "Store name",
                order: ["1x Pizza", "2x Coke"],
                status: "preparing",
                price : 250,
                date : "2024-07-20 14:30"
            },
        ]
    );
    return(
        <div>
            <NavBarSt num={1}/>
            <div className="min-h-screen bg-[#faf0d2] bg-gradient-to-r from-[#faf0d2] via-[#f2ce9b] to-[#f79000] pt-7 px-3">
            <Card className=" ml-22 mr-5">
                <CardHeader>
                    <div className="flex justify-between">
                        <Label className="text-3xl mb-3">Store's Queue</Label>
                        <Button className="text-black bg-white hover:bg-white hover:underline text-lg">Back</Button>
                    </div>
                    <Label className="text-lg">Here’s the list of current orders waiting to be prepared or completed. Click Finish when an order is ready!</Label>
                </CardHeader>
                <CardContent className="grid grid-cols-3 overflow-x-auto pb-4">
                    {storeInfo.map((order)=>(
                        <Card key={order.id} className="min-w-[400px] mr-3 mb-3 shadow-xl border-3">
                            <div className="mx-3">
                                <div className="flex justify-between mb-2">
                                    <Label className="text-xl">Order ID: {order.id}</Label>
                                    <Button className="bg-white text-black text-xl hover:bg-white cursor-pointer">X</Button>
                                </div>
                                <hr className="border-2"/>
                                <Label className="text-lg mt-2">Order List</Label>
                                {order.order.map((menu, index) => (
                                    <Label key={index} className="text-lg">{menu}</Label>
                                ))}
                                <div className="flex justify-end">
                                    <Button className="mt-3 mr-3 bg-green-500 hover:bg-white hover:text-green-500 border-2 border-green-500 cursor-pointer">Finish</Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                

                </CardContent>
            </Card> 
        </div>
    </div>
    )
}