function HomeSideBar(){
    return(
        <div className="bg-white w-1/14 h-screen float-left">
            <div className="flex justify-center my-10">
                <img src="./src/assets/home/circle-user-solid-full.svg" className="w-15 h-15"></img>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex justify-center">
                    <img src="./src/assets/home/house-regular-full-active.svg" 
                        className="w-13 h-13 hover:bg-amber-100 rounded-2xl p-2"></img>
                </div>
                <div className="flex justify-center">
                    <img src="./src/assets/home/house-regular-full-active.svg" 
                        className="w-13 h-13 hover:bg-amber-100 rounded-2xl p-2"></img>
                </div>
                <div className="flex justify-center">
                    <img src="./src/assets/home/house-regular-full-active.svg" 
                        className="w-13 h-13 hover:bg-amber-100 rounded-2xl p-2"></img>
                </div>
                <div className="flex justify-center">
                    <img src="./src/assets/home/house-regular-full-active.svg" 
                        className="w-13 h-13 hover:bg-amber-100 rounded-2xl p-2"></img>
                </div>
            </div>
        </div>
    )
}

export default HomeSideBar;