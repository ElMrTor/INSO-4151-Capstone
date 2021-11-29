from users.users import User
from users.users_DAO import UserDAO
from flask import jsonify
from utils import OK, ACCEPTED, BAD_REQUEST, CREATED, NOT_FOUND, NOT_ACCEPTABLE, SERVICE_UNAVAILABLE


class UserManager:

    def user_exist(self, username):
        if UserDAO().get_by_attribute('username', username):
            return True
        else:
            return False

    def user_email_exist(self, email):
        if UserDAO().get_by_attribute('email', email):
            return True
        else:
            return False

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

    def add(self, user_info_tuple):
        info = UserDAO().add(user_info_tuple)
        if info:
            return jsonify(UserIndex=info), CREATED
        else:
            return jsonify(Error='Failed to create User'), BAD_REQUEST

    def register_user(self, user_info_dict):
        try:    
            print(user_info_dict)
            print(type(user_info_dict))        
            username = user_info_dict['username']
            email = user_info_dict['email']
            if self.user_exist(username):
                return jsonify(Error='User already exists.'), NOT_ACCEPTABLE
            elif self.user_email_exist(email):
                return jsonify(Error='Email already exists.'), NOT_ACCEPTABLE
            else:
                return self.add(tuple(user_info_dict.values()))
        except Exception as e:            
            return jsonify(Error='Error ocurred during registration of user.'), SERVICE_UNAVAILABLE

