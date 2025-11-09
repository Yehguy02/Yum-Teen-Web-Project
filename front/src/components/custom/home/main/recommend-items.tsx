export default function RecommendItems({name, img_src, star, avg_time, description} : {name : string, img_src? : string, star : number, avg_time : number[], description : string}){
    return(
        <div className="w-60 h-60">
            <div className="bg-purple-800 w-full h-6/10 rounded-2xl">
                <img src={img_src} className="w-full h-full rounded-2xl"></img>
            </div>
            <div className="mx-4 text-gray-600">
                <h1 className="font-bold text-black mt-2">{name}</h1>
                <div className="flex flex-row justify-between text-sm">
                    <div className="flex flex-row gap-1">
                        <img className="bg-amber-300 w-4 h-4 rounded-full p-0.5" src="./src/assets/home/star-solid-full.svg"></img>
                        <p>{star}</p>
                    </div>
                    <p>{avg_time[0]}-{avg_time[1]} min</p>
                </div>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    )
}

