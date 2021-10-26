from reviews.reviews import Review
from utils import OK, ACCEPTED, BAD_REQUEST, CREATED, NOT_FOUND 
from flask import jsonify
from reviews.reviews_DAO import ReviewDAO


class ReviewManager:

    def get_all(self):                
        return jsonify(Review=[vars(Review(*rev)) for rev in ReviewDAO().get_all()]), OK

    def get(self, review_id):
        info = ReviewDAO().get(review_id)
        if info:
            return jsonify(vars(Review(*info))), OK
        else:
            return jsonify(Error='Does not exist in database.'), NOT_FOUND

    def delete(self, review_id):
        info = ReviewDAO().delete(review_id)
        if info:
            return jsonify(DeletedReview=vars(Review(*info))), OK
        else:
            return jsonify(Error='Does not exist in database.'), NOT_FOUND

    def edit(self, review_id, new_info):
        info = ReviewDAO().edit(review_id, new_info)
        if info:
            return jsonify(UpdatedReview=vars(Review(*info))), OK
        else:
            return jsonify(Error='Does not exist in database.'), NOT_FOUND

    def add(self, review_info):
        info = ReviewDAO().add(review_info)
        if info:
            return jsonify(ReviewIndex=info), CREATED
        else:
            return jsonify(Error='Failed to create Review'), BAD_REQUEST

