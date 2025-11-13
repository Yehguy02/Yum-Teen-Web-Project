import HomeCategory from "./home-category"
import DisplayStores from "@/components/custom/global/DisplayStore.tsx"

export default function HomeAllStore(){

    return(
        <div className="flex flex-col gap-5 overflow">
            <HomeCategory/>
            <a href="https://youtu.be/dQw4w9WgXcQ?si=uNjbh50AirwHZqqI" target="_blank">
                <div className="justify-center flex">
                    <div className="bg-blue-400 w-[35%] sm:w-[95%] h-60 rounded-2xl">
                    </div>
                </div>
            </a>

            <DisplayStores title="Popular Now"/>
            <DisplayStores title="Trending Now"/>
            <DisplayStores title="Near you"/>
        </div>
    )
}