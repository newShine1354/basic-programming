class Student:
    # grade = 4
    grade = 7

    def __init__(self, name, age):
        self.name = name 
        self.age = age

    def showdata(self):
        print({"name" : self.name, "age" : self.age, "grade" : self.grade})

    @classmethod
    def Change_grade(cls, new_grade):
        if cls.grade > 4:
            cls.grade = new_grade

    @staticmethod # There is no need to give self as an argument, also we can use static function via name of class.
    def add(*a):
        sum = 0
        for elements in a:
            sum = sum + elements
        print(sum)

# Student.grade = 6
obj1 = Student('Ramneek Singh', 34)
obj2 = Student('Navnoor Singh', 45)
Student.Change_grade(5)
obj1.showdata()
obj2.showdata()
Student.add(2, 3, 7, 8)
obj1.add(2, 3, 7, 8)