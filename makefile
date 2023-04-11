deploy:
	@printf "\033[0;32m>>> Deploying app to prod\033[0m\n"
	npm run generate
	serverless client deploy
