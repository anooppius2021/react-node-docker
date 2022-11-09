/**
 * @copyright Copyright(c) 2018 Al-Futtaim Group.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Al-Futtaim ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Al-Futtaim.
 *
 */

const express = require("express");
const logger = require("../util/logger")(__filename);

const router = express.Router();
var mqtt = require('mqtt')
const testController = require("../controllers/TestController");

/**
 * This is the REST endpoint for testing the app
 */


router.post("/login", testController.login);

router.get("/",testController.test);



var options = {
    host: '54023c6b6a3746c1848def295d7bda8d.s1.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'techanise',
    password: 'Techanise#123'
}

// initialize the MQTT client
var client = mqtt.connect(options);

// setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    // called each time a message is received
    console.log('Received message:', topic, message.toString());
});

// subscribe to topic 'my/test/topic'
//client.subscribe('my/test/topic');

// publish message 'Hello' to topic 'my/test/topic'
//client.publish('my/test/topic', 'Hello');

module.exports = router;
