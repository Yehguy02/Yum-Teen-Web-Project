
export default function ConfirmOrder_PaymentMethod(){
    return(
        <div className="bg-white p-5">
            <h1 className="font-bold text-black mb-5">Payment Method</h1>
            <div className="flex flex-row gap-5">
                <div className="flex w-35 h-20 shadow-md items-center">
                    <img src="./src/assets/confirmOrder/money-bills-solid-full.svg" className="w-20 h-15 m-auto"></img>
                </div>
                <div className="w-35 h-20 shadow-md">
                    <img src="./src/assets/confirmOrder/yumTeen_logo.png" className="w-35 h-20"></img>
                </div>
                <div className="border-b-2 border-green-500 w-35 h-20 shadow-md">
                    <img src="./src/assets/confirmOrder/PromptPay-logo.png" className="w-35 h-20"></img>
                </div>
            </div>
        </div>
    )
}