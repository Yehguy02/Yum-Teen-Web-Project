import HomeCategory from "./home-category"
import DisplayStores from "@/components/custom/global/DisplayStore"

export default function HomeAllStore(){

    return(
        <div className="flex flex-col gap-5">
            <HomeCategory/>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=uNjbh50AirwHZqqI" target="_blank">
                <div className="bg-blue-400 w-19/20 h-60 rounded-2xl">
                </div>
            </a>

            <DisplayStores title="Popular Now"/>
            <DisplayStores title="Trending Now"/>
            <DisplayStores title="Near you"/>
        </div>
    )
}