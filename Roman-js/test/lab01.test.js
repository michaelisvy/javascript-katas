var rabbit = require("rabbit.js");

it('should return 1', async () => {
    console.log("first test");
});

it('should return 1', async () => {
    console.log("second test");
});

beforeAll(() => {
    console.log("before all");
  });
  
  afterAll(() => {
    console.log("after all");
  });




