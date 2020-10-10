"""api.py -- A RESTful API to connect to `pviz` through flask
    This module provides a RESTful API to connect to `pviz` [1]_ 
    capabilities through a `flask` service endpoint. This module
    serves as the backend to the `pareto-explorer` app.

    Copyright (C) 2016
    Computational Optimization and Innovation (COIN) Laboratory
    Department of Computer Science and Engineering
    Michigan State University
    428 S. Shaw Lane, Engineering Building
    East Lansing, MI 48824-1226, USA
    
    References
    ----------
    .. [1] [pviz](https://github.com/chudur-budur/pviz)

.. moduleauthor:: AKM Khaled Talukder <talukde1@msu.edu>
"""


import time
import os
import json
from flask import Flask

# app = Flask(__name__)
app = Flask(__name__, static_folder='../../build', static_url_path='')


def make_path(pf):
    r"""Builds a path from the route parameter string

    Builds a relative path from the route parameter string.
    The route parameters are basically the name of the Pareto-front data 
    to be loaded, i.e. `'cdebmk-nbi-4d'`. This function breaks it up and 
    constructs a path like `./data/cdebmdk-nbi/4d/index.js`

    Parameters
    ----------
    pf : str 
        A route parameter string.

    Returns
    -------
    path : str or os.path
        The path to data.
    """
    parts = pf.split('-')
    dir_name = '-'.join(parts[:-1])
    dim = parts[-1]
    path = os.path.join('./data', dir_name, dim, 'index.js')
    return path


def parse_json(path):
    r"""Parses a javascript object into json string

    Parses the javascript object pointed by the `path` string variable
    and returns a json string to be dispatched by the api endpoint.

    Parameters
    ----------
    path : str or os.path
        Path to the Pareto-front data file as javascript object.

    Returns
    -------
    jstr : str
        JSON string of the javascript object given in the file.
    """
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


@app.route('/api/<string:pareto_front>')
def get_pf(pareto_front):
    r"""An API endpoint to dispatch Pareto-front data

    This function receives the name of the Pareto-front data to be loaded
    by the pareto-explorer app. Then it loads the javascript object
    from the relevant path.

    Parameters
    ----------
    pareto_front : str 
        The API endpoint parameter in string.

    Returns
    -------
    data : str
        A JSON string representation of the javascript object.
    """
    print("Received request for " + pareto_front)
    path = make_path(pareto_front)
    print("Fetching " + path + ' ...')
    data = 'null'
    if os.path.exists(path):
        data = json.dumps(parse_json(path))
        print("Dispatching data ...")
        # print(data)
    return data


@app.route('/', methods=["GET"])
def index():
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
