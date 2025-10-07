export default function HomeSearchBar(){
    return(
        <div className="bg-white w-9/10 h-12 m-5 rounded-xl flex flex-row justify-between items-center pl-5 pr-2">
            <input placeholder="What do you wanna eat?" className="focus:outline-0 w-8/10 placeholder:text-gray-400"></input>
            <div>
                <img src="./src/assets/home/magnifying-glass-solid-full.svg" className="w-8 h-8"></img>
            </div>
        </div>
    )
}