import HomeCategory from "./home-category"
import HomeRecommend from "./home-recommend" 
import HomeFav from "./home-fav"
import HomeTrending from "./home-trending"
import HomeNear from "./home-near"

export default function HomeAllStore(){
    return(
        <div className="flex flex-col gap-5">
            <HomeCategory/>
            <div className="bg-blue-400 w-19/20 h-60 rounded-2xl">
            </div>
            <HomeRecommend/>

            <HomeFav/>
            <HomeNear/>
            <HomeTrending/>
        </div>
    )
}