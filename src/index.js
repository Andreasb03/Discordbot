/*
    Author: Andreas Bountrogiannis
    Project: Discord bot for UAtopia
    Date: September 2023
*/


// intialisation
const {Client, IntentsBitField} = require('discord.js');
const config = require('../config.json');

const client = new Client({
    intents: [
        // intents 
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

    ],
});


// bot events

client.on('ready', (c) =>{
   console.log('Zelenskyy bot працює!');
});

// listening for incoming messages
client.on('messageCreate',(message)=> {
   //displays the messages being said in the server
    console.log(message.author.username + " says:  '" + message.content+"'");
  
    // check if the author of a message is a bot 
    if(message.author.bot){
        return
    }
   
    // ping pong
    if(message.content === 'пінг'){
        message.reply('понг');
    }
});

// bot login takes token from config;.json 
client.login(config.token);







