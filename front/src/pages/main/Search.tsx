import NavBar from "@/components/custom/global/NavBar";
import { useParams } from "react-router";
function SearchPage(){
    const {keyword} = useParams();

    return(
        <>
            <div className="bg-gray-200 min-h-screen">
                <NavBar num={0}/>
                <h1 className="ml-20">{keyword}</h1>
            </div>
        </>
    )
}

export default SearchPage;