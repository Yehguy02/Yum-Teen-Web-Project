import RecommendItems from "./recommend-items"
export default function HomeRecommend(){
    return(
        // href of each store in "/user/store/{store_id}"
        <div className="w-full">
            <h1 className="text-xl font-bold mb-5">Recommend for You</h1>
            <div className="flex flex-row gap-5 flex-wrap">
                <RecommendItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <RecommendItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <RecommendItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <RecommendItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
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