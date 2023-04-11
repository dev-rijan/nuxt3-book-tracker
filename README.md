# Book reader app

## Project setup and usage

install node:

Latest node > v14 Use node manager like nvm to install.

Install dependencies:

```
npm install
```
Copy .env.example and make .env file, also change variables in .env file accordingly
```
cp .env.example .env
```

Run development server:
```
npm run dev
```

Check lint:
```
npm run lint
```

Fix lint:
```
npm run lintfix
```

## Project deployment
This app has setup to deploy static site to s3

step1: Make sure to setup aws profile in your machine
```

```
step2: Generate static site
```
npm run generate
```

step 3: Deploy to s3 using serverless framework
```
serverless client deploy
```
