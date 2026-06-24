import { test, expect } from '@playwright/test';
import { JsonReader } from '../../utils/JsonReader';
import { TokenManager } from '../../utils/TokenManager';

test("This is for Updating the test", async ({ request }) => {

    // Create Booking
    const postData = JsonReader.getTestData("PostData.json");

    const createResponse = await request.post(
        "https://restful-booker.herokuapp.com/booking",
        {
            data: postData
        }
    );

    expect(createResponse.status()).toBe(200);

    const jsonData = await createResponse.json();
    const id = jsonData.bookingid;

    console.log("Created Booking Id:", id);

    const token = await TokenManager.generateToken();

   
    const putData = JsonReader.getTestData("PutData.json");

    const updateResponse = await request.put(
        `https://restful-booker.herokuapp.com/booking/${id}`,
        {
            data: putData,
            headers: {
                Cookie: `token=${token}`
            }
        }
    );

    expect(updateResponse.status()).toBe(200);

    const updatedBooking = await updateResponse.json();

    console.log(updatedBooking);
});