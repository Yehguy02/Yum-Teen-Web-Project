import CategoryItems from "./category-items"
export default function HomeCategory(){
    return(
        <div className="w-full p-5">
            <h1 className="text-xl font-bold ml-80 mb-5 sm:ml-0">Category</h1>
            <div className="flex flex-row w-250 gap-5 overflow- scroll sm:w-full sm:overflow-scroll">
                <CategoryItems name="Noodle" img_src="./src/assets/home/noodles.png"/>
                <CategoryItems name="Rice" img_src="./src/assets/home/omelette-rice.png"/>
                <CategoryItems name="Rich rice" img_src="./src/assets/home/fatty-chicken-rice.png"/>
                <CategoryItems name="Cheap rice" img_src="./src/assets/home/fried-rice-with-basil.png"/>
                <CategoryItems name="Cheap rice" img_src="./src/assets/home/fried-rice-with-basil.png"/>
                <CategoryItems name="Fast Food" img_src="./src/assets/home/fried-rice-with-basil.png"/>
                <CategoryItems name="Italian" img_src="./src/assets/home/fried-rice-with-basil.png"/>
            </div>
        </div>
    )
}