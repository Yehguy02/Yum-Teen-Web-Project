import { useRef } from "react";
function HomeSideBar(){
    
    return(
        <div className="bg-white w-1/20 h-screen float-left fixed">
            <div className="flex justify-center my-10">
                <img src="./src/assets/home/icon/circle-user-solid-full.svg" className="w-15 h-15"></img>
            </div>
            {/* 255 213 61 */}
            <div className="flex flex-col gap-4">
                <div className="flex justify-center" id="home">
                    <img src="./src/assets/home/icon/house-regular-full.svg" 
                        className="w-12 h-12 hover:bg-amber-100 rounded-2xl p-2"></img>
                </div>
                <div className="flex justify-center" id="order">
                    <img src="./src/assets/home/icon/bell-regular-full.svg" 
                        className="w-12 h-12 hover:bg-amber-100 rounded-2xl p-2"></img>
                </div>
                <div className="flex justify-center" id="receipt">
                    <img src="./src/assets/home/icon/receipt-solid-full.svg" 
                        className="w-12 h-12 hover:bg-amber-100 rounded-2xl p-2"></img>
                </div>
                <div className="flex justify-center" id="favourite">
                    <img src="./src/assets/home/icon/heart-regular-full.svg" 
                        className="w-12 h-12 hover:bg-amber-100 rounded-2xl p-2"></img>
                </div>
                <div className="flex justify-center" id="setting">
                    <img src="./src/assets/home/icon/gear-solid-full.svg" 
                        className="w-12 h-12 hover:bg-amber-100 rounded-2xl p-2"></img>
                </div>
            </div>
        </div>
    )
}

export default HomeSideBar;