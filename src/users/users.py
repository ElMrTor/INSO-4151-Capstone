


class User:

    def __init__(self, user_id, stat_id,
                photo, name, email,
                password, verified, total_raffle_participation,
                priviledges) -> None:
        self.user_id = user_id
        self.stat_it = stat_id
        self.photo = photo
        self.name = name
        self.email = email
        self.password = password
        self.verified = verified
        self.total_raffle_participation = total_raffle_participation
        self.priviledges = priviledges