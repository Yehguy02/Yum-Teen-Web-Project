import HomeCategory from "./home-category"
export default function HomeAllStore(){
    return(
        <div className="flex flex-col gap-5">
            <HomeCategory/>
            <div className="bg-blue-400 w-full h-60 rounded-2xl">

            </div>
        </div>
    )
}