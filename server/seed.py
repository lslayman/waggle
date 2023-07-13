#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User

def seed_data():
    users = []
    for _ in range(5):
        user = User(
            email=fake.email(),
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            avatar=fake.image_url(),
            bio=fake.text(),
            location=fake.city(),
            is_admin=fake.boolean()
        )
        user.password = "Password2!"
        users.append(user)
        db.session.add(user)
    db.session.commit()

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
        User.query.delete()

        seed_data()

        print('Data seeded successfully.')
