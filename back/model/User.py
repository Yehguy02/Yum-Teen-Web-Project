import persistent

class User(persistent.Persistent):
    def __init__(
            self, name, email, phone, password, default_payment, 
            order_id, location, order_list) -> None:
        self.name = name
        self.email = email 
        self.phone = phone
        self.password = password
        self.default_payment = default_payment
        self.order_id = order_id
        self.location = location
        self.order_list = order_list
    
    

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
    def getOrderID(self):
        return self.order_id
    def getLocation(self):
        return self.location
    def getOrderList(self):
        return self.order_list
    
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
    def setOrderID(self, order_id):
        self.order_id = order_id
    def setLocation(self, location):
        self.location = location
    def setOrderList(self, order_list):
        self.order_list = order_list

    