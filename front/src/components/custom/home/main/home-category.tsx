import CategoryItems from "./category-items"
export default function HomeCategory(){
    return(
        <div className="w-full p-5">
            <h1 className="text-xl font-bold mb-5">Category</h1>
            <div className="flex flex-row gap-5">
                <CategoryItems name="Noodle" img_src="./src/assets/home/noodles.png"/>
                <CategoryItems name="Rice" img_src="./src/assets/home/omelette-rice.png"/>
                <CategoryItems name="Rich rice" img_src="./src/assets/home/fatty-chicken-rice.png"/>
                <CategoryItems name="Cheap rice" img_src="./src/assets/home/fried-rice-with-basil.png"/>
                <CategoryItems name="Cheap rice" img_src="./src/assets/home/fried-rice-with-basil.png"/>
                <CategoryItems name="Cheap rice" img_src="./src/assets/home/fried-rice-with-basil.png"/>
                <CategoryItems name="Cheap rice" img_src="./src/assets/home/fried-rice-with-basil.png"/>
            </div>
        </div>
    )
}