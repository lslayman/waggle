#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, jsonify, make_response, session
from flask_restful import Resource

# Local imports
from config import app, db, api, bcrypt
from models import User, Pet, PetPhoto, Favorite, Organization, Admin

# Views go here!

class Users(Resource):

    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return make_response(jsonify(users), 200)
    
    def post(self):

        new_user = User(
            username=request.form['username'],
            email=request.form['email'],
            password=request.form['password'],
            first_name=request.form['first_name'],
            last_name=request.form['last_name'],
            avatar=request.form['avatar'],
            bio=request.form['bio'],
            location=request.form['location'],
            is_admin=request.form['is_admin']
        )

        db.session.add(new_user)
        db.session.commit()

        user_dict = new_user.to_dict()

        response = make_response(
            user_dict,
            201
        )

        return response
    
api.add_resource(Users, '/users')

class UsersById(Resource):
    def get(self, id):
        
        user_dict = User.query.filter_by(id=id).first().to_dict()

        response = make_response(
            user_dict,
            200
        )
        return response
    
    def patch(self, id):

        user = User.query.filter_by(id=id).first()
        for attr in request.form:
            setattr(user, attr, request.form[attr])

        db.session.add(user)
        db.session.commit()

        response_dict = user.to_dict()

        response = make_response(
            response_dict,
            200
        )

        return response


if __name__ == '__main__':
    app.run(port=5555, debug=True)
