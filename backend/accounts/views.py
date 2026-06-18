from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser, BasePermission

User = get_user_model()

class IsSuperUser(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated and request.user.is_superuser

class RegisterView(APIView):

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        full_name = request.data.get('fullName', '')

        if not email or not password:
            return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=email).exists() or User.objects.filter(email=email).exists():
            return Response({'error': 'A user with this email already exists.'}, status=status.HTTP_400_BAD_REQUEST)

        # Split full name into first and last name
        names = full_name.split(' ', 1)
        first_name = names[0] if len(names) > 0 else ''
        last_name = names[1] if len(names) > 1 else ''

        # Create user
        user = User.objects.create_user(
            username=email,
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name
        )

        # Generate tokens
        refresh = RefreshToken.for_user(user)

        return Response({
            'success': True,
            'access': str(refresh.access_token),
            'refresh': str(refresh),
            'user': {
                'id': user.id,
                'email': user.email,
                'username': user.username,
                'fullName': f"{user.first_name} {user.last_name}".strip(),
                'isStaff': user.is_staff,
                'isSuperuser': user.is_superuser
            }
        }, status=status.HTTP_201_CREATED)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data['user'] = {
            'id': self.user.id,
            'email': self.user.email,
            'username': self.user.username,
            'fullName': f"{self.user.first_name} {self.user.last_name}".strip(),
            'isStaff': self.user.is_staff,
            'isSuperuser': self.user.is_superuser
        }
        data['success'] = True
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class AdminUserListView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]

    def get(self, request):
        users = User.objects.all().order_by('-date_joined')
        user_list = []
        for u in users:
            user_list.append({
                'id': u.id,
                'email': u.email,
                'username': u.username,
                'fullName': f"{u.first_name} {u.last_name}".strip() or u.username,
                'niche': u.niche,
                'platform': u.platform,
                'audienceType': u.audience_type,
                'isStaff': u.is_staff,
                'isSuperuser': u.is_superuser,
                'isActive': u.is_active,
                'dateJoined': u.date_joined
            })
        return Response(user_list)

    def delete(self, request, pk):
        # Only superusers can delete users
        if not request.user.is_superuser:
            return Response({'error': 'Only superusers can delete accounts.'}, status=status.HTTP_403_FORBIDDEN)
        try:
            user_to_delete = User.objects.get(pk=pk)
            if user_to_delete.is_superuser:
                return Response({'error': 'Cannot delete superuser accounts.'}, status=status.HTTP_400_BAD_REQUEST)
            user_to_delete.delete()
            return Response({'success': True})
        except User.DoesNotExist:
            return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)


class AdminToggleStaffView(APIView):
    permission_classes = [IsAuthenticated, IsSuperUser]

    def post(self, request, pk):
        try:
            target_user = User.objects.get(pk=pk)
            if target_user.id == request.user.id:
                return Response({'error': 'You cannot change your own admin status.'}, status=status.HTTP_400_BAD_REQUEST)
            target_user.is_staff = not target_user.is_staff
            target_user.save()
            return Response({
                'success': True,
                'isStaff': target_user.is_staff
            })
        except User.DoesNotExist:
            return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
