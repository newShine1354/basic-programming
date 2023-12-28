class Person:
    Name = "Navnoor"
    occupation = "Software Developer"
    networth = 10
    def info(self):
        print(f"{self.Name} is a {self.occupation}")

a = Person()
b = Person()
a.Name = "Shubham"
b.Name = "Ramneek Singh"
print(a.Name)
a.info()
b.info()
a.name
