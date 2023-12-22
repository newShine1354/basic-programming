class Person:
    # def __init__(self): # Default Constructor.
    def __init__(self, n, occ):
        # print("Hey, I am a person.") # This will be executed just by creating object.
        self.name = n # Here name is local variable of init. 
        self.occ = occ 
    
    def info(self):
        print(f"{self.name} is a {self.occ}.") 

a = Person("Harry", "Teacher")
b = Person("Nuri", "Hnji")
# c = Person() # Throws an error.
# d = Person(1, 2, 3) # Throws an error.
a.name = "Divya"
a.occ = "HR"
print(a.name)

a.info()
b.info()
