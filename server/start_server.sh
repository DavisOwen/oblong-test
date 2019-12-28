#!/bin/sh

# Just in case you don't want to get your own api key
# but obviously this is not secure to leave this is plain text

# api_key="0a7947c7-447a-45d8-981c-996f64c350c1"

echo Username:
read username
echo Password:
read -s password
echo API_KEY:
read api_key

export API_KEY=$api_key

python manage.py create_user $username $password

python manage.py runserver
