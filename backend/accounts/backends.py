from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from django.db.models import Q

User = get_user_model()

class EmailOrUsernameModelBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        if username is None:
            username = kwargs.get(User.USERNAME_FIELD)
        
        if not username:
            return None

        # Filter users matching username OR email
        users = User.objects.filter(Q(username=username) | Q(email=username))
        
        for user in users:
            if user.check_password(password) and self.user_can_authenticate(user):
                return user
        return None
