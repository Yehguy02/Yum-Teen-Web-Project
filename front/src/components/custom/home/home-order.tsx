import { useMemo } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import type { Order } from "@/index";
import { Card } from "@/components/ui/card";
type HomeOrderProps = {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
};

export default function HomeOrder({ orders, setOrders }: HomeOrderProps) {
    const navigate = useNavigate();
    function handleQuantityModify(id: number, name : string, amount: number) {
        const curr_order = orders.find(order => order.id === id && order.name === name);
        if (!curr_order) return;

        const quantity = curr_order.quanity + amount;

        if (quantity <= 0) {
        setOrders(orders.filter(order => order.id !== id));
        } else if (quantity >= 100) {
        toast.warning("You cannot have quantity more than 100");
        } else {
        setOrders(
            orders.map(order =>
            order.id === id ? { ...order, quanity : quantity} : order
            )
        );
        }
    }
  function handleProcess(){
    if(orders.length <= 0) return;
    navigate("/user/confirm");
  }

  const receipt = useMemo(() => {
    return orders.reduce((sum, order) => {
      const price = order.discounted_price ?? order.base_price;
      return sum + price * order.quanity;
    }, 0);
  }, [orders]);
  const totalDiscount = useMemo(() => {
    return orders.reduce((sum, order) => {
        if (order.discounted_price) {
        const diff = order.base_price - order.discounted_price;
        return sum + diff * order.quanity;
        }
        return sum;
    }, 0);
    }, [orders]);

  return (
    <Card className="hidden w-80 max-h-[80vh] flex-col justify-between gap-6 overflow-hidden bg-white pb-6 shadow-sm sm:flex sm:sticky sm:top-10">
      <div>
          <h1 className="font-bold m-4 text-xl">My Orders</h1>
          <ul>
          {orders.map(order => (
            <li key={order.id} className="mb-4">
              <div className="flex flex-row justify-between mx-6 text-lg">
                <div>
                  <h1>{order.quanity} x {order.name}</h1>
                </div>
                <div>
                  {order.discounted_price ? (
                    <h1>
                      ฿{order.discounted_price * order.quanity} 
                      <span className="line-through text-gray-400 ml-1">
                        {order.base_price * order.quanity}
                      </span>
                    </h1>
                  ) : (
                    <h1>฿{order.base_price * order.quanity}</h1>
                  )}
                </div>
              </div>
              <div className="flex flex-row justify-between gap-1.5 ml-8 text-gray-500 border-1 rounded-2xl px-2 w-20 mt-2">
                <div className="w-5 h-5 text-center text-sm flex justify-center cursor-pointer" 
                     onClick={() => handleQuantityModify(order.id, order.name, 1)}>+</div>
                <p>{order.quanity}</p>
                <div className="w-5 h-5 text-center text-sm flex justify-center cursor-pointer" 
                     onClick={() => handleQuantityModify(order.id, order.name, -1)}>-</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="border-2 rounded border-amber-500 m-4 p-2">
          <div className="flex flex-row justify-between text-base">
            <h1>Total</h1>
            <h1>฿{receipt}</h1>
          </div>
          <div className="flex flex-row justify-between text-base text-green-500">
            <h1>Discount</h1>
            <h1>฿{Math.max(totalDiscount, 0)}</h1>
          </div>
          <div className="flex flex-row justify-between text-lg font-bold mt-4">
            <h1>Final</h1>
            <h1>฿{Math.max(receipt, 0)}</h1>
          </div>
        </div>
        <div className="text-center">
            <button className="bg-green-500 text-white py-2 px-2 rounded w-8/10"
            onClick={() => handleProcess()}>Process</button>
        </div>
      </div>
    </Card>
  );
}
