.PHONY: up down logs status shell clean prune

DATA_DIR=./data

up:
	mkdir -p $(DATA_DIR)
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f

status:
	docker compose ps

shell:
	docker exec -it mongo-rs mongosh

clean:
	@echo "Stopping and removing containers, then deleting all data..."
	docker compose down
	rm -rf $(DATA_DIR)
	echo "removed $(DATA_DIR)}..."

prune:
	@echo "WARNING: This will remove all stopped containers, networks, and dangling images."
	docker system prune -af
