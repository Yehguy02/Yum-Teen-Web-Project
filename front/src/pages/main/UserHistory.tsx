import NavBar from "@/components/custom/global/NavBar";
import HistoryItems from "@/components/custom/history/HistoryItems.tsx";

function UserHistorty(){
    const histories = [
        {
            id : 1,
            date : "10/09/2025",
            store : "Pizza hut",
            price : 500
        },
        {
            id : 2,
            date : "10/09/2025",
            store : "Pizza hut",
            price : 500
        },
        {
            id : 3,
            date : "10/09/2025",
            store : "Pizza hut",
            price : 500
        },
    ]
    

    return(
        <>
            <div className="bg-gray-200 min-h-screen">
                <NavBar num={2}/>
                <div className="pl-25">
                    <h1 className="font-bold text-3xl pt-10 mb-5">History</h1>
                    <ul>
                    {histories.map((history) => {
                        return(
                            <li key={history.id}>
                                <div className="bg-white my-5 p-6 px-8 rounded-2xl w-8/10 flex flex-row justify-between">
                                    <div>
                                        <p>{history.date}</p>
                                        <p>{history.store}</p>
                                    </div>
                                    <p>฿{history.price}</p>
                                </div>
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default UserHistorty;