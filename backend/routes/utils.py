import os
import json

__all__ = ["make_path", "parse_json"]


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
    path = os.path.join('./backend/data', dir_name, dim, 'index.js')
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
