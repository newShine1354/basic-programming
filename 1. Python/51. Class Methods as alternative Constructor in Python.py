class Employee:
    company = "Apple"
    def show(self):
        print(f"The name is {self.name} and company is {self.company}.")

    @classmethod # This will edit class permanently as it allows us to take class as an agrument instead of intance, we can also def this function without using @classmethod
    def changeCompany(cls, newCompany):
        cls.company = newCompany

e1 = Employee()
e1.name = "Navnoor Singh"
e1.show()
e1.changeCompany("Tesla")
e1.show()
print(Employee.company)
