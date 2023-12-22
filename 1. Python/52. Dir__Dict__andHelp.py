''' dic method '''
# x = [1, 2, 3]
# print(dir(x))

''' __dic__ attribute '''
class Person:
    def __init__(self, name, age):
      self.name = name
      self.age = age
      self.version = 1

    def showdata(self):
       print(f"Name of boy of age {self.age} and version {self.version} is {self.name}.")
       
p = Person("John", 30)
print(p.__dict__)

''' Help '''
print(help(tuple))