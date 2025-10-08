import NearItems from "./near-items"
export default function HomeNear(){
    return(
        <div className="w-full">
            <h1 className="text-xl font-bold mb-5">Near you</h1>
            <div className="flex flex-row gap-5 flex-wrap">
                <NearItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <NearItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <NearItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
                <NearItems name="Name" 
                    star={4.3} avg_time={[15, 30]} description="Thai food naja"/>
            </div>
        </div>
    )
}