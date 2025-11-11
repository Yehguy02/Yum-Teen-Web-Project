import ManifyingGlass from "@/assets/home/icon/magnifying-glass-solid-full.svg";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function HomeSearchBar(){
    const navigate = useNavigate();

    const [ searchKeyWord, setSearchKeyWord] = useState("");
    const handleKeyDown = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && searchKeyWord != "") {  
            const keyword = searchKeyWord.split(" ").join("+").toLowerCase();
            navigate("/user/search/"+keyword);
        }
    }
    return(
        <div className="bg-white w-9/10 h-12 m-5 rounded-xl flex flex-row justify-between items-center pl-5 pr-2">
            <input 
                placeholder="What do you wanna eat?" 
                className="focus:outline-0 w-8/10 placeholder:text-gray-400"
                value = {searchKeyWord}
                onChange={(e) => {
                    setSearchKeyWord(e.target.value);
                }}
                onKeyDown={handleKeyDown}

            ></input>
            <div>
                <img src={ManifyingGlass} className="w-8 h-8"></img>
            </div>
        </div>
    )
}