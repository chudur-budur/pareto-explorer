import os
from flask import Flask
from .routes.examples import examples_api


# app = Flask(__name__)
app = Flask(__name__, static_folder='../build', static_url_path='')

app.register_blueprint(examples_api)


@app.route('/', methods=["GET"])
def index():
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
    # app.run(host='localhost', debug=True, port=os.environ.get('PORT', 5000))
