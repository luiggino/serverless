 # Install
 ```npm install serverless -g```

 # create serverless project
```
serverless create --template aws-nodejs --path myService
cd myService/
```

# Install plugins

```
serverless plugin install -n serverless-offline
serverless plugin install -n serverless-bundle
serverless plugin install -n serverless-dotenv-plugin
```

# Install deps

```
npm i aws-sdk --save-dev
npm i uuid --save
```

# Start
```serverless offline start```