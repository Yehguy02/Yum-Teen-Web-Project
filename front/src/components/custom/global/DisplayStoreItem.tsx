import { Link } from "react-router";

export default function DisplayStoreItem({name, img_src, description, id, category} : {name : string, img_src? : string, avg_time : number[], description : string, id : number, category? : string[] }){
    return(
        <div className="w-60 h-60 bg-white p-2 rounded-2xl shadow">
            <Link to={`/user/store/${id}`}>
            <div className="bg-purple-800 w-full h-6/10 rounded-2xl">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Eataly_Las_Vegas_-_Feb_2019_-_Sarah_Stierch_12.jpg/500px-Eataly_Las_Vegas_-_Feb_2019_-_Sarah_Stierch_12.jpg" alt="Image" className="w-full h-full rounded-2xl"></img>
            </div>
            <div className="flex flex-1 flex-col gap-2 px-4 py-3">
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                {category && category.length > 0 && (
                    <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                        {category.map(cat => (
                            <span key={`${id}-${cat}`} className="rounded-full border border-gray-200 px-2 py-1">
                                {cat}
                            </span>
                        ))}
                    </div>
                )}
                {description && <p className="line-clamp-2 text-sm text-gray-600">{description}</p>}
            </div>
        </Link>
    );
}