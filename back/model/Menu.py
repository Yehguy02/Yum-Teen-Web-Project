import persistent

class Menu(persistent.Persistent):
    def __init__(self, name, price, note, image_url) -> None:
        self.name = name
        self.price = price
        self.note = note
        self.discount_price = price
        self.image_url = image_url

    # getter
    def getName(self):
        return self.name
    def getPrice(self):
        return self.price
    def getNote(self):
        return self.note
    def getDiscountPrice(self):
        return self.discount_price
    def getImageURL(self):
        return self.image_url
    
    # setter
    def setName(self, name):
        self.name = name
    def setPrice(self, price):
        self.price = price
    def setNote(self, note):
        self.note = note
    def setDiscountPrice(self, discount_price):
        self.discount_price = discount_price
    def setImageURL(self, image_url):
        self.image_url = image_url