import { useState, useRef } from "react";

export default function ConfirmOrder_Promo({discount, setDiscount} : {discount : number, setDiscount : React.Dispatch<React.SetStateAction<number>>;}){
    const [ promocode, setPromocode] = useState("");
    const [success, setSuccess] = useState(true);
    const result = useRef<HTMLParagraphElement>(null);

    const handleApply = async () => {
        const res = await fetch("http://localhost:8000/user/coupons/" + promocode);
        const code_raw = (await res.json())
        console.log(console.log())
        const code = code_raw.results;
        if (!code || isNaN(code)){
            result.current!.textContent = "Invalid Promocode!";
            setSuccess(false);
        }else{
            result.current!.textContent = "Promode used!";
            setSuccess(true);
            const newDiscount = discount + code.discount;
            setDiscount(newDiscount);
        }
    }
    const color = success ? "text-green-500" : "text-red-500";
    return( 
        <div className="bg-white p-5 flex flex-col gap-3">
            <h1 className="font-bold">Promotion</h1>
            <div className="flex flex-row gap-3 items-center">
                <input className="border-1 border-gray-800 rounded px-4 py-1.5"
                value = {promocode}
                onChange={(e) => {
                    setPromocode(e.target.value)
                }}
                ></input>
                <p className="text-sm cursor-pointer" onClick={handleApply}>Apply</p>
            </div>
            <p ref={result} className={color}></p>
        </div>
    )
}