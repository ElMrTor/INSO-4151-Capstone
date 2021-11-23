from users.users import User
from users.users_DAO import UserDAO
from flask import jsonify
from utils import OK, ACCEPTED, BAD_REQUEST, CREATED, NOT_FOUND


class User:

    def get_all(self):
        return jsonify(User=[vars(User(*rev)) for rev in UserDAO().get_all()]), OK

    def get(self, user_id):
        info = UserDAO().get(user_id)
        if info:
            return jsonify(vars(User(*info))), OK
        else:
            return jsonify(Error='Does not exist in database.'), NOT_FOUND

    def delete(self, user_id):
        info = UserDAO().delete(user_id)
        if info:
            return jsonify(DeletedUser=vars(User(*info))), OK
        else:
            return jsonify(Error='Does not exist in database.'), NOT_FOUND

    def edit(self, user_id, new_user_info):
        info = UserDAO().edit(user_id, new_user_info)
        if info:
            return jsonify(UpdatedUser=vars(User(*info))), OK
        else:
            return jsonify(Error='Does not exist in database.'), NOT_FOUND

    def add(self, user_id):
        info = UserDAO().add(user_id)
        if info:
            return jsonify(UserIndex=info), CREATED
        else:
            return jsonify(Error='Failed to create User'), BAD_REQUEST

