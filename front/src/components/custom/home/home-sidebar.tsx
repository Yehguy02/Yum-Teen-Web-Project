import { useState } from "react";
function HomeSideBar(){
    const divs = [
        {id : "home", defaultSrc : "./src/assets/home/icon/house-regular-full.svg" , activeSrc : "./src/assets/home/icon/house-regular-full-active.svg" },
        {id : "order", defaultSrc : "./src/assets/home/icon/bell-regular-full.svg" , activeSrc : "./src/assets/home/icon/bell-regular-full-active.svg" },
        {id : "receipt", defaultSrc : "./src/assets/home/icon/receipt-solid-full.svg" , activeSrc : "./src/assets/home/icon/receipt-solid-full-active.svg" },
        {id : "favourite", defaultSrc : "./src/assets/home/icon/heart-regular-full.svg" , activeSrc : "./src/assets/home/icon/heart-regular-full-active.svg" },
        {id : "setting", defaultSrc : "./src/assets/home/icon/gear-solid-full.svg" , activeSrc : "./src/assets/home/icon/gear-solid-full-active.svg" }
    ]
    const [activeId, setActiveId] = useState<string | null>("home");
    
    return(
        <div className="bg-white w-1/20 h-screen float-left fixed">
            <div className="flex justify-center my-10">
                <img src="./src/assets/home/icon/circle-user-solid-full.svg" className="w-15 h-15"></img>
            </div>
            {/* 255 213 61 */}
            <div className="flex flex-col gap-4">
                {divs.map((div) => (
                    <div className="flex justify-center cursor-pointer"
                        key={div.id} id={div.id} onClick={()=>{setActiveId(div.id)}}>
                            <img src={activeId === div.id ? div.activeSrc : div.defaultSrc}
                            className="w-12 h-12 rounded-2xl p-2"></img>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeSideBar;