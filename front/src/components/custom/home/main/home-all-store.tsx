import HomeCategory from "./home-category"
import HomeRecommend from "./home-recommend" 

export default function HomeAllStore(){
    return(
        <div className="flex flex-col gap-5">
            <HomeCategory/>
            <div className="bg-blue-400 w-full h-60 rounded-2xl">
            </div>
            <HomeRecommend/>
            {/* NEAR YOU */}
            {/* TRENDING */}
            {/* FAVOURITE */}
        </div>
    )
}