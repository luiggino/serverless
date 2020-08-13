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
serverless plugin install -n  serverless-dynamodb-local
```
# Install dynamodb

```
sls dynamodb install
```

# Install deps

```
npm i aws-sdk --save-dev
npm i uuid --save
```

# Start

```
serverless offline start
```

# Test
```
curl --location --request POST 'http://localhost:3000/dev/notes' \
--header 'Content-Type: application/json' \
--data-raw '{
  "body": "{\"content\":\"hello world\",\"attachment\":\"hello.jpg\"}",
  "requestContext": {
    "identity": {
      "cognitoIdentityId": "USER-SUB-1234"
    }
  }
}'```