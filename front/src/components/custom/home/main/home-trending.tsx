import TrendingItems from "./trending-items"
export default function HomeTrending(){
    return(
        <div className="w-full">
            <h1 className="text-xl font-bold mb-5">Trending Now</h1>
            <div className="flex flex-row gap-5 flex-wrap">
                <TrendingItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <TrendingItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <TrendingItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <TrendingItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <TrendingItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <TrendingItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <TrendingItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <TrendingItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
            </div>
        </div>
    )
}