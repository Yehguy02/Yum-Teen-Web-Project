import DisplayMenu from "./DisplayMenu";
import StarPic from "@/assets/home/star-solid-full.svg";
import type { Order, Menu } from "@/index";

type StoreMainProps = {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
};

export default function StoreMain({ orders, setOrders }: StoreMainProps) {
  const store = {
    name: "Store name",
    id: "1",
    description: "Thai food or not, idk",
    star: 4.3,
    payment: "All",
    avg_time: [10, 15],
  };

  return (
    <div className="w-screen ml-24 mr-90">
      <div className="w-full h-50 bg-blue-500 rounded-t-2xl" />
      <div className="bg-white w-full">
        <div className="px-10 py-3">
          <h1 className="font-bold text-2xl">{store.name}</h1>
          <p className="mb-5 text-gray-500">{store.description}</p>
          <div className="flex flex-row gap-2 text-sm">
            {/* ...store info... */}
          </div>
        </div>

        {/* Pass shared state to DisplayMenu */}
        <DisplayMenu title="Popular Now!" orders={orders} setOrders={setOrders} />
        <DisplayMenu title="Recommended" orders={orders} setOrders={setOrders} />
      </div>
    </div>
  );
}
