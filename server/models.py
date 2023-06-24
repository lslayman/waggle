from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-pets.user', '-pets.pet_photos.pet')

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    avatar = db.Column(db.String)
    bio = db.Column(db.String)
    location = db.Column(db.String)
    is_admin = db.Column(db.Boolean)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    def __repr__(self):
        return f'<User {self.id}: {self.username}>'

class Pet(db.Model, SerializerMixin):
    __tablename__ = 'pets'

    serialize_rules = ('-organization.pets', '-photos.pet')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    organization_id = db.Column(db.String, db.ForeignKey('organizations.id'))
    species = db.Column(db.String, nullable=False)
    breed = db.Column(db.ARRAY(db.String), nullable=False)
    age = db.Column(db.String, nullable=False)
    gender = db.Column(db.String, nullable=False)
    size = db.Column(db.String, nullable=False)
    color = db.Column(db.ARRAY(db.String), nullable=False)
    coat = db.Column(db.String)
    status = db.Column(db.String)
    good_with_children = db.Column(db.Boolean)
    good_with_dogs = db.Column(db.Boolean)
    good_with_cats = db.Column(db.Boolean)
    house_trained = db.Column(db.Boolean)
    declawed = db.Column(db.Boolean)
    special_needs = db.Column(db.Boolean)
    location = db.Column(db.String)
    distance = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    organization = db.relationship('Organization', backref='pets')
    photos = db.relationship('PetPhoto', backref='pet')

    def __repr__(self):
        return f'<Pet {self.id}: {self.name}>'

class PetPhoto(db.Model, SerializerMixin):
    __tablename__ = 'pet_photos'

    serialize_rules = ('-pet.pet_photos')

    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey('pets.id'))
    url = db.Column(db.String)
    caption = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    pet = db.relationship('Pet', backref='pet_photos')

    def __repr__(self):
        return f'<PetPhoto id={self.id}: pet_id={self.pet_id}>'

class Favorite(db.Model, SerializerMixin):
    __tablename__ = 'favorites'

    serialize_rules = ('-user.favorites', '-pet.favorites')

    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey('pets.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    def __repr__(self):
        return f'<Favorite id={self.id}, pet_id={self.pet_id}, user_id={self.user_id}>'
    
class Organization(db.Model, SerializerMixin):
    __tablename__ = 'organizations'

    id = db.Column(db.String, primary_key=True)
    name = db.Column(db.String, nullable=False)
    url = db.Column(db.String)
    phone_number = db.Column(db.String)
    email = db.Column(db.String)
    address1 = db.Column(db.String)
    address2= db.Column(db.String)
    city = db.Column(db.String)
    state = db.Column(db.String)
    zip = db.Column(db.String)
    country = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    pets = db.relationship('Pet', backref='organization')

    def __repr__(self):
        return f'<Organization {self.id}: {self.name}>'

class Admin(db.Model, SerializerMixin):
    __tablename__ = 'admins'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    organization_id = db.Column(db.String, db.ForeignKey('organizations.id'))

    def __repr__(self):
        return f'<Admin id={self.id}, user_id={self.user_id}, organization={self.organization_id}>'