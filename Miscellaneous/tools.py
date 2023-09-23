import os
import json
import fnmatch

def save_to_json(data, filename):
    with open(filename, 'w') as f:
        json.dump(data, f)


def read_from_json(filename):
    with open(filename) as f:
        return json.load(f)

def ensure_dir(dirname):
    if not os.path.exists(dirname):
        os.makedirs(dirname)


def list_files(path='.', patterns=['*'], min_depth=0, max_depth=float('inf')):
    if type(patterns) == str:
        patterns = [patterns]
    found_files = []
    for (dirpath, dirnames, filenames) in os.walk(path):
        for filename in filenames:
            filedir = os.path.abspath(dirpath)
            filepath = os.path.join(filedir, filename)
            depth = filepath[len(os.path.abspath(path)) + len(os.path.sep):].count(os.path.sep)
            if min_depth <= depth <= max_depth:
                for pattern in patterns:
                    if fnmatch.fnmatch(filename, pattern):
                        found_files.append(filepath)
    return found_files


def list_folders(path='.'):
    paths = [os.path.abspath(os.path.normpath(os.path.join(path, x))) for x in os.listdir(path)]
    return filter(lambda x: os.path.isdir(x), paths)
