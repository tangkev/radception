import firebase_admin
from firebase_admin import db
from firebase_admin import credentials
import flask
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)

cred = credentials.Certificate('../../radception-database-credentials.json')
firebase_admin.initialize_app(cred, options={
    'databaseURL': 'https://radception-database.firebaseio.com'
})
USERS = db.reference('users')

@app.route('/users', methods=['POST'])
def create_user():
    req = flask.request.json
    user = USERS.child(req["username"]).set(req)
    return flask.jsonify({'id': user.key}), 201

@app.route('/users/<id>')
def read_user(id):
    return flask.jsonify(_ensure_user(id))

@app.route('/users/<id>', methods=['PUT'])
def update_user(id):
    _ensure_user(id)
    req = flask.request.json
    USERS.child(id).update(req)
    return flask.jsonify({'success': True})

@app.route('/users/<id>', methods=['DELETE'])
def delete_user(id):
    _ensure_user(id)
    USERS.child(id).delete()
    return flask.jsonify({'success': True})

def _ensure_user(id):
    user = USERS.child(id).get()
    if not user:
        flask.abort(404)
    return user