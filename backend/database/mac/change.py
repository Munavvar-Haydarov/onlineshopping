import os
import re
dir_path = '/path/to/directory'
# iterate over all files in the directory
for file_name in os.listdir(dir_path):
    # check if the file has a .jpg extension
    if file_name.endswith('.jpg'):
        # remove all special characters and .- from the rest of the file name
        new_file_name = re.sub(r'[^\w\s]|(?<!\.)(-)|(?!^)\.', '', file_name)
        # rename the file with the new file name
        os.rename(os.path.join(dir_path, file_name),
                  os.path.join(dir_path, new_file_name))
