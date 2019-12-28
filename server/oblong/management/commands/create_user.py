from django.core.management.base import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):
    help = 'Adds default user to django'

    def add_arguments(self, parser):
        parser.add_argument('username')
        parser.add_argument('password')

    def handle(self, *args, **options):
        User.objects.all().delete()
        User.objects.create_user(options['username'],
                                 password=options['password'])
