import NavBar_Store from "@/components/custom/global/NavBar_Store";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import type { Order } from "@/index";

type QueueItem = {
  date: string;
  menu_list: Order[];
  order_id: number;
  order_status: string;
  payment_status: boolean;
  total_price: number;
};

export default function StoreQueue() {
  const { id } = useParams();
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQueue = async () => {
      try {
        const res = await fetch(`http://localhost:8000/store/queue/${id}`);
        if (!res.ok) throw new Error("Failed to fetch queue");
        const data = await res.json();
        setQueue(data.queue || []);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQueue();
  }, [id]);

  if (isLoading) {
    return <div className="text-gray-500 ml-24 mt-5">Loading queue info...</div>;
  }

  return (
    <>
      <NavBar_Store num={1} />
      <div className="px-30 pt-10 bg-gray-200 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Queue {id}</h1>

        {queue.length === 0 ? (
          <p className="text-gray-500">No orders in queue.</p>
        ) : (
          queue.map((order) => (
            <div
              key={order.order_id}
              className="border border-gray-300 rounded-lg p-4 my-2 bg-white shadow-sm"
            >
              <div className="flex justify-between">
                <h2 className="font-semibold">Order #{order.order_id}</h2>
                <p>{order.date}</p>
              </div>
              <p>Status: {order.order_status}</p>
              <p>Payment: {order.payment_status ? "Paid" : "Pending"}</p>
              <p>Total: ฿{order.total_price}</p>
              <ul className="list-disc ml-5">
                {order.menu_list.map((menu, i) => (
                  <li key={i}>{menu.name}</li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </>
  );
}
