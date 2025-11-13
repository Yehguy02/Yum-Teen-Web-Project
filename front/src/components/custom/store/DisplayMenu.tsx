import type { Order, Menu } from "@/index";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


type DisplayMenuProps = {
  title: string;
  menus_list?: Menu[];
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
};

export default function DisplayMenu({ title, menus_list, orders, setOrders }: DisplayMenuProps) {
  function handleAddToCart(id: number, name: string, base_price: number, discount_price? : number) {
    // Find existing order with BOTH same id AND name
    const existingOrderIndex = orders.findIndex(o => o.id === id && o.name === name);
    const orderItem = { id, name, quanity: 1, base_price, ...(discount_price && { discounted_price: discount_price }) };
    
    if (existingOrderIndex === -1) {
      // Item doesn't exist, add new one
      setOrders([...orders, orderItem]);
    } else {
      // Item exists, increment quantity
      const updatedOrders = [...orders];
      updatedOrders[existingOrderIndex] = {
        ...updatedOrders[existingOrderIndex],
        quanity: updatedOrders[existingOrderIndex].quanity + 1
      };
      setOrders(updatedOrders);
    }
  }

  if (!menus_list) {
    return (<div>Loading...</div>)
  }

  return (
    <div className="p-5">
      <h1 className="font-bold text-xl mb-3">{title}</h1>
      <div className="flex flex-row flex-wrap gap-7">
        {menus_list.map(menu => (
          <Card className="cursor-pointer w-54 h-59 border-1" key={menu.id} onClick={() => handleAddToCart(menu.id, menu.name, menu.base_price, menu.discount_price)}>
            <CardHeader>
                <div className="w-30 h-30 bg-blue-500 rounded-2xl mx-auto">
                    <img src={menu.img_src}></img>
                </div>
            </CardHeader>
            <CardContent>
                <CardTitle>{menu.name}</CardTitle>
                {menu.discount_price ? (
                  <p>฿{menu.discount_price} <span className="line-through text-gray-500">{menu.base_price}</span></p>
                ) :(
                  <p>฿{menu.base_price}</p>
                )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
