export default function DisplayStoreItems({name, base_price, discounted_price = 0, img_src} : {name : string, base_price : number, discounted_price? : number, img_src? : string;}){
    return(
        <div className="w-50 h-50">
            <div className="bg-blue-700 w-full h-40 rounded-xl">
                <img src={img_src}></img>
            </div>
            <div className="px-2">
                <h1>{name}</h1>
                <div className="flex flex-row justify-between">
                    {discounted_price > 0 ? (
                        <div className="flex flex-row gap-1">
                            <p className="line-through text-gray-400">฿{base_price}</p>
                            <p>฿{discounted_price}</p>
                        </div>
                    ): (
                        <p>฿{base_price}</p>
                    )}
                    <div className="bg-amber-300 w-5 h-5 text-center text-white rounded-full flex"></div>
                </div>
            </div>
        </div>
    )
}