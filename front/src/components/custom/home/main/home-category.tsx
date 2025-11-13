import CategoryItems from "./category-items";
import noodlesImg from "@/assets/home/noodles.png";
import omeletteRiceImg from "@/assets/home/omelette-rice.png";
import fattyChickenRiceImg from "@/assets/home/fatty-chicken-rice.png";
import basilRiceImg from "@/assets/home/fried-rice-with-basil.png";

const categories = [
    { name: "Noodle", img: noodlesImg },
    { name: "Rice", img: omeletteRiceImg },
    { name: "Rich rice", img: fattyChickenRiceImg },
    { name: "Cheap rice", img: basilRiceImg },
    { name: "Fast Food", img: basilRiceImg },
    { name: "Italian", img: basilRiceImg },
];

export default function HomeCategory() {
    return (
        <section className="w-full">
            <div className="px-4 sm:px-0">
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Category</h2>
            </div>
            <div className="mt-4 flex w-full gap-4 overflow-x-auto px-4 pb-2 sm:px-0">
                {categories.map(category => (
                    <CategoryItems key={category.name} name={category.name} img_src={category.img} />
                ))}
            </div>
        </section>
    );
}