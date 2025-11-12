import type { Order, Menu } from "@/index";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


type DisplayMenuProps = {
  title: string;
  menus_list?: Menu[];
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
};

export default function DisplayMenu({ title, menus_list, orders, setOrders }: DisplayMenuProps) {
  function handleAddToCart(id: number, name: string, base_price: number) {
    const curr_order = orders.find(o => o.id === id);
    if (!curr_order) {
      setOrders([...orders, { id, name, quanity: 1, base_price }]);
    } else {
      setOrders(
        orders.map(o => (o.id === id ? { ...o, quanity: o.quanity + 1 } : o))
      );
    }
  }

  if (!menus_list) {
    menus_list = [
      { id: 1, name: "Food 1", base_price: 100 },
      { id: 2, name: "Food 2", base_price: 100 },
      { id: 3, name: "Food 3", base_price: 100 },
    ];
  }

  return (
    <div className="p-5">
      <h1 className="font-bold text-xl mb-3">{title}</h1>
      <div className="flex flex-row flex-wrap gap-7">
        {menus_list.map(menu => (
          <Card className="cursor-pointer w-43 h-57 border-1" key={menu.id} onClick={() => handleAddToCart(menu.id, menu.name, menu.base_price)}>
            <CardHeader>
                <div className="w-30 h-30 bg-blue-500 rounded-2xl mx-auto">
                    <img></img>
                </div>
            </CardHeader>
            <CardContent>
                <CardTitle>{menu.name}</CardTitle>
                <p>{menu.base_price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
