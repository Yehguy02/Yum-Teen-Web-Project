import persistent

class Store(persistent.Persistent):
    def __init__(self, id, name, queue, order_history, category, star, menu_list) -> None:
        self.id = id
        self.name = name
        self.queue = queue
        self.order_history = order_history
        self.category = category
        self.star = star
        self.menu_list = menu_list

    def add_menu(self, menu):
        self.menu_list.append(menu)

    def remove_menu(self, menu):
        if menu in self.menu_list:
            self.menu_list.remove(menu)
    

    # getter
    def getID(self):
        return self.id
    def getName(self):
        return self.name
    def getQueue(self):
        return self.queue
    def getOrderHistory(self):
        return self.order_history
    def getCategory(self):
        return self.category
    def getStar(self):
        return self.star
    def getMenuList(self):
        return self.menu_list
    
    # setter
    def setID(self, id):
        self.id = id
    def setName(self, name):
        self.name = name
    def setQueue(self, queue):
        self.queue = queue
    def setOrderHistory(self, order_history):
        self.order_history = order_history
    def setCategory(self, category):
        self.category = category
    def setStar(self, star):
        self.star = star
    def setMenuList(self, menu_list):
        self.menu_list = menu_list