import DisplayMenu from "@/components/custom/store/DisplayMenu.tsx";
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
import NavBar_Store from "@/components/custom/global/NavBar_Store";
export default function StoreSetting(){
    const [isEdit,setEdit] = useState(false);
    const [isDetail,setDetail] = useState(false);
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
        <div className="bg-gray-200 w-screen min-h-screen flex flex-row justify-between  bg-[#faf0d2] bg-gradient-to-r from-[#faf0d2] via-[#f2ce9b] to-[#f79000]">
        <NavBar_Store num={3}/>
        <Card className="my-5 ml-22 mr-5 p-0">
            <div className="w-full h-50 bg-blue-500 rounded-t-2xl">
            </div>
            <div className="bg-white w-full">
                <div className="px-10 py-3">
                    <div className="flex justify-between">
                        {isEdit ? (
                        <> 
                            <Input className="w-1/4 mb-2" placeholder={store.name}/>
                        </>
                        ):(
                        <>
                            <h1 className="font-bold text-2xl">{store.name}</h1>
                        </>
                        )}
                        <Button onClick={()=>setEdit(!isEdit)} className="hover:bg-white border-2 bg-green-700 hover:text-green-700 border-green-700">Edit Store</Button>
                    </div>
                    {isEdit ? (
                        <>
                            <Input className="mb-5 text-gray-500 w-3/8" placeholder={store.description} />
                        </>
                        ):(
                        <>
                            <p className="mb-5 text-gray-500">{store.description}</p>
                        </>
                        )}
                    <div className="flex flex-row gap-2 text-sm">
                        <div className="flex flex-row gap-1 items-center border-1 rounded px-1 py-0.5">
                            <img className="bg-amber-300 w-4 h-4 rounded-full p-0.5" src={StarPic}></img>
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
                <br />
                <hr className="mx-4 pd-3"/>
                {isEdit ? ( 
                    <>
                    <Card className="m-5 shadow-xl w-[1340px]">
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
                            <Card className="w-3/8">
                            <div className="flex justify-between">
                                <Label className="mx-5">Menu Name</Label>
                                <div>
                                    <Button className="hover:bg-white border-2 bg-green-700 hover:text-green-700 border-green-700" onClick={()=>setDetail(!isDetail)}>Edit</Button>
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
                )}
            </div>
        </Card>
        </div>
    )
}