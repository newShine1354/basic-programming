class library:
    def __init__(self):
        self.No_of_books = 0
        self.Books = []

    def addBook(self, book):
        self.Books.append(book)
        self.No_of_books = len(self.Books)
    
    def show_data(self):
        print(f"The library has {self.No_of_books} books which are:")
        for book in self.Books:
            print(book)

    def check_data(self):
        if(self.No_of_books == len(self.Books)):
            print("Everthing is fine.")
        else:
            print('something is wrong.')

li = library()
li.addBook("The Alchemist")
li.addBook("Atomic Habits")
li.addBook("Harry Potter")
li.show_data()