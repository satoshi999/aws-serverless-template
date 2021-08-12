# aws-serverless-template

# 概要
API gateway, lamda, DynamoDBのサーバレスアーキテクチャの開発環境一式

# 詳細
AWS sam cli,AWS cliを使用して、LamdaのAPI部分をBundle化し、JSONで定義されたDynamoDBも含めて指定されたregionにデプロイします。  
Lamda部分はDynamoDBのget,put,scan,queryをAPIを中継しています。  
Docker,docker-composeを使用して、localでの実行も可能にしています

## dynamoDBの構成定義
dynamodb/json/ 配下にjson形式でテーブル定義ファイルを作成します

## deploy
stack=プロジェクト名に該当します。AWSアカウント単位で一意にします  
region=AWSのregionを指定します  
stage=API gatewayにおけるstageです
```
./sam-cmd/deploy ${stack} ${region} ${stage}
```

## local実行について

#### 必要要件
* Docker
* docker-compose

localに実行環境を立ち上げる事が出来ます   
localhost:8008にホストされます。DynamoDBが別コンテナで実行される関係上、private IPが必要になります  
  
stageを"local"固定にして、最後にprivate ipを指定します。regionは任意の値で構いません
```
./sam-cmd/deploy ${stack} ${region} local ${private ip}
```
