#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, jsonify, make_response, session
from functools import wraps
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
    
    def delete(self, id):
        try:
            user = User.query.filter_by(id=id).first()

            db.session.delete(user)
            db.session.commit()

            return{}, 204
        except:
            return{"error": "404: User not found"}, 404

class Pets(Resource):

    def get(self):
        pets = [pet.to_dict() for pet in Pet.query.all()]
        return make_response(jsonify(pets), 200)
    
    def post(self):

        new_pet_listing = Pet(
            name=request.form['name'],
            organization_id=request.form['organization_id'],
            species=request.form['species'],
            breed=request.form['breed'],
            age=request.form['age'],
            gender=request.form['gender'],
            size=request.form['size'],
            color=request.form['color'],
            coat=request.form['coat'],
            status=request.form['status'],
            good_with_children=request.form['good_with_children'],
            good_with_dogs=request.form['good_with_dogs'],
            good_with_cats=request.form['good_with_cats'],
            house_trained=request.form['house_trained'],
            declawed=request.form['declawed'],
            special_needs=request.form['special_needs'],
            location=request.form['location'],
            distance=request.form['distance']
        )

        db.session.add(new_pet_listing)
        db.session.commit()

        pet_dict = new_pet_listing.to_dict()

        response = make_response(
            pet_dict,
            201
        )

        return response
    
class PetsById(Resource):
    def get(self, id):
        
        pet_dict = Pet.query.filter_by(id=id).first().to_dict()

        response = make_response(
            pet_dict,
            200
        )
        return response
    
    def patch(self, id):

        pet = Pet.query.filter_by(id=id).first()
        for attr in request.form:
            setattr(pet, attr, request.form[attr])

        db.session.add(pet)
        db.session.commit()

        response_dict = pet.to_dict()

        response = make_response(
            response_dict,
            200
        )

        return response
    
    def delete(self, id):
        try:
            pet = Pet.query.filter_by(id=id).first()

            db.session.delete(pet)
            db.session.commit()

            return{}, 204
        except:
            return{"error": "404: Pet not found"}, 404
        
class PetPhotos(Resource):
    def get(self):
        pet_photos = [pet_photo.to_dict() for pet_photo in PetPhoto.query.all()]
        return make_response(jsonify(pet_photos), 200)
    
    def post(self):
        new_pet_photo = PetPhoto(
            pet_id=request.form['pet_id'],
            url=request.form['url'],
            caption=request.form['caption'],
        )

        db.session.add(new_pet_photo)
        db.session.commit()

        photo_dict = new_pet_photo.to_dict()

        response = make_response(
            photo_dict,
            201
        )

        return response
    
    def patch(self, photo_id):

        photo_id = request.json.get('photo_id')
        pet_id = request.json.get('pet_id')
        url = request.json.get('url')
        caption = request.json.get('caption')

        if not photo_id:
            return {'message': 'Missing photo_id field'}, 400
        
        photo = PetPhoto.query.get(photo_id)
        if not photo:
            return {'message': 'Pet photo not found'}, 404
        
        if caption:
            




api.add_resource(Users, '/users')
api.add_resource(UsersById, '/users/<int:id>')
api.add_resource(Pets, '/pets')
api.add_resource(PetsById, '/pets/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)
