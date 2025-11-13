import NavBar from "@/components/custom/global/NavBar";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import type { Order, Menu } from "@/index";
import { userAPI } from "@/services/api";

type Menushow = {
    id: number,
    name: string,
    base_price: number,
    note?: string
    discounted_price?: number
    img_urc?: string
}

function UserCurrent(){
    const navigate = useNavigate();
    const [currentOrder, setCurrentOrder] = useState<{
        order_id: number,
        menu_list: Menushow[],
        order_status: string,
        payment_status: boolean,
        total_price: number,
        date: string
    } | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCurrentOrder = async () => {
            try {
                const data = await userAPI.getCurrentOrder();
                console.log("Current order data:", data);
                
                // Set current order if it exists
                if (data.current) {
                    setCurrentOrder(data.current);
                } else {
                    setCurrentOrder(null);
                }
            } catch (error) {
                console.error("Failed to fetch current order:", error);
                toast.error("Failed to load current order");
                setCurrentOrder(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCurrentOrder();
    }, []);
    console.log(currentOrder);
    if (isLoading) {
        return (
            <>
                <NavBar num={1}/>
                <div className="bg-gray-200 min-h-screen pt-7 px-3">
                    <Card className="ml-22 pt-5 px-7 w-[1370px]">
                        <Label>Loading current order...</Label>
                    </Card>
                </div>
            </>
        );
    }

    return(
        <>
            <NavBar num={1}/>
            <div className="bg-gray-200 min-h-screen pt-7 px-3">
                <Card className="ml-22 pt-5 px-7 w-[1370px]">
                    <div className="flex justify-between">
                        <Label className="text-3xl">Current Order</Label>
                        <Button 
                            className="text-black bg-white hover:bg-white hover:underline text-lg"
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </Button>
                    </div>
                    <Label className="text-lg">See the details and status of your active order.</Label>
                    
                    {!currentOrder ? (
                        <Card className="bg-white my-2 mr-5 p-5 w-3/8">
                            <Label className="text-lg">No active orders</Label>
                        </Card>
                    ) : (
                        <Card className="bg-white my-2 mr-5 p-5 w-3/8">
                            <Label className="text-lg">Order ID: {currentOrder.order_id}</Label>
                            <hr />
                            <Label className="text-gray-600 text-lg">Date: {currentOrder.date}</Label>
                            <Label className="text-gray-600 text-lg">Price: ฿{currentOrder.total_price}</Label>
                            {currentOrder.menu_list.map((menu) => {
                                return(
                                    <div key={menu.id} className="mt-4 flex flex-col gap-1">
                                        <Label className="font-semibold">{menu.name}</Label>
                                        <Label className="text-gray-600">price: ฿{menu.base_price}</Label>
                                        {menu.note ? (<Label className="text-gray-600">note: {menu.note}</Label>) : (<></>)}
                                    </div>
                                )
                            })}
                        </Card>
                    )}
                </Card>
            </div>
        </>
    )
}

export default UserCurrent;