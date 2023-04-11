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

Step1: Install serverless framework CLI if you not installed before
```shell
npm install -g serverless
```

Step2: Configure AWS
Setup AWS CLI if you have not already. 
you can find useful article here [create and configure AWS credentials](https://levelup.gitconnected.com/configure-aws-for-development-and-deployment-ad822097fc22)

step3: Generate static site
```
npm run generate
```

step4: Deploy to s3 using serverless framework
```
serverless client deploy
```

OR if you have `make` command supports in your machine

```
make deploy
```
