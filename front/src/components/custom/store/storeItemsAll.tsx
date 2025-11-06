import StoreItems from "./storeItems"
export default function StoreItemsAll(){
    return(
        <>
            <div className="p-5">
                <h1 className="font-bold text-xl mb-3">Popular Now!</h1>
                <div className="flex flex-row flex-wrap gap-7">
                    <StoreItems name="Food" base_price={100}/>
                    <StoreItems name="Food" base_price={100} discounted_price={70}/>
                    <StoreItems name="Food" base_price={100}/>
                    <StoreItems name="Food" base_price={100}/>
                    <StoreItems name="Food" base_price={100}/>
                    <StoreItems name="Food" base_price={100}/>
                    <StoreItems name="Food" base_price={100}/>
                    <StoreItems name="Food" base_price={100}/>
                </div>
            </div>
            <div className="p-5">
                <h1 className="font-bold text-xl mb-3">Popular Now!</h1>
                <div className="flex flex-row flex-wrap gap-7">
                    <StoreItems name="Food" base_price={100}/>
                    <StoreItems name="Food" base_price={100}/>
                    <StoreItems name="Food" base_price={100}/>
                    <StoreItems name="Food" base_price={100}/>
                    <StoreItems name="Food" base_price={100}/>
                    <StoreItems name="Food" base_price={100}/>
                    <StoreItems name="Food" base_price={100}/>
                    <StoreItems name="Food" base_price={100} discounted_price={90}/>
                </div>
            </div>
        </>
    )
}