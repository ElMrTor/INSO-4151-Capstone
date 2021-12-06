from flask_login import UserMixin


class User(UserMixin):

    def __init__(self, user_id, stat_id,
                name, email,
                password, verified, total_raffle_participation,
                priviledges, username, photo=None):
        self.user_id = user_id
        self.id = self.user_id
        self.stat_it = stat_id
        if isinstance(photo, bytearray):
            self.photo = photo.tobytes()
        else:
            self.photo = photo
        self.name = name
        self.email = email
        self.password = password
        self.verified = verified
        self.total_raffle_participation = total_raffle_participation
        self.priviledges = priviledges
        self.username = username