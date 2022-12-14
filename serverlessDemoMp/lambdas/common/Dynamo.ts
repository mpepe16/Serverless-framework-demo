const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

export const Dynamo = {
    async get(ID: any, TableName: any) {
        const params = {
            TableName,
            Key: {
                ID,
            },
        };

        const data = await documentClient.get(params).promise();

        if (!data || !data.Item) {
            throw Error(`There was an error fetching the data for ID of ${ID} from ${TableName}`);
        }
        console.log(data);

        return data.Item;
    },
};
