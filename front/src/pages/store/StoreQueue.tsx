import DisplayMenu from "@/components/custom/store/DisplayMenu.tsx";
import StarPic from "@/assets/home/star-solid-full.svg";
import { Card,CardHeader,CardContent} from '@/components/ui/card'
import { Button } from '@/components/ui/button' ;
import { Label } from '@/components/ui/label';
import NavBarSt from '@/components/custom/global/NavBar_Store';
import RowBar from '@/components/custom/global/RowNav_Store';
import React, { useEffect,useState } from 'react';
export default function StoreQueue(){

    return(
        <div>
            <NavBarSt num={0}/>
            <div className="min-h-screen bg-[#faf0d2] bg-gradient-to-r from-[#faf0d2] via-[#f2ce9b] to-[#f79000] pt-7 px-3">
            <Card className=" sm:ml-22 sm:mr-5 mt-16">
                <CardHeader>
                    <Label className="sm:text-3xl text-xl mb-3">Store's Queue</Label>
                    <Label className="text-base sm:text-lg">Here’s the list of current orders waiting to be prepared or completed. Click Finish when an order is ready!</Label>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-3 grid-cols-1  overflow-x-auto pb-4">
                        <Card className="w-[270px] sm:min-w-[400px] mr-3 mb-3 shadow-xl border-3">
                            <div className="mx-3">
                                <div className="flex justify-between mb-2">
                                    <Label className="text-xl">Order ID:</Label>
                                    <Button className="bg-white text-black text-xl hover:bg-white cursor-pointer">X</Button>
                                </div>
                                <hr className="border-2"/>
                                <Label className="text-lg mt-2">Order List</Label>
                                <Label className="text-lg">1x Pizza</Label>
                                <Label className="text-lg">1x Pizza</Label>
                                <div className="flex justify-end">
                                    <Button className="mt-3 mr-3 bg-green-500 hover:bg-white hover:text-green-500 border-2 border-green-500 cursor-pointer">Finish</Button>
                                </div>
                            </div>
                        </Card>     
                </CardContent>
            </Card> 
        </div>
        <RowBar num={0}/>
    </div>

    )
}