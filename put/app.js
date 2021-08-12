const AWS = require('aws-sdk');
const opt = {
  apiVersion: '2012-08-10'
}
if(process.env.HOST_IP) opt.endpoint = `http://${process.env.HOST_IP}:8008`
const ddb = new AWS.DynamoDB.DocumentClient(opt);

exports.lambdaHandler = async (event, context) => {
  //console.log("JSON.parse event:" + JSON.parse(event));
  var params = JSON.parse(event.body).params;
  console.log("params:" + JSON.stringify(params));
  var res = await ddb.put(params).promise();

  var response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin":  "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*"
      },
      body: JSON.stringify({ res }),
      isBase64Encoded : true
  }
  return response;
};
