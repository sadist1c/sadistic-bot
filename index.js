const Discord = require("discord.js")
require("dotenv").config()


const TOKEN = "OTkyOTM2NDYxNDI0OTIyNjc0.GNpDno._EmVMxzU6UDUlJV5ggfSwso981wC03QwtyXipE"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN) 