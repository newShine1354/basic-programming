class Shape:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def area(self):
        return self.x * self.y
    
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
        super().__init__(radius, radius)

    def area(self):
        return 22/7 * super().area()
    
rectangle = Shape(3, 4)
print(rectangle.area())
cir = Circle(2)
print(cir.area())
