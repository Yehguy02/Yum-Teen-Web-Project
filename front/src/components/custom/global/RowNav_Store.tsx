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

import LogoutDefault from "@/assets/home/icon/logout.svg"
import LogoutActive from "@/assets/home/icon/logout_yellow.svg"

function NavBar({num} : {num : number}){
    const divs = [
        {id : "receipt", defaultSrc : receiptDefault , activeSrc : receiptActive, href : "/store/queue" },
        {id : "setting", defaultSrc : settingDefault , activeSrc : settingActive, href : "/store/setting" },
        {id : "logout", defaultSrc : LogoutDefault , activeSrc : LogoutActive, href : "/store/logout" }
    ]
    
    return(
        <div className="bg-white w-full h-20 fixed top-0 left-0 flex justify-center sm:hidden">
            {/* 255 213 61 */}
            <div className="flex flex-row gap-6 items-center mt-0">
                {divs.map((div) => (
                    <Link to={div.href}>
                        <div className="flex justify-center cursor-pointer hover:bg-gray-300 rounded mx-3"
                            key={div.id} id={div.id}>
                                <img src={divs[num].id === div.id ? div.activeSrc : div.defaultSrc}
                                className=" sm:w-12 sm:h-12 h-10 w-10 rounded-2xl sm:p-2"></img>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        
    )
}

export default NavBar;