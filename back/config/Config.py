# Initailize the database of the web

import BTrees
import ZODB, ZODB.FileStorage

from ..model.Coupon import *
from ..model.Menu import *
from ..model.Order import *
from ..model.Store import *
from ..model.User import *
from ..util.Util import *

def init_db(root):
    root.stores = BTrees.OOBTree.BTree()
    root.users = BTrees.OOBTree.BTree()
    root.tokens = BTrees.OOBTree.BTree()

    # create some stores
    store1 = Store(1, "Pizza Hut", [], [], ["Italian"], 4.5, [])
    store2 = Store(2, "Sushi King", [], [], ["Japanese"], 4.1, [])
    store3 = Store(3, "Donald's", [], [], ["Fast Food"], 3.9, [])
    store4 = Store(4, "KFC", [], [], ["Fast Food"], 4.4, [])
    store5 = Store(5, "Noodles is life", [], [], ["Noodles"], 4.2, [])
    store6 = Store(6, "MeeZaa", [], [], ["Japanese"], 4.6, [])
    store7 = Store(7, "Prab Zian", [], [], ["Dining"], 4.8, [])
    store8 = Store(8, "Kra Pao Tad", [], [], ["Dining"], 3.2, [])

    # create some menus
    menus1 = [
        Menu("Pepperoni Pizza", 250, "Large Pepperoni Pizza with extra cheese", ""),
        Menu("Veggie Pizza", 200, "Large Veggie Pizza with bell peppers, olives, and onions", ""),
        Menu("BBQ Chicken Pizza", 270, "Large BBQ Chicken Pizza with red onions and cilantro", "")
    ]
    menus2 = [
        Menu("California Roll", 150, "Crab, avocado, and cucumber roll", ""),
        Menu("Spicy Tuna Roll", 180, "Tuna with spicy mayo and cucumber roll", ""),
        Menu("Salmon Nigiri", 200, "Fresh salmon over vinegared rice", "")
    ]
    menus3 = [
        Menu("Big Mac", 120, "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun", ""),
        Menu("Chicken Nuggets", 80, "Crispy chicken nuggets with your choice of dipping sauce", ""),
        Menu("Fries", 50, "Golden crispy fries", "")
    ]
    menus4 = [
        Menu("Original Recipe Chicken", 150, "Crispy fried chicken with KFC's original recipe seasoning", ""),
        Menu("Zinger Burger", 130, "Spicy chicken fillet with lettuce and mayo in a bun", ""),
        Menu("Mashed Potatoes", 70, "Creamy mashed potatoes with gravy", "")
    ]
    menus5 = [
        Menu("Tom Yum Noodles", 90, "Spicy and sour tom yum soup with noodles", ""),
        Menu("Pad Thai", 80, "Stir-fried rice noodles with shrimp,", ""),
        Menu("Beef Noodle Soup", 100, "Savory beef broth with noodles and tender beef slices", "")
    ]
    menus6 = [
        Menu("Ramen", 120, "Japanese noodle soup with pork, egg, and vegetables", ""),
        Menu("Udon", 110, "Thick wheat noodles in a savory broth with tempura", ""),
        Menu("Soba", 100, "Buckwheat noodles served cold with dipping sauce", "")
    ]
    menus7 = [
        Menu("Porkchop Steak", 180, "Juicy porkchop steak with black pepper sauce", ""),
        Menu("Grilled Salmon", 220, "Fresh grilled salmon with lemon butter sauce", ""),
        Menu("Prab Zian", 590, "Massive portion of mixed grilled meats, salad, and sides", "")
    ]
    menus8 = [
        Menu("Basil Friend Rice", 59, "Stir-fried rice with minced pork and holy basil", ""),
        Menu("Chicken Fried Rice", 59, "Classic chicken fried rice with egg and vegetables", ""),
        Menu("Pork with Garlic", 69, "Stir-fried pork with garlic and black pepper sauce", "")
    ]

    # Add menus to stores
    store1.setMenuList(menus1)
    store2.setMenuList(menus2)
    store3.setMenuList(menus3)
    store4.setMenuList(menus4)
    store5.setMenuList(menus5)
    store6.setMenuList(menus6)
    store7.setMenuList(menus7)
    store8.setMenuList(menus8)

    # Add stores to root
    root.stores[store1.getID()] = store1
    root.stores[store2.getID()] = store2
    root.stores[store3.getID()] = store3
    root.stores[store4.getID()] = store4
    root.stores[store5.getID()] = store5
    root.stores[store6.getID()] = store6
    root.stores[store7.getID()] = store7
    root.stores[store8.getID()] = store8

    # Create test user
    user = User("nig4 fatass", 
                "67011140@kmitl.ac.th",
                "012-345-6789",
                hash_password("1234"),
                "Cash",
                "123 Test St, Bangkok",
                [], [], [], 
                None,
                [])
    
    # Create some order history and current order for the user
    order1 = Order(1, 
                   [menus1[0], menus1[2]], 
                   "Cooking",
                   False,
                   520,
                   "13/11/2025")
    order2 = Order(2, 
                   [menus5[0], menus5[1], menus5[2]], 
                   "Delivered",
                   True,
                   270,
                   "01/10/2025")
                   
    # Create coupon code
    coupon1 = Coupon("DISCOUNT10", 10, "10 baht off on your next order", "31/12/2025")
    
    user.add_order_history(order1)
    user.setCurrent(order2)

    user.add_favorite(store4)
    user.add_favorite(store6)
    user.add_favorite(store7)
    user.add_coupon(coupon1)
    
    # Add user to root
    root.users[user.getEmail()] = user
                

# self.name = name
# self.email = email 
# self.phone = phone
# self.password = password # hashed password
# self.default_payment = default_payment
# self.location = location
# self.order_history = order_history
# self.current = current
# self.favourite = favourite # list of favourite Store
# self.store = store
# self.coutpon_list = coupon_list