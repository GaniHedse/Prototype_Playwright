import { request, APIRequestContext } from '@playwright/test';
import { JsonReader } from './JsonReader';

export class TokenManager {

    public static async generateToken(): Promise<string> {

        const tokenData = JsonReader.getTestData("TokenData.json");

        const apiContext: APIRequestContext = await request.newContext();

        const response = await apiContext.post(
            "https://restful-booker.herokuapp.com/auth",
            {
                data: tokenData
            }
        );

        if (response.status() !== 200) {
            throw new Error(
                `Token generation failed. Status Code: ${response.status()}`
            );
        }

        const jsonBody = await response.json();

        return jsonBody.token;
    }
}