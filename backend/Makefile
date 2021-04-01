run-app:
	docker-compose up --build

run-stop:
	docker-compose down

run-prune:
	docker-compose -f docker-compose down

heroku_create:
	heroku create

heroku_login:
	heroku container:login

heroku_registry:
	docker build -f Dockerfile.prod -t registry.heroku.com/safe-wave-64363/web .

heroku_push:
	docker push registry.heroku.com/safe-wave-64363/web:latest

heroku_release:
	heroku container:release web --app safe-wave-64363

heroku_logs:
	heroku logs --app safe-wave-64363

heroku_token:
	heroku auth:token
