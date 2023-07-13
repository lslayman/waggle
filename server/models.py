from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-pets.user', '-pets.pet_photos.pet')

    id = db.Column(db.Integer, primary_key=True)
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
        return f'<User {self.id}: {self.email}>'
    
    @validates('email')
    def validate_email(self, key, email):
        if not email:
            raise ValueError("Email address required.")
        elif '@' not in email:
            raise ValueError("Please enter a valid email address.")
        else:
            existing_user = User.query.filter(User.email == email).first()
            if existing_user:
                raise ValueError("There is already an account registered to that email address.")
        return email
        
    @validates('password')
    def validate_password(self, key, password):
        if not password:
            raise ValueError("Password required.")
    
    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))

class Pet(db.Model, SerializerMixin):
    __tablename__ = 'pets'

    serialize_rules = ('-organization.pets', '-photos.pet')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    organization_id = db.Column(db.String, db.ForeignKey('organizations.id'))
    species = db.Column(db.String, nullable=False)
    breed = db.Column(db.String, nullable=False)
    age = db.Column(db.String, nullable=False)
    gender = db.Column(db.String, nullable=False)
    size = db.Column(db.String, nullable=False)
    color = db.Column(db.String, nullable=False)
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

    pet_organization = db.relationship('Organization', backref='pets')
    photos = db.relationship('PetPhoto', backref='pet')

    def __repr__(self):
        return f'<Pet {self.id}: {self.name}>'
    
    @validates('name')
    def validate_name(self, key, name):
        if not name:
            raise ValueError('Name is a required field.')

    @validates('species')
    def validate_species(self, key, species):
        if not species:
            raise ValueError('Species is a required field.')

    @validates('breed')
    def validate_breed(self, key, breed):
        if not breed:
            raise ValueError('Breed is a required field.')

    @validates('age')
    def validate_age(self, key, age):
        if not age:
            raise ValueError('Age is a required field.')

    @validates('gender')
    def validate_gender(self, key, gender):
        if not gender:
            raise ValueError('Gender is a required field.')

    @validates('size')
    def validate_size(self, key, size):
        if not size:
            raise ValueError('Size is a required field.')

    @validates('color')
    def validate_color(self, key, color):
        if not color:
            raise ValueError('Color is a required field.')


class PetPhoto(db.Model, SerializerMixin):
    __tablename__ = 'pet_photos'

    serialize_rules = ('-pet.pet_photos')

    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey('pets.id'))
    url = db.Column(db.String)
    caption = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    pet_in_photo = db.relationship('Pet', backref='pet_photos')

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

    org_pets = db.relationship('Pet', backref='organization')

    def __repr__(self):
        return f'<Organization {self.id}: {self.name}>'
    
    @validates('name')
    def validate_name(self, key, name):
        if not name:
            raise ValueError('Name is a required field.')

class Admin(db.Model, SerializerMixin):
    __tablename__ = 'admins'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    organization_id = db.Column(db.String, db.ForeignKey('organizations.id'))

    def __repr__(self):
        return f'<Admin id={self.id}, user_id={self.user_id}, organization={self.organization_id}>'