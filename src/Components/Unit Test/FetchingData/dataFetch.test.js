var myFunctions = require('./dataFetch')

test("API is Working properly, Status 200 not 400.", async ()  => {
    expect(await myFunctions.fetchingData()).toBe(200);
});

test("Verify start date that is today", async ()  => {
    let today = new Date().toISOString().slice(0, 10);
    expect(await myFunctions.sizeData()).toBe(today);
});



