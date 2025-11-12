import NavBar from "@/components/custom/global/NavBar";
import DisplayStore from "@/components/custom/global/DisplayStore";
import HomeOrder from "@/components/custom/home/home-order";

function Favourite(){
    return(
        <>
            <div className="bg-gray-200 min-h-screen">
                <NavBar num={3}/>
                <div className="pl-25 pr-40 pt-10">
                    <DisplayStore title="Favourite"/>
                </div>
                <HomeOrder/>
            </div>
        </>
    )
}

export default Favourite;