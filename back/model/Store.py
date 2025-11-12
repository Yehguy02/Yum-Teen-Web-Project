import persistent

class Store(persistent.Persistent):
    def __init__(self, name, order_history, category, star, menu_list) -> None:
        self.name = name
        self.order_history = order_history
        self.category = category
        self.star = star
        self.menu_list = menu_list

    # getter
    def getName(self):
        return self.name
    def getOrderHistory(self):
        return self.order_history
    def getCategory(self):
        return self.category
    def getStar(self):
        return self.star
    def getMenuList(self):
        return self.menu_list
    
    # setter
    def setName(self, name):
        self.name = name
    def setOrderHistory(self, order_history):
        self.order_history = order_history
    def setCategory(self, category):
        self.category = category
    def setStar(self, star):
        self.star = star
    def setMenuList(self, menu_list):
        self.menu_list = menu_list