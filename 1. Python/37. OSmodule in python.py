import os

# os.chdir("/2. HTML and CSS")
# print(os.getcwd())

# if(not os.path.exists("37. OS module Uses")): # Checking if file donot exist.
#     os.mkdir("37. OS module Uses") # To create folder

''' To create folders '''
# for i in range(1, 101):
#     os.mkdir(f"37. OS module Uses/Day{i}")

''' To create folders inside folders of specific folder'''
# for i in range(1, 10):
#     os.makedirs(f"37. OS module Uses/Day{i}")

''' To rename folders '''
# for i in range(1, 101):
#     os.rename(f"37. OS module Uses/Day{i}", f"37. OS module Uses/Tutorial{i}")

''' To create list of all the folders in the given folder'''
# folders = os.listdir("37. OS module Uses")
# print(folders)

# for folder in folders:
#     print(folder)
#     print(os.listdir(f"37. OS module Uses/{folder}"))

# print(os.getcwd()) # To get directory.

''' To remove file '''
# if(os.path.exists("37. OS module Uses/tempCodeRunnerFile.py")): # Checking if file exist.
#     os.remove("37. OS module Uses/tempCodeRunnerFile.py")

''' To remove empty file '''
# os.rmdir("File_name") # removes an empty directory.