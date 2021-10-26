from random import Random
from reviews.reviews_DAO import ReviewDAO
from requests import put, delete, post, get
from threading import Thread

with open('src/reviews_random', 'r') as review_file:
    review_data = review_file.readlines()

rand = Random()

add_review_url = 'http://localhost:5000/reviews'

def get_random_number():
    return rand.randint(1, 100)

def get_random_bool():
    return bool(rand.randint(0, 1))

def get_random_description():
    return rand.choice(review_data)

def add_review_amount(amount: int):
    for i in range(amount):
        review = {'review_score':get_random_number(), 
        'description':get_random_description(), 'is_deleted':get_random_bool()}
        content = post(add_review_url, json=review).json().get('ReviewIndex')
        print(f'Added review into database with id number: {content}.')

def add_review_amount_multithread(amount_review, thread_amount):
    threads = []
    for i in range(thread_amount):
        threads.append(Thread(target=add_review_amount, args=(amount_review, )))
    for i in range(thread_amount):
        print(f'Starting thread_{i}...')
        threads[i].start()
    for i in range(thread_amount):
        print(f'Thread_{i} completed adding reviews.')
        threads[i].join()

if __name__=='__main__':
    # add_review_amount(100)
    add_review_amount_multithread(3, 5)
        
