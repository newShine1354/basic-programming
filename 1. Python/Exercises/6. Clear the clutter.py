import os

# pngs = os.listdir("6. Clear the clutter")
# print(pngs)

# for i in range(0, len(pngs)):
#     os.rename(f"6. Clear the clutter/{pngs[i]}", f"6. Clear the clutter/Png no. {i}.png")

def ChangeName(folder):
    files = os.listdir(folder)
    i = 1
    for file in files:
        # if file.endswith(".png"):
        os.rename(f"{folder}/{file}", f"{folder}/Png no.{i}.png")
        i = i + 1

ChangeName("6. Clear the clutter")

