VERSION=1.0.0
DOCKER_IMAGE=pokemon_utility:$(VERSION)

build:
	docker build -t $(DOCKER_IMAGE) .

run:
	docker run --rm -p 3080:80 $(DOCKER_IMAGE)