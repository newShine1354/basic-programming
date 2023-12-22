dic = {
    "Noor" : "Shine",
    "Nav" : "New",
    57 : "Simmu",
    768 : "Ramneek"
    }
# print(dic["Noor"])
# print(dic["Noor1"]) # Show error
# print(dic[57])
# print(dic)
# print(dic.get('Noor'))
# print(dic.get('Noor1')) # output : none
# print(dic.keys())
# print(dic.values())

# for key in dic:
    # print(key)

# for value in dic:
#     print(dic[value])

# print(dic.items())
# for key in dic:
#     print(f"The value corresponds to the key {key} is {dic[key]}")

for key, value in dic.items():
    print(f"The value correspond to the key {key} is {value}")