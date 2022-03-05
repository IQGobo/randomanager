require('dotenv').config()

const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILD_MESSAGES"]})

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", msg => {
  const requestRoll = msg.content.match(/^!roll (?<count>\d*)(?<prefix>d|w)(?<sides>\d+)/)
  if (msg.content === "!ping") {
    msg.reply("pong!")
  } else if (requestRoll) {
    const minval = requestRoll.groups.count || 1
    const maxval = (requestRoll.groups.sides || 6) * minval - minval
    msg.reply('rolled a ' + (Math.floor(Math.random() * maxval) + minval))
  }
})

client.login(process.env.TOKEN)
