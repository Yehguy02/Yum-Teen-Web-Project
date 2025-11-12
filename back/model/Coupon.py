import persistent

class Coupon(persistent.Persistent):
    def __init__(self, code, discount, description, exp_date) -> None:
        self.code = code
        self.discount = discount
        self.description = description
        self.exp_date = exp_date    

    # getter
    def getCode(self):
        return self.code
    def getDiscount(self):
        return self.discount
    def getDescription(self):
        return self.description
    def getExpDate(self):
        return self.exp_date
    
    # setter
    def setCode(self, code):
        self.code = code
    def setDiscount(self, discount):
        self.discount = discount
    def setDescription(self, description):
        self.description = description
    def setExpDate(self, exp_date):
        self.exp_date = exp_date