import HomeCategory from "./home-category"
import DisplayStores from "@/components/custom/global/DisplayStore"
import type { Store } from "@/index"

export default function HomeAllStore({
  popularStores = [],
  trendingStores = [],
}: {
  popularStores?: Store[];
  trendingStores?: Store[];
}){

    return(
        <div className="flex flex-col gap-5">
            <HomeCategory/>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=uNjbh50AirwHZqqI" target="_blank">
                <div className="bg-blue-400 w-19/20 h-60 rounded-2xl">
                </div>
            </a>

            <DisplayStores title="Popular Now" stores_list={popularStores} />
            <DisplayStores title="Trending Now" stores_list={trendingStores} />
        </div>
    )
}