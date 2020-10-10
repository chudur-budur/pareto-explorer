import time
import os
import json
import ast
from flask import Flask

app = Flask(__name__)


def make_path(name):
    parts = name.split('-')
    dir_name = '-'.join(parts[:-1])
    dim = parts[-1]
    path = os.path.join('./data', dir_name, dim, 'index.js')
    return path


def parse_json(path):
    fp = open(path)
    jstr = ''
    for line in fp:
        line = line.strip()
        if line != '' and not(line[0] == '/' and line[1] == '/'):
            if ':' in line:
                [key, val] = line.split(':')
                key = key.strip()
                val = val.strip()
                if val and 'require' in val:
                    data_file = val.split('require')[-1][4:-3]
                    data_path = os.path.join(os.path.split(path)[0], data_file)
                    fp_ = open(data_path)
                    val = json.dumps(json.load(fp_)) + ','
                    fp_.close()
                jstr = jstr + '\"' + key + '\": ' + val
            else:
                jstr = jstr + line.strip()
    fp.close()
    jstr = jstr.replace("var data = ", '')
    jstr = jstr.replace(";export default data;", '')
    jstr = jstr.replace(",]", "]")
    jstr = jstr.replace("],}", "]}")
    return jstr


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/name')
def get_name():
    return {'name': 'mofiz'}


@app.route('/api/<string:pf>')
def get_pf(pf):
    print("Received request for " + pf)
    path = make_path(pf)
    print("Fetching " + path)
    data = 'null'
    if os.path.exists(path):
        data = json.dumps(parse_json(path))
        # print(data)
    return data


if __name__ == "__main__":
    t = get_current_time()
    print(t)
    n = get_name()
    print(n)
    d = get_pf('cdebmdk-nbi-4d')
    print(d)
