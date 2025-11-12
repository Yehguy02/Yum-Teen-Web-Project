import NavBar from "@/components/custom/global/NavBar";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
function UserCurrent(){
    const current_orders = [
        {
            id : 1,
            order_list : ["1x Pasta","2x Coke"],
            store : "Pizza hut",
            status : "Preparing"
        },
        {
            id : 2,
            order_list : ["1x Pasta","2x Coke","3x Nigger"],
            store : "Pizza hut",
            status : "Ready to pick up"
        },
        {
            id : 3,
            order_list : ["1x Pasta","2x Coke"],
            store : "Pizza hut",
            status : "Received"
        },
    ]
    const [visibleOrder, setVisibleOrder] = useState(null);

    const toggleOrder = (id) => {
        setVisibleOrder(visibleOrder === id ? null : id);
    };
    return(
        <>
            <NavBar num={1}/>
            <div className="bg-gray-200 min-h-screen pt-7 px-3">
                <Card className="ml-22 pt-5 px-7 w-[1370px]">
                    <div className="flex justify-between">
                        <Label className="text-3xl">Current Order</Label>
                        <Button className="text-black bg-white hover:bg-white hover:underline text-lg">Back</Button>
                    </div>
                    <Label className="text-lg">See the details and status of your active orders.</Label>
                    <div>
                        {current_orders.map((order) => {
                        return(
                            <Card key={order.id} className="bg-white my-5 mr-5 p-5 w-3/8 cursor-pointer" onClick={() => toggleOrder(order.id)}>
                                <Label className="text-lg">Store : {order.store}</Label>
                                <hr />
                                <Label className="text-gray-600">ID : {order.id}</Label>
                                <Label>Status : {order.status}</Label> 
                                {visibleOrder === order.id && (
                                    <div className="mt-2">
                                    <hr />
                                    <Label className="text-lg text-red-700 mt-3">Details:</Label>
                                    {order.order_list.map((menu, index) => (
                                        <Label key={index} className="my-2 text-red-700">
                                        {menu}
                                        </Label>
                                    ))}
                                    </div>
                                )}
                            </Card>
                            )
                        })}
                        </div>
                </Card>
            </div>
        </>
    )
}

export default UserCurrent;