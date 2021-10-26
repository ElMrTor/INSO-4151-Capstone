


class Review:

    def __init__(self, review_id, review_score,
                description, is_deleted) -> None:
        self.review_id = review_id
        self.review_score = review_score
        self.description = description
        self.is_deleted = is_deleted
        