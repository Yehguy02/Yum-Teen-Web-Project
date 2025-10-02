import Food_catagory from "../assets/Home/Food_catagory";
import Recommend_card from "../assets/Home/Recommend_card";

function Home(){
    return(
        <div className="w-screen bg-white min-h-screen flex flex-col">
            <div className="bg-orange-300 w-full h-20 flex flex-col">
                <div className="flex flex-row items-center w-full h-full">
                    <div id="search-bar" className="bg-white w-5/12 h-3/5 rounded-4xl m-auto">

                    </div>
                    <div id="header-profile" className="bg-red-500 rounded-full w-15 h-15 mr-15 right-0 absolute">
                    
                    </div>
                </div>
            </div>
            {/* if possible, apply px-35 to every child of big container except first child */}
            <div className="bg-blue-500 w-full h-100 flex flex-col px-35 py-10">
                <div className="bg-blue-900 w-full h-full rounded-2xl">

                </div>
            </div>
            <div className="bg-purple-500 w-full h-40 flex flex-col px-35 py-5">
                <div className="flex flex-row justify-around">
                    <Food_catagory/>
                    <Food_catagory/>
                    <Food_catagory/>
                    <Food_catagory/>
                    <Food_catagory/>
                    <Food_catagory/>
                </div>
            </div>
            <div className="bg-green-500 w-full h-100 flex flex-col gap-5 px-35 py-5">
                <h1 className="text-3xl font-bold">Recommend</h1>
                <div className="flex flex-row min-h-3/4 gap-10">
                    <Recommend_card/>
                    <Recommend_card/>
                </div>
            </div>
        </div>
    )
}
export default Home;