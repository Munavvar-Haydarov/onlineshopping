import os
import re

# specify the directory that contains the files
directory = './'

# loop through each file in the directory
for filename in os.listdir(directory):
    # remove non-alphanumeric characters from the file name
    # new_filename = re.sub('[^-a-zA-Z]+', '', filename)
    new_filename = filename.replace("customtic-", "")

    # check if the file name has changed
    if new_filename != filename:
        # rename the file with the new name
        os.rename(os.path.join(directory, filename),
                  os.path.join(directory, new_filename.lower()))
        # os.rename(os.path.join(directory, filename.lower()))
