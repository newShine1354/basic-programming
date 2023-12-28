class Employee:
    companyname = "Apple"
    number_employee = 0
    def __init__(self, name):
        self.name = name
        self.raise_amount = 0.02
        self.number_employee =+ 1
    def showDetails(self):
        print(f"The name of the employee is {self.name} and the raise amount is {self.raise_amount} in {self.companyname} company of {self.number_employee} ")

# Employee.showDetails(emp1) # Similar to line 10
emp1 = Employee("Navnoor Singh")
emp1.raise_amount = 0.3
emp2 = Employee("Ramneek Singh")
emp1.companyname = "ntfgujf"
Employee.companyname = "Nesle"
print(emp1.companyname)
emp1.showDetails()
emp2.showDetails()

