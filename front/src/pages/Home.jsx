

function Home(){
    return(
        <div className="w-screen h-screen bg-white flex flex-row justify-between">
            {/* -------- LEFT MENU BAR --------*/}
            <div className="bg-gray-100 w-1/16 h-full">
            </div>
            {/* -------- MAIN -------- */}
            <div className="bg-white h-full">
                <div className="bg-gray-100 text-gray-500 w-250 h-15 p-5 rounded-lg mt-5 content-center flex flex-row justify-between">
                    <div className="flex flex-row content-center gap-5">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input className="focus:outline-none w-200 placeholder-gray-400" type="text" placeholder="What do you wanna eat?">
                        
                        </input>
                    </div>
                    <div>
                        <i class="fa-solid fa-filter"></i>
                    </div>
                </div>
            </div>
            {/* -------- MY ORDER -------- */}
            <div className="bg-gray-100 w-1/4 h-full">
                <h1>My Order</h1>
                <h2>Add Food in your order to start</h2>
            </div>
        </div>
    )
}
export default Home;
