import os
from django.contrib.auth import authenticate, login, logout
from django.conf import settings
from rest_framework.renderers import StaticHTMLRenderer
from rest_framework.response import Response
from rest_framework.views import APIView
import requests

# Create your views here.
api_key = "0a7947c7-447a-45d8-981c-996f64c350c1"


class LogoutView(APIView):
    def get(self, request):
        logout(request)
        return Response('Success')


class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return Response('Success')
        return Response('User not found')


class CatView(APIView):
    def get(self, request):
        url = "https://api.thecatapi.com/v1/images/search"
        headers = {'x-api-key': api_key}
        resp = requests.get(url, headers=headers)
        return Response(resp)


class AppView(APIView):
    renderer_classes = [StaticHTMLRenderer]

    def get(self, request):
        with open(os.path.join(
                settings.REACT_APP_DIR, 'dist', 'index.html')) as f:
            return Response(f.read())
