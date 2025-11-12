export default function Queue(){
    return(
        <>  
            <div className="absolute top-5 left-5">
                <p>&lt; Back</p>
            </div>
            <div className="text-center mt-10">
                <h1 className="font-bold text-4xl">Order Status</h1>
                <div className="w-60 h-60 bg-amber-300 mx-auto"></div>
                <p className="text-2xl">The restaurant is preparing your order</p>
                <div className="">
                    <img className="mx-auto" src="./src/assets/queue/progress bar.jpg"></img>
                </div>
                <div className="px-50 text-xl">
                    <div className="text-left">
                        <p>Order No: 086</p>
                        <p>Order Type: Pick-up</p>
                        <p>Payment: Promptpay</p>
                        <p>Date: 25 May 2025</p>
                    </div>
                    <hr></hr>
                    <div>
                        <h1 className="font-bold text-xl">Order details</h1>
                        <ul>
                            <li>
                                <div className="flex flex-row justify-between mb-5">
                                    <div className="text-left">
                                        <p>x1 Pizza</p>
                                        <p className=" ml-5 text-gray-500 text-md">no mushroom</p>
                                    </div>
                                    <div className="text-right">
                                        <p>฿100</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-row justify-between mb-5">
                                    <div className="text-left">
                                        <p>x1 Pizza</p>
                                        <p className=" ml-5 text-gray-500 text-md">no mushroom</p>
                                    </div>
                                    <div className="text-right">
                                        <p>฿100</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-row justify-between mb-5">
                                    <div className="text-left">
                                        <p>x1 Pizza</p>
                                        <p className=" ml-5 text-gray-500 text-md">no mushroom</p>
                                    </div>
                                    <div className="text-right">
                                        <p>฿100</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}