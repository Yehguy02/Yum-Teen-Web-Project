import FavItems from "./fav-items"
export default function HomeFav(){
    return(
        <div className="w-full">
            <h1 className="text-xl font-bold mb-5">Favourite</h1>
            <div className="flex flex-row gap-5 flex-wrap">
                <FavItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <FavItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <FavItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <FavItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
            </div>
        </div>
    )
}