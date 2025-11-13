import { Link } from "react-router"
import starImg from "@/assets/home/star-solid-full.svg"

export default function DisplayStoreItem({name, img_src, avg_time, description, id, category} : {name : string, img_src? : string, avg_time : number[], description : string, id : number, category? : string[] }){
    return(
        <div className="w-60 h-60 bg-white p-2 rounded-2xl shadow">
            <Link to={`/user/store/${id}`}>
            <div className="bg-purple-800 w-full h-6/10 rounded-2xl">
                <img src={img_src} className="w-full h-full rounded-2xl"></img>
            </div>
            <div className="mx-4">
                <h1 className="font-bold text-black mt-2">{name}</h1>
                <div className="flex flex-row gap-3 text-sm">
                    {category?.map((cat) => {
                        return(<div className="border-1 border-black px-1.5 rounded">{cat}</div>)
                    })}
                </div>
                <p className="text-sm">{description}</p>
            </div>
            </Link>
        </div>
    )
}