import { APIGatewayProxyEvent } from "aws-lambda";
import { lambdaHandler } from "./getHelloWorld";

describe('Unit test for app handler', function () {
    it('verifies successful response', async () => {
        const event: APIGatewayProxyEvent = {
            httpMethod: 'get'
        } as any
        const result = await lambdaHandler(event)

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(
            JSON.stringify({
                message: 'Not sure when was the last to be so happy so see the sentence: hello world',
            }),
        );
    
    });
});