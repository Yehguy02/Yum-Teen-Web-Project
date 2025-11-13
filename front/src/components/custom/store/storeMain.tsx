import DisplayMenu from "./DisplayMenu";
import StarPic from "@/assets/home/star-solid-full.svg";
import { useParams } from 'react-router';
import type { Order, Menu, Store } from "@/index";
import { useEffect, useState } from "react";

type StoreMainProps = {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
};

export default function StoreMain({ orders, setOrders }: StoreMainProps) {
  const { id } = useParams();
  
  const [storeInfo, setStoreInfo] = useState<Store>();
  useEffect(() => {
    const fetchStore = async () => {
      const res = await fetch("http://localhost:8000/store/" + id);
      if (res.ok){
        const storeData = await res.json();
        console.log(storeData.store);
        setStoreInfo(storeData.store);
      }
    }
    fetchStore();
  }, [])
  if (!storeInfo) {
    return <div className="text-gray-500 ml-24 mt-5">Loading store info...</div>;
  }
  return (
    <div className="w-screen ml-24 mr-90">
      <div className={`w-full h-50 bg-blue-500 rounded-t-2xl mt-5 bg-[url(${storeInfo.img_src})]`} />
      <div className="bg-white w-full">
        <div className="px-10 py-3">
          <h1 className="font-bold text-3xl">{storeInfo.name}</h1>
          <p className="mb-5 text-gray-500">{storeInfo.description}</p>
          <div className="flex flex-row gap-2">
            {storeInfo.category ? storeInfo.category.map((category) => {
              return(
                <div className="border-1 border-black px-1.5 rounded">{category}</div>
              )
            }) : (
              <></>
            )}
          </div>
        </div>

        {/* Pass shared state to DisplayMenu */}
        <DisplayMenu title="Popular Now!" orders={orders} setOrders={setOrders} menus_list={storeInfo.menu_list} />
        <DisplayMenu title="Recommended" orders={orders} setOrders={setOrders} menus_list={storeInfo.menu_list}/>
      </div>
    </div>
  );
}
