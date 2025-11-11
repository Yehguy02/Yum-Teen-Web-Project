import DisplayMenuItems from "@/components/custom/store/DisplayMenuItem"
import type { Menu } from "@/index"

export default function DisplayMenu({title, menus_list} : {title : string, menus_list? : Menu[]}){
    if(!menus_list){
        menus_list = [
            {
                id : 1,
                name: "Food",
                base_price : 100,
            },
            {
                id : 2,
                name: "Food",
                base_price : 100,
            },
            {
                id : 3,
                name: "Food",
                base_price : 100,
            },
            {
                id : 4,
                name: "Food",
                base_price : 100,
            },
            {
                id : 5,
                name: "Food",
                base_price : 100,
            },
            {
                id : 6,
                name: "Food",
                base_price : 100,
            },
        ]
    }

    return(
        <>
            <div className="p-5">
                <h1 className="font-bold text-xl mb-3">{title}</h1>
                <div className="flex flex-row flex-wrap gap-7">
                    {menus_list.map((menu) => {
                        return(
                            <DisplayMenuItems name={menu.name} base_price={menu.base_price} key={menu.id}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}