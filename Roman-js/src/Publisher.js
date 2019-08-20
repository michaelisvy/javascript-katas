const amqp = require('amqplib/callback_api');

module.exports = class Publisher {
    constructor(hostServer, queueName) {
        if (!hostServer) throw new Error('Hostserver not found!');
        if (!queueName) throw new Error('Queuename not found!');
        this.hostServer = hostServer;
        this.queueName = queueName;
        this.channel = null;
        this.connection = null;
    }

    connect() {
        const self = this;
        // eslint-disable-next-line no-console
        // console.log(self.connection);
        new Promise((resolve, reject) => {
            amqp.connect(self.hostServer, function (err, conn) {
                if (err) reject(err);
                else {
                    self.connection = conn;
                    conn.createChannel(function (err, ch) {
                        if (err) reject(err);
                        else {
                            ch.assertQueue(self.queueName, {durable: false});
                            self.channel = ch;
                            resolve();
                        }
                    });
                }
            });
        });
    }

    publish(message) {
        this.channel.sendToQueue(this.queueName, Buffer.from(message));
    }

    closeConnection() {
        this.connection.close();
    }
}
