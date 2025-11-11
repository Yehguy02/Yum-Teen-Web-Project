import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
export default function ConfirmOrder_Promo(){
    return( 
        <div className="bg-white p-5 flex flex-col gap-3">
            <h1 className="font-bold">Promotion Code</h1>
            <div className="flex flex-row gap-3 justify-between">
                <Input className="border-2 border-gray-700 h-[40p]"></Input>
                <Button className="bg-green-500 text-sm hover:bg-white hover:text-green-500 border-green-500 border-2">Apply</Button>
            </div>
        </div>
    )
}