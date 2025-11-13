export type Store = {
    id : number
    name : string
    avg_time? : number[],
    description : string
    payment : string
    category? : string[],
    menu_list? : Menu[],
    img_src? : string
}
export type Order = {
    id : number,
    name: string,
    quanity: number,
    base_price : number,
    discounted_price? : number,
    note? : string,
    img_src? : string
}

export type Menu = {
    id : number,
    name: string,
    base_price : number,
    discount_price? : number,
    store? : string,
    description? : string,
    img_src? : string
}

export type Queue = {
    id : number,
    store : string,
    order : string[],
    status : string,
    price : number,
    date : string
}