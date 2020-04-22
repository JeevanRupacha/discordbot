const Discord  = require('discord.js')
const client = new Discord.Client()

client.on('ready', ()=>{
console.log("connected as ")
client.user.setActivity("Code JEEVAN")

client.on('message', (receiveMessage)=>{
    if(receiveMessage.author == client.user){
       return
    }

    if(receiveMessage.content === "Hi jeevan" || receiveMessage.content === "hi jeevan" || receiveMessage.content === "Jeevan" || receiveMessage.content === "Hi Jeevan" || receiveMessage.content ==="jeevan" || receiveMessage.content ==="jivan"){
        receiveMessage.channel.send("👀👀Hi there,You call to Jeevan. I'm assistant of Jeevan. Please leave me message!" + receiveMessage.author.toString())
    }
})




})
client.login(process.env.SECRET_KEY)