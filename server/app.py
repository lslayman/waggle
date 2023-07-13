#!/usr/bin/env python3

# Standard library imports
import datetime
import logging

# Remote library imports
from flask import request, jsonify, make_response, session
from functools import wraps
from flask_restful import Resource

# Local imports
from config import app, db, api, bcrypt, requests
from models import User, Pet, PetPhoto, Favorite, Organization, Admin

petfinder_token = None
TOKEN_EXPIRES_IN = 3600

logging.basicConfig(level=logging.DEBUG)

# Views go here!

class ExternalPets(Resource):
    def get(self):

        global petfinder_token

        if check_token_expiration():
            logging.debug("Token expired. Renewing token.")
            renewed_token = renew_token_request()
            if renewed_token:
                token = renewed_token['access_token']
            else:
                logging.debug("Failed to renew token.")
                return{'error': 'An error has occurred.'}
            
        else:
            token = request_token()
            if not token:
                logging.debug("Failed to obtain token.")
                return{'error': 'An error has occurred.'}

        if type(token) is str:
            real_token = token
        else:
            real_token = token['access_token']
        headers = {
            'Authorization': f'Bearer {real_token}',
            'Content-Type': 'application/json',
        }
        
        response = requests.get('https://api.petfinder.com/v2/animals', headers=headers)

        if response.ok:
            data = response.json()
            return data
        else: logging.debug(f"API request failed. Response:{response.status_code}, {response.text}")
        
        return{'error': 'An error occurred'}

class Users(Resource):

    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return make_response(jsonify(users), 200)
    
    def post(self):

        new_user = User(
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
    

    # return to patch/full CRUD later
    # def patch(self, photo_id):

    #     photo_id = request.json.get('photo_id')
    #     pet_id = request.json.get('pet_id')
    #     url = request.json.get('url')
    #     caption = request.json.get('caption')

    #     if not photo_id:
    #         return {'message': 'Missing photo_id field'}, 400
        
    #     photo = PetPhoto.query.get(photo_id)
    #     if not photo:
    #         return {'message': 'Pet photo not found'}, 404
        
    #     if caption:
            
class Favorites(Resource):
    def get(self):
        favorites = [favorite.to_dict() for favorite in Favorite.query.all()]
        return make_response(jsonify(favorites), 200)
    
    def post(self):
        new_fave = Favorite(
            pet_id=request.form['pet_id'],
            user_id=request.form['user_id']
        )

        db.session.add(new_fave)
        db.session.commit()

        fave_dict = new_fave.to_dict()

        response = make_response(
            fave_dict,
            201
        )

        return response
    
    
class FavoritesById(Resource):
    def get(self, pet_id):
        
        fave_dict = Favorite.query.filter_by(id=pet_id).first().to_dict()

        response = make_response(
            fave_dict,
            200
        )
        return response
    
    def post(self, user_id, pet_id):
        
        user = User.query.get(user_id)
        pet = Pet.query.get(pet_id)

        if not user or not pet:
            return {'message': 'User or pet not found'}, 404
        
        favorite = Favorite(user_id=user_id, pet_id=pet_id)

        
        user.favorites.add(favorite)
        db.session.commit()

        return {'message': 'Pet added to Favorites successfully'}, 201
    
    def delete(self, id):
        try:
            favorite = Favorite.query.filter_by(id=id).first()

            if not favorite:
                return {'message': 'Favorite not found'}, 404

            db.session.delete(favorite)
            db.session.commit()

            return{}, 204
        except:
            return{"error": "404: Favorite not found"}, 404
        
class Join(Resource):

    def post(self):
        email = request.form.get('email')
        password = request.form.get('password')

        if not email or not password:
            return make_response(jsonify({'error': 'Email and password are required.'}), 400)

        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return make_response(jsonify({'error': 'An account with this email already exists.'}), 400)

        new_user = User(email=email, password=password)

        db.session.add(new_user)
        db.session.commit()

        return make_response(jsonify({'message': 'Account created successfully.'}), 201)
    
class Login(Resource):

    def post(self):
        data = request.get_json()

        email = data['email']
        password = data['password']
        
        user = User.query.filter_by(email=email).first()
        if user and user.authenticate(password):
            session['user_id'] = user.id
            return make_response(user.to_dict(), 200)
        else:
            return make_response("Invalid credentials", 401)
        
class CheckSession(Resource):

    def get(self):
        if session.get('user_id'):
            user = User.query.filter(User.id == session['user_id']).first()
            return user.to_dict(), 200
        return None, 404

class Logout(Resource):

    def delete(self):
        session['user_id'] = None
        return {'message': '204: No Content'}, 204


api.add_resource(ExternalPets, '/external-pets')
api.add_resource(Users, '/users')
api.add_resource(UsersById, '/users/<int:id>')
api.add_resource(Pets, '/pets')
api.add_resource(PetsById, '/pets/<int:id>')
api.add_resource(PetPhotos, '/petphotos')
api.add_resource(Favorites, '/users/,<int:user_id>/favorites')
api.add_resource(FavoritesById, '/users/,<int:user_id>/favorites/<pet_id>')
api.add_resource(Join, '/join')
api.add_resource(Login, '/login')
api.add_resource(CheckSession, '/check-session')
api.add_resource(Logout, '/logout')

# Helper functions

def request_token():
    global petfinder_token

    if petfinder_token is None or check_token_expiration():

        response = requests.post('https://api.petfinder.com/v2/oauth2/token', data={
            'grant_type': 'client_credentials',
            'client_id': 'Ojnfj55FZz9trouThMBJZoXo50gkbFaMWLkRLtPVcwW2CLwvQt',
            'client_secret': 'wxNNLCvU3XXCeiJFdlwSLCVRLN6P9Ni3vmmZs5FJ',
        })

        if response.ok:
            data=response.json()
            petfinder_token = {
                'access_token': data['access_token'],
                'expiration_time': calculate_time_remaining(data['expires_in'])
            }
        else:
            petfinder_token = None

    return petfinder_token

def calculate_time_remaining():
    current_time = datetime.datetime.now()
    expiration_time = current_time + datetime.timedelta(seconds=TOKEN_EXPIRES_IN)
    return expiration_time

def check_token_expiration():
    global petfinder_token

    if petfinder_token and 'expiration_time' in petfinder_token:
        expiration_time = petfinder_token['expiration_time']
        current_time = datetime.datetime.now()
        if expiration_time > current_time:
            return False
    return True
    
def renew_token_request():
    global petfinder_token

    response = requests.post('https://api.petfinder.com/v2/oauth2/token', data={
            'grant_type': 'client_credentials',
            'client_id': 'Ojnfj55FZz9trouThMBJZoXo50gkbFaMWLkRLtPVcwW2CLwvQt',
            'client_secret': 'wxNNLCvU3XXCeiJFdlwSLCVRLN6P9Ni3vmmZs5FJ',
    })

    if response.ok:
        data = response.json()
        petfinder_token = {
            'access_token': data['access_token'],
            'expiration_time': calculate_time_remaining()
        }
        return petfinder_token
    else:
        petfinder_token = None
        return None


if __name__ == '__main__':
    app.run(port=5555, debug=True)
