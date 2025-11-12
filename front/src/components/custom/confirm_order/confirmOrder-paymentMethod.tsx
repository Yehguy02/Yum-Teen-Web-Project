import cashImg from "@/assets/confirmOrder/money-bills-solid-full.svg";
import yumTeenWalletImg from "@/assets/confirmOrder/yumTeen_logo.png";
import PromptpayImg from "@/assets/confirmOrder/PromptPay-logo.png";

export default function ConfirmOrder_PaymentMethod(){
    return(
        <div className="bg-white p-5">
            <h1 className="font-bold text-black mb-5">Payment Method</h1>
            <div className="flex flex-row gap-5">
                <div className="flex w-35 h-20 shadow-md items-center">
                    <img src={cashImg} className="w-20 h-15 m-auto"></img>
                </div>
                <div className="w-35 h-20 shadow-md">
                    <img src={yumTeenWalletImg} className="w-35 h-20"></img>
                </div>
                <div className="w-35 h-20 shadow-md border-t-5 border-green-500">
                    <img src={PromptpayImg} className="w-35 h-20"></img>
                </div>
            </div>
        </div>
    )
}