import { Link } from "react-router";
import homeDefault from "@/assets/home/icon/house-regular-full.svg";
import homeActive from "@/assets/home/icon/house-regular-full-active.svg";

import orderDefault from "@/assets/home/icon/bell-regular-full.svg";
import orderActive from "@/assets/home/icon/bell-regular-full-active.svg";

import receiptDefault from "@/assets/home/icon/receipt-solid-full.svg";
import receiptActive from "@/assets/home/icon/receipt-solid-full-active.svg";

import favDefault from "@/assets/home/icon/heart-regular-full.svg";
import favActive from "@/assets/home/icon/heart-regular-full-active.svg";

import settingDefault from "@/assets/home/icon/gear-solid-full.svg";
import settingActive from "@/assets/home/icon/gear-solid-full-active.svg";

function NavBar({num} : {num : number}){
    const divs = [
        {id : "home", defaultSrc : homeDefault, activeSrc : homeActive, href : "/" },
        {id : "order", defaultSrc : orderDefault , activeSrc : orderActive, href : "/user/current" },
        {id : "receipt", defaultSrc : receiptDefault , activeSrc : receiptActive, href : "/user/history" },
        {id : "favourite", defaultSrc : favDefault , activeSrc : favActive, href : "/user/favourite" },
        {id : "setting", defaultSrc : settingDefault , activeSrc : settingActive, href : "/user/setting" }
    ]
    
    return(
        <div className="bg-white w-1/20 h-screen float-left fixed">
            {/* 255 213 61 */}
            <div className="flex flex-col gap-4 mt-20">
                {divs.map((div) => (
                    <Link to={div.href} key={div.id}>
                        <div className="flex justify-center cursor-pointer"id={div.id}>
                            <img src={divs[num].id === div.id ? div.activeSrc : div.defaultSrc}
                            className="w-12 h-12 rounded-2xl p-2"></img>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NavBar;