const Publisher = require("../src/Publisher");


it('should return 3', async() => {
    let Publisher = new Publisher("amqp://localhost","helloQueue");
    await publisher.connect();
} );



