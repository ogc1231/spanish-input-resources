release: python manage.py makemigrations && python manage.py migrate

web: gunicorn sir_api.wsgi
