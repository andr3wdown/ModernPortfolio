#WARNING: ALWAYS BACKUP YOUR FILES BEFORE RUNNING THIS SCRIPT!

import os
import re
file_path = f"components/"
output_path = f"output/"

def pixel_to_em(px, base=16):
    return f"{px/base}em"

def replace_px_values(line):
    matches = re.findall(r'\d+px', line)
    for match in matches:
        if match != "1px" and match != "0px": 
            line = re.sub(match, pixel_to_em(int(match[:-2])), line)
    return line

def replace_em_values(line):
    matches = re.findall(r'(\d+\.\d+)em', line)
    for match in matches:
        line = re.sub("em", "rem", line)
    return line

def em_to_rem_refactor(path):
    files = os.listdir(path)
    for file in files:
        with open(path + file, 'r') as f:
            lines = [line.rstrip() for line in f]
        with open(output_path + file, 'w') as f:
            for line in lines:
                modified = replace_em_values(line)
                f.write(modified + "\n")
                
                
    


def auto_refactor(path):
    files = os.listdir(path)
    for file in files:
        with open(file_path + file, 'r') as f:
            lines = [line.rstrip() for line in f]
        with open(output_path + file, 'w') as f:   
            for line in lines:
                modified = replace_px_values(line)
                f.write(modified + "\n")
    
#auto_refactor(file_path)
em_to_rem_refactor(file_path)