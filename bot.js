const Discord = require('discord.js');
const client = new Discord.Client();
const secret = require('dotenv').config();
const prefix = ".";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', msg => {
    if(msg.author.bot) return; // so bot wont trigger itself
    if(msg.content.indexOf(prefix) !== 0) return; // prefix


    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    console.log(args, command)

    if (command == "twitch") {

        color = [100,65,165]
        image = "https://cdn.discordapp.com/attachments/666145579398725655/829140698300284988/mochi_love.png"
        link = "https://www.twitch.tv/tyronepiays"

        embed = new Discord.MessageEmbed()
            .setDescription(`[Twitch channel](${link})`)
            .setColor(color)
            .setImage(image)
        if (args[0] == "big") {
            embed = new Discord.MessageEmbed()
            .setTitle("Twitch channel")
            .setDescription(`[Twitch channel](${link})`)
            .setColor(color)
            .setImage(image)
        }
        msg.channel.send(embed);
    }
})

client.login(process.env.key);