var amqp = require('amqplib/callback_api');
var connection;

it('should return 1', async () => {
    //await sendMessageFull();
    await expect(consumeMessageFull()).resolves.toBe("Hello World");
});

beforeAll(async (done) => {
    let myPromise = new Promise( (resolve, reject) => {
        amqp.connect('amqp://localhost', function (error0, connection) {
             if (error0) {
                throw error0;
            }
            resolve(connection);
                  
        });
    });
    connection = await myPromise;
    done();
  });
  
  afterAll(async (done) =>  {
    connection.close();
    done();
  });


  async function sendMessage() {
    return myPromise = new Promise( (resolve, reject) => {
            var queue = 'helloSunday';
            var message = 'Hello World';
            let returnValue;
 
            connection.createChannel(async function(error1, channel) {
                if (error1) {
                  throw error1;
                }
            
                channel.assertQueue(queue, {
                  durable: false
                });

                await async function(){
                            channel.sendToQueue(queue, Buffer.from(message)); 
                            returnValue = channel;
                            //process.exit(0);
                };
                //console.log(" [x] Sent %s", msg);   
                //await async function(){  };
                
                resolve(returnValue);
                
            });          
        });
}

async function sendMessageFull() {
    return myPromise = new Promise( (resolve, reject) => {
        amqp.connect('amqp://localhost', function (error0, connection) {
            var queue = 'helloSunday';
            var msg = 'Hello World';
            var response;
 
            if (error0) {
                throw error0;
            }
            connection.createChannel(async function(error1, channel) {
                if (error1) {
                  throw error1;
                }
            
                channel.assertQueue(queue, {
                  durable: false
                });

                response = channel.sendToQueue(queue, Buffer.from(msg)); 
                            //connection.close();
                            //process.exit(0);
                
                //console.log(" [x] Sent %s", msg);   
                //await async function(){  };
                
                resolve(response);
                
            });          
        });
    });
}

async function consumeMessageFull() {
    return myPromise = new Promise( (resolve, reject) => {
        amqp.connect('amqp://localhost', function (error0, connection) {
            var queue = 'helloSunday';
            var response;
 
            if (error0) {
                throw error0;
            }
            connection.createChannel(async function(error1, channel) {
                if (error1) {
                  throw error1;
                }

                await async function(){
                    channel.consume(q, function(msg) {
                        if (msg !== null) {
                          console.log("message content :" + msg.content.toString());
                          channel.ack(msg);
                          response = msg.content;
                        }
                      });
                            connection.close();
                            //process.exit(0);
                };
                console.log(" [x] Received %s", response);   
                //await async function(){  };
                
                resolve(response);
                
            });          
        });
    });
}

