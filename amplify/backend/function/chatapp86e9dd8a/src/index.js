
/* Amplify Params - DO NOT EDIT
	API_CHATAPP_ACCOUNTTABLE_ARN
	API_CHATAPP_ACCOUNTTABLE_NAME
	API_CHATAPP_CONVERSATIONTABLE_ARN
	API_CHATAPP_CONVERSATIONTABLE_NAME
	API_CHATAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_CHATAPP_GRAPHQLAPIIDOUTPUT
	API_CHATAPP_GRAPHQLAPIKEYOUTPUT
	API_CHATAPP_MESSAGETABLE_ARN
	API_CHATAPP_MESSAGETABLE_NAME
	API_CHATAPP_USERTABLE_ARN
	API_CHATAPP_USERTABLE_NAME
	AUTH_CHATAPPB25E6A75_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify('Hello from Lambda!'),
    };
};
