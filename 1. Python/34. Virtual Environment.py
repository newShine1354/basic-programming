import pandas
print(pandas.__version__)
# To create virtual environment : python -m venv folder_name
# To create file corresponds to virtual environment : In the cmd of the folder in which folder of virtual environment is located after activating virtual environment write file_name.py
# To activate virtual environment : folder_name(Directory_name)\s(press tab)\a(press tab)
# pip freeze : to know all the versions installed in virtual environment or gobal python environment.
# To deactivate virtual environment : deactivate

# pip install pandas==1.4.4
# Output the list of installed packages and their versions to a file:
# pip freeze > requirements.txt
# To download all the packages of requirement.py in another virtual environment: pip install -r requirements.txt
# To check version of module : module_name.__version__

# Install the packages listed in the requirements.txt file.
# pip install -r requirements.txt