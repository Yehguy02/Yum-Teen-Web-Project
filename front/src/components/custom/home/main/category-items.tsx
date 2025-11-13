import { useNavigate } from "react-router";

type CategoryItemProps = {
    name: string;
    img_src: string;
};

export default function CategoryItems({ name, img_src }: CategoryItemProps) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        const keyword = name.split(" ").join("+").toLowerCase();
        navigate(`/user/search/category/${keyword}`);
    };

    return (
        <button
            type="button"
            onClick={handleNavigate}
            className="flex min-w-[140px] flex-col items-center justify-between gap-2 rounded-2xl border border-transparent bg-white p-4 text-sm font-medium text-gray-700 shadow-sm transition hover:border-amber-300 hover:bg-amber-100 hover:text-amber-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 sm:min-w-[160px]"
        >
            <img src={img_src} alt={name} className="h-16 w-16 object-contain sm:h-20 sm:w-20" />
            <span>{name}</span>
        </button>
    );
}