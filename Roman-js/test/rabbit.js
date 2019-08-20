var queueName = 'helloSundays';
var moment = require('moment');

var open = require('amqplib').connect('amqp://localhost');
publish();
consume();


function publish() {
    // Publisher
    open.then(function(connection) {
    return connection.createChannel();
    }).then(function(channel) {
    return channel.assertQueue(queueName).then(function(ok) {
        return channel.sendToQueue(queueName, Buffer.from('something to do '+ moment().format('LTS')));
    });
    }).catch(console.warn);
}

function consume() {
    // Consumer
    open.then(function(conn) {
    return conn.createChannel();
    }).then(function(channel) {
    return channel.assertQueue(queueName).then(function(ok) {
        return channel.consume(queueName, function(message) {
        if (message !== null) {
            console.log(message.content.toString());
            channel.ack(message);
        }
        });
    });
    }).catch(console.warn);
}