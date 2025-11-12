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
            status : "preparing"
        },
        {
            id : 2,
            order_list : ["1x Pasta","2x Coke","3x Nigger"],
            store : "Pizza hut",
            status : "preparing"
        },
        {
            id : 3,
            order_list : ["1x Pasta","2x Coke"],
            store : "Pizza hut",
            status : "preparing"
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
                            <Card key={order.id} className="bg-white my-5 mr-5 p-5 w-full cursor-pointer" onClick={() => toggleOrder(order.id)}>
                                <Label>Store : {order.store}</Label>
                                <hr />
                                <Label>ID : {order.id}</Label>
                                <Label>Status : {order.status}</Label> 
                                {visibleOrder === order.id && (
                                    <div className="mt-2">
                                    <Label className="text-lg">Details:</Label>
                                    {order.order_list.map((menu, index) => (
                                        <Label key={index} className="block my-2">
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