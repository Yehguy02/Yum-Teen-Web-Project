

function Home(){
    return(
        <div className="w-screen h-screen bg-white flex flex-row justify-between">
            {/* -------- LEFT MENU BAR --------*/}
            <div className="bg-gray-100 w-1/16 h-full">
                <div className="flex justify-center">
                    <div className="bg-black rounded-full p-1.5 mt-10 mb-20">
                        <img src="../src/assets/Home/icon/user-solid-full.svg" className="w-8"></img>
                    </div>
                </div>
                <div className="flex flex-col gap-7" id="menu-bar">
                    <div className="flex justify-center">
                        <img src="../src/assets/Home/icon/house-regular-full.svg" className="w-10"></img>
                    </div>
                    <div className="flex justify-center">
                        <img src="../src/assets/Home/icon/heart-regular-full.svg" className="w-10"></img>
                    </div>
                    <div className="flex justify-center">
                        <img src="../src/assets/Home/icon/credit-card-regular-full.svg" className="w-10"></img>
                    </div>
                </div>
                <div className="bg-amber-300 w-1 h-10 float-right absolute left-6/100 top-41"></div>
            </div>
            {/* -------- MAIN -------- */}
            <div className="bg-white h-full flex flex-col">
                <div className="bg-gray-100 text-gray-500 w-250 h-15 p-5 rounded-lg mt-5 content-center flex flex-row justify-between">
                    <div className="flex flex-row content-center gap-5">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input className="focus:outline-none w-200 placeholder-gray-200" type="text" placeholder="What do you wanna eat?">
                        </input>
                    </div>
                    <div>
                        <i class="fa-solid fa-filter"></i>
                    </div>
                </div>
                <div className="w-full py-5">
                    <div className="bg-purple-600 w-full h-100 rounded-2xl"></div>
                </div>
                <div className="w-full h-100">
                    <h1>Category</h1>
                    <div className="flex flex-row gap-10 text-center">
                        <div className="flex flex-col content-center bg-gray-200 w-25 rounded-2xl">
                            <img src="../src/assets/Home/img/pngtree-curry-rice-gourmet-catering-transparent-png-image_9121321.png" className="w-20 mx-auto"></img>
                            <p>Rice</p>
                        </div>
                        <div className="flex flex-col content-center bg-gray-200 w-25 rounded-2xl">
                            <img src="../src/assets/Home/img/pngtree-noodles-png-image_11080064.png" className="w-20 mx-auto"></img>
                            <p>Noodle</p>
                        </div>
                        <div className="flex flex-col content-center bg-gray-200 w-25 rounded-2xl">
                            <img src="../src/assets/Home/img/pngtree-hainanese-chicken-rice-served-on-a-plate-with-dipping-sauce-png-image_10023903.png" className="w-20 mx-auto"></img>
                            <p>Noodle</p>
                        </div>
                        <div className="flex flex-col content-center bg-gray-200 w-25 rounded-2xl">
                            <img src="../src/assets/Home/img/pngtree-beef-rice-bowl-topped-with-a-sunny-side-up-egg-png-image_19531225.png" className="w-20 mx-auto"></img>
                            <p>Noodle</p>
                        </div>
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
