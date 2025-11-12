import { useState, useEffect } from "react";
import StoreMain from "@/components/custom/store/storeMain";
import HomeOrder from "@/components/custom/home/home-order";
import NavBar from "@/components/custom/global/NavBar";
import type { Order } from "@/index";

export default function Store() {
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const raw = sessionStorage.getItem("orders");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // Persist orders to sessionStorage
  useEffect(() => {
    sessionStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  return (
    <div className="bg-gray-200 w-screen min-h-screen flex flex-row justify-between">
      <NavBar num={0} />
      <StoreMain orders={orders} setOrders={setOrders} />
      <HomeOrder orders={orders} setOrders={setOrders} />
    </div>
  );
}
