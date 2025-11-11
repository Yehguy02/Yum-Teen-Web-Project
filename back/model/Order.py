import persistent

class Order(persistent.Persistent):
    def __init__(self, order_id, order_list, order_status, payment_status, total_price, date) -> None:
        self.order_id = order_id
        self.order_list = order_list
        self.order_status = order_status
        self.payment_status = payment_status
        self.total_price = total_price
        self.date = date

    # getter
    def getOrderID(self):
        return self.order_id
    def getOrderList(self):
        return self.order_list
    def getOrderStatus(self):
        return self.order_status
    def getPaymentStatus(self):
        return self.payment_status
    def getTotalPrice(self):
        return self.total_price
    def getDate(self):
        return self.date
    
    # setter
    def setOrderID(self, order_id):
        self.order_id = order_id
    def setOrderList(self, order_list):
        self.order_list = order_list
    def setOrderStatus(self, order_status):
        self.order_status = order_status
    def setPaymentStatus(self, payment_status):
        self.payment_status = payment_status
    def setTotalPrice(self, total_price):
        self.total_price = total_price
    def setDate(self, date):
        self.date = date