export default function StoreMain(){
    type Payment = "Cash" | "PromptPay" | "All";
    const store : {name : string, id : string, star : number, payment : Payment} = {
        name : "Store name",
        id : "1",
        star : 4.3,
        payment : "PromptPay"
    }
    return(
        <div className="w-screen ml-30 mr-90">
            <div className="w-full h-50 bg-blue-500">

            </div>
            <div className="w-full h-100">
                <div>
                    <h1>Store Name</h1>
                    <div className="flex flex-row">
                        <div className="flex flex-row gap-1 items-center border-1 rounded">
                            <img className="bg-amber-300 w-4 h-4 rounded-full p-0.5" src="./src/assets/home/star-solid-full.svg"></img>
                            <p>{store.star}</p>
                        </div>
                        {store.payment === "Cash" || store.payment === "All" ? (
                            <div className="border-1 rounded">
                                <p>Cash</p>
                            </div>
                        ) : (
                            <></>
                        )}
                        {store.payment === "PromptPay" || store.payment === "All" ? (
                            <div className="border-1 rounded">
                                <p>PromptPay</p>
                            </div>
                        ) : (
                            <></>
                        )}
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}