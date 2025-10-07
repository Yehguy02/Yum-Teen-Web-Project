import RecommendItems from "./recommend-items"
export default function HomeRecommend(){
    return(
        <div className="w-full">
            <h1 className="text-xl font-bold mb-5">Recommend for You</h1>
            <div className="flex flex-row gap-5 wrap-normal">
                <RecommendItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <RecommendItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <RecommendItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <RecommendItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
            </div>
        </div>
    )
}