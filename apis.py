from flask_restful import Resource, reqparse
from app import api, db, bcrypt
from db.user import User

parser = reqparse.RequestParser()
parser.add_argument('full_name', type=str)
parser.add_argument('phone', type=str)
parser.add_argument('username', type=str)
parser.add_argument('password', type=str)
parser.add_argument('confirm_password', type=str)

class Register(Resource):
    def get(self):
        return {'hello': 'data'}

    def post(self):
        args = parser.parse_args()
        if args['password'] != args['confirm_password']:
            return {
                        'message': 'Password did not match with confirm-password.',
                        'data': args
                   }, 400
        if User.query.filter_by(username=args['username']).first():
            return {
                        'message': 'Duplicate username',
                        'data': args
                   }, 400
        hashed_password = bcrypt.generate_password_hash(args['password'])
        user = User(full_name=args['full_name'], phone=args['phone'],
                    username=args['username'], password=hashed_password)
        db.session.add(user)
        db.session.commit()
        return {
                    'message': 'Successfully',
                    'data': args
               }, 400



api.add_resource(Register, '/register')
