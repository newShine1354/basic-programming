# class ParentClass:
#     def parent_method(self):
#         print("1. This is the parent method.")

# class ChildClass(ParentClass):
#     def parent_method(self):
#         print("Navnoor Singh")
#         super().parent_method() # To run method of previous class.
    
#     def child_method(self):
#         print("This is the child method.")
#         super().parent_method() # To run method of previous class.

# child_object = ChildClass()
# child_object.child_method()
# child_object.parent_method() # If ChildClass donot have parent_method then parent_method of parent_class will execute. 

class Employee:
    def __init__(self, name, id):
        self.name = name
        self.id = id

class Programmer(Employee):
    def __init__(self, name, id, lang):
        super().__init__(name, id)
        self.lang = lang

rohan = Employee("Rohan Das", "420")
harry = Programmer("Harry", "9564", "Python")
print(harry.name)
print(harry.id)