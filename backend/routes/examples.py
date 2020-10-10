"""examples.py -- A RESTful API to connect to `pviz` through flask
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

import os
import json
from flask import Blueprint
from .utils import make_path, parse_json

examples_api = Blueprint('examples_api', __name__)


@examples_api.route('/examples_api/<string:pareto_front>')
def dispatch_example(pareto_front):
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
    else:
        print("Error: " + path + " not found.")
    return data
