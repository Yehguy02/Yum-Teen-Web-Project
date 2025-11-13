import DisplayMenu from "@/components/custom/global/DisplayMenuGlobal";
import StarPic from "@/assets/home/star-solid-full.svg";
import { Card,CardHeader,CardContent,CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button' 
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import RowBar from '@/components/custom/global/RowNav_Store';
import NavBar_Store from "@/components/custom/global/NavBar_Store";
import type { Store } from "@/index";

export default function StoreSetting(){
    const [isEdit,setEdit] = useState(false);
    const [isDetail,setDetail] = useState(false);
    type Payment = "Cash" | "PromptPay" | "All";

    const [storeInfo, setStoreInfo] = useState<Store>( {
        name: "Store name",
        id: 1,
        description: "Thai food or not, idk",
        payment: "All",
        avg_time: [10, 15],
        category : ["Thai", "Northern Thai Food"]
    });
    return(
        <>
        <NavBar_Store num={1}/>
        <div className="mt-3 bg-gray-200 w-full min-h-screen flex flex-row justify-between bg-[#faf0d2] bg-gradient-to-r from-[#faf0d2] via-[#f2ce9b] to-[#f79000]">
        <Card className="my-5 sm:ml-22 mx-2 sm:mr-5 w-full sm:w-auto max-w-full">
            <div className="w-full h-50 bg-blue-500 rounded-t-2xl">
            </div>
            <div className="bg-white w-full sm:w-[1375px]">
                <div className="px-4 sm:px-10 py-3">
                    <div className="flex justify-between">
                        {isEdit ? (
                        <> 
                            <Input className="w-1/4 mb-2" placeholder={storeInfo.name}/>
                        </>
                        ):(
                        <>
                            <h1 className="font-bold text-2xl">{storeInfo.name}</h1>
                        </>
                        )}
                        <Button onClick={()=>setEdit(!isEdit)} className="hover:bg-white border-2 bg-green-700 hover:text-green-700 border-green-700">Edit Store</Button>
                    </div>
                    {isEdit ? (
                        <>
                            <Input className="mb-5 text-gray-500 w-3/8" placeholder={storeInfo.description} />
                        </>
                        ):(
                        <>
                            <p className="mb-5 text-gray-500">{storeInfo.description}</p>
                        </>
                        )}
                    <div className="flex flex-row gap-2">
                        {storeInfo.category ? storeInfo.category.map((category) => {
                        return(
                            <div className="border-1 border-black px-1.5 rounded">{category}</div>
                        )
                        }) : (
                        <></>
                        )}
                    </div>
                </div>
                <br />
                <hr className="mx-4 pd-3"/>
                {isEdit ? ( 
                    <>
                    <Card className="m-2 sm:m-5 shadow-xl w-[300px] sm:w-[1340px]">
                        <CardHeader>
                            <div className="flex justify-between">
                                <CardTitle className="text-center text-2xl mb-3">All Menu List</CardTitle>
                                <Dialog>
                                    <form action="">
                                        <DialogTrigger asChild>
                                            <Button className="bg-green-500 hover:bg-white hover:text-green-500 border-2 border-green-500 text-white"variant="outline">Add Menu</Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Add Menu</DialogTitle>
                                                <DialogDescription>
                                                Add new items to your store&apos;s menu. Fill in the details and click save when you&apos;re done.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="grid gap-4">
                                                <div className="grid gap-3">
                                                    <Label htmlFor="name-1">Name</Label>
                                                    <Input id="name-1" name="name" defaultValue="Pad Kra pow" />
                                                </div>
                                                <div className="grid gap-3">
                                                    <Label htmlFor="id-1">ID</Label>
                                                    <Input id="id-1" name="id" defaultValue="001" />
                                                </div>
                                                <div className="grid gap-3">
                                                    <Label htmlFor="price-1">Price</Label>
                                                    <Input id="price-1" name="price" defaultValue="50" />
                                                </div>
                                                <div className="grid gap-3">
                                                    <Label htmlFor="discount-1">Discount Price</Label>
                                                    <Input id="discount-1" name="discount" defaultValue="50" />
                                                </div>
                                            </div>
                                                <DialogFooter>
                                                <DialogClose asChild>
                                                    <Button className="bg-white-100 text-red-700 border-red-700 border-2 hover:bg-red-700 hover:text-white transition duration-300" variant="outline">Cancel</Button>
                                                </DialogClose>
                                                    <Button type="submit" className="bg-green-500 hover:bg-white hover:text-green-500 border-2 border-green-500 cursor-pointer">Save changes</Button>
                                                </DialogFooter>
                                        </DialogContent>
                                    </form>
                                </Dialog>
    
                            </div>
                            
                        </CardHeader>
                        <CardContent>
                            <Card className="w-full">
                            <div className="flex justify-between">
                                <Label className="mx-5">Menu Name</Label>
                                <div>
                                    <Button className="hover:bg-white border-2 bg-red-700 hover:text-green-700 border-red-700 mx-3">Delete</Button>
                                </div>
                            </div>
                            {isDetail ? (
                                <div className="mx-5 w-2/4">
                                    <Input className="mb-3" placeholder="Name"/>
                                    <Input className="mb-3" placeholder="ID"/>
                                    <Input className="mb-3" placeholder="Price"/>
                                    <Input className="mb-3" placeholder="Discount"/>
                                    <div>
                                        <Button className="hover:bg-white border-2 bg-green-700 hover:text-green-700 border-green-700">Save</Button>
                                        <Button className="hover:bg-white border-2 bg-red-700 hover:text-green-700 border-red-700 mx-3">Clear</Button>
                                    </div>          
                                </div>
                            ):(
                                <></>
                            )}
                            </Card>
                            
                        </CardContent>
                    </Card>
                    </>
                ) : (
                <>
                    <DisplayMenu title="Popular Now!"/>
                    <DisplayMenu title="Popular Now!"/>
                </>
                )}e
            </div>
        </Card>
        </div>
        <RowBar num ={1}/>
        </>
    )
}