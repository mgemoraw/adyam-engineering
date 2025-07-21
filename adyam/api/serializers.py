from rest_framework import serializers 
from core.models import (
    TeamMember,
)

# serializer classes
class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    username = serializers.CharField(max_length=150, required=True)
    email = serializers.EmailField(required=True)
    first_name = serializers.CharField(max_length=30, required=False, allow_blank=True)
    last_name = serializers.CharField(max_length=30, required=False, allow_blank=True)

    def create(self, validated_data):
        from .models import User
        return User.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.save()
        return instance
    
class AuthTokenSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150, required=True)
    password = serializers.CharField(max_length=128, write_only=True)

    def validate(self, data):
        from .models import User
        user = User.objects.filter(username=data['username']).first()
        if user is None or not user.check_password(data['password']):
            raise serializers.ValidationError("Invalid username or password")
        return data

    def create(self, validated_data):
        from .models import AuthToken
        from django.utils.crypto import get_random_string
        token = get_random_string(32)
        return AuthToken.objects.create(user=validated_data['user'], token=token)
    
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150, required=True)
    password = serializers.CharField(max_length=128, write_only=True)

    def validate(self, data):
        from .models import User
        user = User.objects.filter(username=data['username']).first()
        if user is None or not user.check_password(data['password']):
            raise serializers.ValidationError("Invalid username or password")
        return data

    def create(self, validated_data):
        from .models import AuthToken
        from django.utils.crypto import get_random_string
        token = get_random_string(32)
        return AuthToken.objects.create(user=validated_data['user'], token=token)

class UserProfileSerializer(serializers.Serializer):
    user = UserSerializer()
    first_name = serializers.CharField(max_length=30, required=False, allow_blank=True)
    last_name = serializers.CharField(max_length=30, required=False, allow_blank=True)
    bio = serializers.CharField(required=False, allow_blank=True)

    def create(self, validated_data):
        from .models import UserProfile
        user_data = validated_data.pop('user')
        user = UserSerializer.create(UserSerializer(), validated_data=user_data)
        return UserProfile.objects.create(user=user, **validated_data)

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.bio = validated_data.get('bio', instance.bio)
        instance.save()
        return instance
    
