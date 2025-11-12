import persistent

class User(persistent.Persistent):
    def __init__(
            self, name, email, phone, password, default_payment, 
            current, location, order_history, favourite, store,
            coupon_list) -> None:
        self.name = name
        self.email = email 
        self.phone = phone
        self.password = password # hashed password
        self.default_payment = default_payment
        self.location = location
        self.order_history = order_history
        self.current = current
        self.favourite = favourite # list of favourite Store
        self.store = store
        self.coutpon_list = coupon_list
    
    def add_favorite(self, store):
        if store not in self.favourite:
            self.favourite.append(store)
    def add_order_history(self, order):
        self.order_history.append(order)
    def add_coupon(self, coupon):
        self.coutpon_list.append(coupon)
    
    def remove_favorite(self, store):
        if store in self.favourite:
            self.favourite.remove(store)
    def remove_coupon(self, coupon):
        if coupon in self.coutpon_list:
            self.coutpon_list.remove(coupon)
            
    def clear_favorites(self):
        self.favourite = []
    def clear_order_history(self):
        self.order_history = []
    def clear_coupons(self):
        self.coutpon_list = []
    

    # getter
    def getName(self):
        return self.name
    def getEmail(self):
        return self.email
    def getPhone(self):
        return self.phone
    def getPassword(self):
        return self.password
    def getDefaultPayment(self):
        return self.default_payment
    def getCurrent(self):
        return self.current
    def getLocation(self):
        return self.location
    def getOrderHistory(self):
        return self.order_history
    def getFavorites(self):
        return self.favourite
    def getStore(self):
        return self.store
    def getCouponList(self):
        return self.coutpon_list
    
    # setter
    def setName(self, name):
        self.name = name
    def setEmail(self, email):
        self.email = email
    def setPhone(self, phone):
        self.phone = phone
    def setPassword(self, password):
        self.password = password
    def setDefaultPayment(self, default_payment):
        self.default_payment = default_payment
    def setCurrent(self, current):
        self.current = current
    def setLocation(self, location):
        self.location = location
    def setOrderHistory(self, order_history):
        self.order_history = order_history
    def setFavorites(self, favourite):
        self.favourite = favourite
    def setStore(self, store):
        self.store = store
    def setCouponList(self, coupon_list):
        self.coutpon_list = coupon_list

    