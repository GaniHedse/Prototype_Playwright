import { test, Expect } from "@playwright/test";
import { JsonReader } from "../../utils/JsonReader";

import { CsvReader } from "../../utils/CsvReader";

test('Validate Data From Json ', async () => {
    const testData = JsonReader.getTestData("LoginData.json");
    console.log(`Login Data is ${testData.validUser.username} and ${testData.validUser.password}`);
});

test('Validate Data From CSV ', async () => {

    const testdata = CsvReader.getData("UserData.csv");
    const data = testdata[0];
    console.log(`Login Data is ${data.username} and ${data.password}`);


}
);