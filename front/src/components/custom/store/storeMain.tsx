import StoreItemsAll from "./storeItemsAll";
export default function StoreMain(){
    type Payment = "Cash" | "PromptPay" | "All";
    const store : {name : string, id : string,description : string , star : number, payment : Payment, avg_time : number[]} = {
        name : "Store name",
        id : "1",
        description : "Thai food or not, idk",
        star : 4.3,
        payment : "All",
        avg_time : [10, 15]
    }
    return(
        <div className="w-screen ml-24 mr-90">
            <div className="w-full h-50 bg-blue-500">

            </div>
            <div className="bg-white w-full">
                <div className="px-10 py-3">
                    <h1 className="font-bold text-2xl">{store.name}</h1>
                    <p className="mb-5 text-gray-500">{store.description}</p>
                    <div className="flex flex-row gap-2 text-sm">
                        <div className="flex flex-row gap-1 items-center border-1 rounded px-1 py-0.5">
                            <img className="bg-amber-300 w-4 h-4 rounded-full p-0.5" src="./src/assets/home/star-solid-full.svg"></img>
                            <p>{store.star}</p>
                        </div>
                        {store.payment === "Cash" || store.payment === "All" ? (
                            <div className="border-1 rounded px-1 py-0.5">
                                <p>Cash</p>
                            </div>
                        ) : (
                            <></>
                        )}
                        {store.payment === "PromptPay" || store.payment === "All" ? (
                            <div className="border-1 rounded px-1 py-0.5">
                                <p>PromptPay</p>
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className="border-1 rounded px-1 py-0.5">
                            <p>{store.avg_time[0]}-{store.avg_time[1]} mins</p>
                        </div>
                    </div>
                </div>
                <StoreItemsAll/>
            </div>
        </div>
    )
}