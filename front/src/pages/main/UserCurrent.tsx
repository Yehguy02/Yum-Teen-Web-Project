import NavBar from "@/components/custom/global/NavBar";
function UserCurrent(){
    const current_orders = [
        {
            id : 1,
            store : "Pizza hut",
            status : "preparing"
        },
        {
            id : 2,
            store : "Pizza hut",
            status : "preparing"
        },
        {
            id : 3,
            store : "Pizza hut",
            status : "preparing"
        },
    ]
    return(
        <>
            <div className="bg-gray-200 min-h-screen">
                <NavBar num={1}/>
                <div className="pl-25 pt-5">
                    <h1 className="font-bold text-2xl">Current Order</h1>
                    {current_orders.map((order) => {
                        return(
                            <div key={order.id} className="bg-white my-5 p-5">
                                <p>Store : {order.store}</p>
                                <p>ID : {order.id}</p>
                                <p>{order.status}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default UserCurrent;