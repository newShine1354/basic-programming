letter = "Hey my name is {1} and I am from {0}"
country = "India"
name = "Navnoor Singh"

# Format Method
print(letter.format(country, name)) # country represents 0 and name repersents 1.

txt = "For only {price:.2f} dollars!"
print(txt.format(price = 49.20586636))

# f string
print(f"Hey my name is {name} and I am from {country}") 
print(f"Hey my name is {{name}} and I am from {{country}}") 
price = 49.20586636
txt = f"For only {price:.2f} dollars!"
print(txt)
print(f"{2 * 30}")
print(type(f"{2 * 30}"))