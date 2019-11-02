const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "*";
client.on("message", message => {

            if (message.content.startsWith(prefix + "send")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
client.on('message', message => {
  if(!message.channel.guild) return;
             if(message.content.startsWith(prefix + 'allbots')) {

 
 if (message.author.bot) return;
 let i = 1;
     const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
       const embed = new Discord.RichEmbed()
       .setAuthor(message.author.tag, message.author.avatarURL)
       .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});
client.on('ready', () => {
    console.log(`----------------`);
       console.log(`Desert Bot- Script By : le-titiz `);
         console.log(`----------------`);
       console.log(`ON ${client.guilds.size} Servers '     Script By : </> ' `);
     console.log(`----------------`);
   console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame(`system bot`,"http://twitch.tv/krunker")
 client.user.setStatus("dnd")
 });
 
 
 client.login(process.env.BOT_TOKEN);
