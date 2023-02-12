// MQTT subscriber

var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1234')

var topic = 'TEST'

client.on('message', (topic, message)=> {
    message = message.toString()
    console.log(message)
})

client.on('connect', ()=>{
    client.subscribe(topic)
})