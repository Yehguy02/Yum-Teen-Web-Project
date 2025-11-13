import MagnifyingGlass from "@/assets/home/icon/magnifying-glass-solid-full.svg";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function HomeSearchBar() {
    const navigate = useNavigate();

    const [searchKeyWord, setSearchKeyWord] = useState("");

    const handleSubmit = () => {
        if (!searchKeyWord.trim()) return;

        const keyword = searchKeyWord.split(" ").join("+").toLowerCase();
        navigate(`/user/search/name/${keyword}`);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className="flex w-full items-center justify-center">
            <div className="flex w-full max-w-lg items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm sm:max-w-3xl">
                <img src={MagnifyingGlass} alt="Search" className="h-6 w-6 shrink-0" />
                <input
                    placeholder="What do you wanna eat?"
                    className="w-full border-0 bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none"
                    value={searchKeyWord}
                    onChange={event => setSearchKeyWord(event.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-500"
                >
                    Search
                </button>
            </div>
        </div>
    );
}