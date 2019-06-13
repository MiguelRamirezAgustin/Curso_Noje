// 1. Instalar  npm install twilio y registrarse 
// 2. declarar variabel global .env
// 3. Instalar  npm install dotenv

// require('dotenv').config();

// const  account_sid= process.env.ACCOUNT_SID;
// const auth_token=process.env.AUTH_TOKEN;

// const client= require('twilio')(account_sid,auth_token);

// client.messages.create({
//       to:process.env.MY_PHONE_NUMBER,
//       from:'+19284400253',
//       body:'Mensaje de pruebas twilio'

// })
// .then(message=> console.log('Peuebas---> ', message.sid));



// var accountSid = 'AC25358f1ff5ffe007c1ae865e22e641a5'; 
// var authToken = '6c5c149520b7a213b1450aacbc503b19'; 
 
// //require the Twilio module and create a REST client 
// var client = require('twilio')(accountSid, authToken); 
 
// client.messages.create({ 
//     to: "+5579567927", // Any number Twilio can deliver to
//     from: "+19284400253", // A number you bought from Twilio and can use for outbound communication
//     body: "Hey Jenny, thanks for the pull request, will merge it right away." 
// }, function(err, message) { 
//     console.log('mesaje ',message.sid); 
// });

var client = require('twilio')('AC51fbe8f91e6de9585bfddb23d344a0a4','86e71e6db4eba7cd109192c7a73ddd01');

client.messages.create({ 
    to: '+2381491486', // Any number Twilio can deliver to
    from: '+19284400253', // A number you bought from Twilio and can use for outbound communication
    body: "Hey Jenny, thanks for the pull request, will merge it right away." ,
    }, function(err, message) { 
        if(!err){
            console.log('Mensaje enviado')
        }else{
            console.log('mesaje no ',message); 
        }
});