export default function CategoryItems({name, img_src} : {name : string, img_src : string}){
    return(
        <div className="bg-white w-30 h-35 flex flex-col justify-center items-center rounded-2xl hover:border-2 hover:border-amber-300 hover:bg-amber-100">
            <img src={img_src} className="w-20 h-20"></img>
            <p>{name}</p>
        </div>
    )
}