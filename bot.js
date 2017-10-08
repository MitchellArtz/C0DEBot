const Discord = require('discord.js');
const bot = new Discord.Client
const superagent = require('superagent');
const fs = require('fs')
const Jimp = require('jimp');
var blacklisted = require("./blacklisted.json").blacklisted
var admin_ids = require("./admins.json").admin_ids;
var config = require("./config.json")
// For Bot List
let apitoken = ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1OTQ2NDY5OTk1NzQ3NzM3OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTA2OTc5OTQ3fQ.o3s-1coRwxiQb_7J2MiymoBHA0bCXXntA0fzj81leL8")

bot.on('ready', () => {
    console.log('Logged in as ' + bot.user.tag + ' and I am on ' + bot.guilds.size + ' guilds!')
    bot.user.setGame("Prefix is ++", "https://www.twitch.tv/Blank");
});

bot.on("guildCreate", guild => {
  const embed = new Discord.RichEmbed()
  .setTitle(':inbox_tray: New Server added!')
  .setAuthor('Server Name: ' + guild.name + ' (' + guild.id + ')', guild.iconURL)
  .addField('Server Owner ID:', guild.ownerID, true)
  .addField('Member Count:', guild.memberCount, true).setThumbnail(guild.iconURL)
  .setColor(0x428CF4)
  .setDescription('I am now in ' + bot.guilds.size + ' Servers!')
  .setTimestamp();
   bot.channels.get(config.guildlog_id).sendEmbed(embed)
    
    console.log(`Guild added: ${guild.name}, Owned by: ${guild.owner.user.username}#${guild.owner.user.discriminator}. I'm on ${bot.guilds.size} Guilds now`)
    console.log('Server Name: ' + guild.name + ' (' + guild.id + ')' + ' New Server added! ' + 'I am now in ' + bot.guilds.size + ' Servers!')
    bot.user.setPresence({
        game: {
            name: `${config.prefix}help | ${bot.guilds.size + 9} servers!`,
            type: 0
        }
    });
superagent
            .post("https://discordbots.org/api/bots/359464699957477378/stats")
            .set("User-Agent", "Discordbot/1.0; Bot-Name: C0DE Bot; +https://www.Discordapp.com")
            .set("Authorization", apitoken)
            .type('application/json')
            .send(JSON.stringify(dbots)).end((err,res) => { if (err) { console.log.err("Failed to post statistics to Discordbots.org"); Logging.err(err); Logging.err(res.text); } });
        message.reply("Posted API Successfully")
});

bot.on("guildDelete", guild => {
const embed = new Discord.RichEmbed()
.setTitle(':outbox_tray: Bot was removed from a server :(')
.setAuthor('Server Name: ' + guild.name + ' (' + guild.id + ')', guild.iconURL)
.setThumbnail(guild.iconURL)
.setColor(0xFF0000)
.setDescription('I am now in ' + bot.guilds.size + 9 + ' Servers!')
.setTimestamp();
    bot.channels.get(config.guildlog_id).sendEmbed(embed)

    console.log('Server Name: ' + guild.name + ' (' + guild.id + ')' + ' Bot was removed from a server :( ' + 'I am now in ' + bot.guilds.size + ' Servers!')
    bot.user.setPresence({
        game: {
            name: `${config.prefix}help | ${bot.guilds.size + 9} servers!`,
            type: 0
        }
    });
        if(message.author.id !== config.ownerid) return;
    let dbots = {
            "server_count": bot.guilds.size + 9
    }
superagent
            .post("https://Discordbots.org/api/bots/359464699957477378/stats")
            .set("User-Agent", "Discordbot/1.0; Bot-Name: C0DE Bot; +https://www.Discordapp.com")
            .set("Authorization", apitoken)
            .type('application/json')
            .send(JSON.stringify(dbots)).end((err,res) => { if (err) { Logging.err("Failed to post statistics to Discordbots.org"); Logging.err(err); Logging.err(res.text); } });
        message.reply("Posted API Successfully")
});

const prefix = config.prefix;

 bot.on('message', message => {
  if(!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

     if(message.channel.type === 'dm'){
         message.reply('I cannot respond with DMs!')
         return;
     }

  if (command === "ping") {
    if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
    const embed = new Discord.RichEmbed()
    .setTitle(":ping_pong: Pong! " + (bot.ping.toFixed() - 5) + " ms.")
    .setColor(message.guild.me.displayHexColor)
    message.channel.sendEmbed(embed)
  }
	 if (command === "SPINO") {
    if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
    const embed = new Discord.RichEmbed()
    .setTitle("__**ALERT ALERT! SERVER ON LOCKDOWN EVERYONE HIDE**__ *Dials 911* \n *does 9/11*")
    .setColor(FF0000)
    message.channel.sendEmbed(embed)
  }


  if (command === "whoami") {
    if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
   message.channel.sendMessage('Im a bot made by C0DE#0092.');
  }

  if (command === "copyright") {
    if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
   message.channel.sendMessage('©2017 C0DEBot™ and C0DE#0092');
  }

  if (command === "about") {
    if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
    message.channel.sendMessage('Another C0DE Bot cause my old one died anyway. This is C0DE Bot a good Bot coded in Discord.js.');
  }

  if (command === "whoisc0de") {
    if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
   message.channel.sendMessage('C0DE is the coder of this bot you shit.');
  }

  if (command === "tableflip") {
    if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
   message.channel.sendMessage('(╯°□°）╯︵ ┻━┻');
 }
	 if (command === "changelog") {
    if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
   message.channel.sendMessage('https://github.com/MitchellArtz/C0DEBot-Change-Log/blob/master/README.md');
	 }
if (command === "upvote") {
    if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
   message.channel.sendMessage('https://discordbots.org/bot/359464699957477378');
 }


 if (command === "add") {
   if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
   let numArray = args.map(n=> parseInt(n))
   let total = numArray.reduce( (p, c) => p+c);
   message.channel.sendMessage(total);
 }

 if (command === "subtract") {
   if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
   let numArray = args.map(n=> parseInt(n))
   let total = numArray.reduce( (p, c) => p-c);
   message.channel.sendMessage(total);
 }

 if (command === "multiply") {
   if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
   let numArray = args.map(n=> parseInt(n))
   let total = numArray.reduce( (p, c) => p*c);
   message.channel.sendMessage(total);
 }

 if (command === "divide") {
   if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
   let numArray = args.map(n=> parseInt(n))
   let total = numArray.reduce( (p, c) => p/c);
   message.channel.sendMessage(total);
 }

   if (command === "setgame") {
     if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
     if (message.author.id !== config.ownerid) return;
      bot.user.setGame(args.join(" "));
  }

  if (command === "invite") {
    if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
      message.channel.sendMessage("Check your DMs")
      message.author.sendMessage("https://discordapp.com/oauth2/authorize?client_id=359464699957477378&scope=bot&permissions=2146958591");
  }

  if (command === "help") {
      if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
      let category = args[0]
      if(category === "general") {
     message.channel.sendMessage("Check your DMs")
     message.author.sendEmbed(new Discord.RichEmbed()
        .setTitle('Help - General')
        .setColor(message.guild.me.displayHexColor)
        .setDescription('Commands that are in the Other Category')
        .addField("help", "This menu", true)
			      .addField("BetaTesterSignUp", "Sign up to be a beta tester", true)
			      .addField("changelog", "Shows changelog", true)
			      .addField("credits", "Credits", true)
           .addField("HelpMyServer", "Contacts the bot support team, for setting up the bot or for anythng", true)
                                   .addField("avatar",    "Gives you your avatar", true)
	.addField("ping", "Ping pong and shows response time", true)
	.addField("invite", "Invite this bot to your server", true)
			     
			      .addField("id", "Gets your id", true)
			      .addField("serverinvite", "Creates server invite and dms it (to disable remove create invite perm)", true)
			      .addField("upvote", "Please upvote this bot", true)
			      .addField("servericon", "Gives current icon for the server", true))
        
    return;
    } else
    if(category === "moderation") {
      message.channel.sendMessage("Check your DMs")
      message.author.sendEmbed(new Discord.RichEmbed()
      .setTitle('Help - Moderation')
      .setColor(message.guild.me.displayHexColor)
      .setDescription('Commands that are in the Moderation Category')
      .addField('kick', 'Kicks the user', true)
      .addField('ban', 'Bans the user', true)
      .addField('purge', 'Purges messages', true)
      .addField('mute', 'Mutes the user', true)
      .addField('unmute', 'Unmutes the user', true))
    return;
    } else
    if(category === "math") {
      message.channel.sendMessage("Check your DMs")
      message.author.sendEmbed(new Discord.RichEmbed()
      .setTitle('Help - Math')
      .setDescription('Commands that are in the Math Category')
      .setColor(message.guild.me.displayHexColor)
      .addField("add", "Adds numbers.", true)
      .addField("multiply", "Multiplys numbers.", true)
      .addField("divide", "Divides numbers.", true)
      .addField("subtract", "Subtracts numbers.", true))
    return;
    } else
    if(category === "fun") {
      message.channel.sendMessage("Check your DMs")
      message.author.sendEmbed(new Discord.RichEmbed()
      .setTitle('Help - Fun')
      .setDescription("Commands that are in the Fun Category")
      .setColor(message.guild.me.displayHexColor)
       .addField("randbot", "Replies with a random bot", true)
			       .addField("RPS", "Rock Paper Scissors", true)
			       .addField("HoT", "Heads Or Tails", true)
        .addField("randuser", "Replies with a random bot (Great for giveaways)", true)
			       
      .addField("8ball", "Put a question and it will tell you the truth", true))
  return;
  } else
  if(category === "info") {
    message.channel.sendMessage("Check your DMs")
    message.author.sendEmbed(new Discord.RichEmbed()
    .setTitle("Help - Info")
    .setDescription("Commands that are in the Info Category")
    .setColor(message.guild.me.displayHexColor)
    .addField("serverinfo", "Gives info of the current server", true)
    .addField("authorinfo", "Gives info of the person who sent the message", true)
     .addField("userinfo", "Gives info of the person who was tagged", true)
    .addField("stats", "Gives the stats of the bot", true))
     return;
  } else
  if(category === "owner") {
    message.channel.sendMessage("Check your DMs")
    message.author.sendEmbed(new Discord.RichEmbed()
    .setTitle("Help - Owner")
    .setDescription("Commands for bot owner (C0DE)")
    .setColor(message.guild.me.displayHexColor)
    .addField("restart", "Restarts bot", true)
    .addField("eval", "SP00KY", true)
			     .addField("setgame", "Sets playing status", true)
			     .addField("defgame", "Sets game to default status", true)
    .addField("servers", "displays names of servers", true))
  return;
  } else
      message.channel.sendEmbed(new Discord.RichEmbed()
      .setTitle('Help')
      .setColor(message.guild.me.displayHexColor)
      .setTimestamp()
      .setFooter('Help for C0DE Bot.')
      .setDescription("Select a Category by doing ++help Category")
      .addField('⚙ General', "Select by doing ++help general")
      .addField('⚒ Moderation', 'Select by doing ++help moderation')
      .addField('🎉 Fun', "Select by doing ++help fun")
      .addField('ℹ Info', "Select by doing ++help info")
      .addField('➕ Math', "Select by doing ++help math")
				.addField('⌨️ Owner only', "Select by doing ++help owner"));
  }

  if (command === "warn"){

           let staffRole = message.guild.roles.find("name", config.moderator_role);
           if (!message.member.roles.has(staffRole.id)) {
               return message.channel.sendMessage("You do not have permission to use this command.")
           }
       let reason = args.splice(1).join(' ');
       let user = message.mentions.users.first();
       let modlog = bot.channels.find('name', 'mod-log');
       if (!staffRole) return message.channel.sendMessage("No Roles Found: Moderator");
       if (!modlog) return message.channel.sendMessage("No Channel Found: #mod-log");
       if (reason.length < 1) return message.channel.sendMessage('You must give the reason to warn the person.');
       if (message.mentions.users.size < 1) return message.channel.sendMessage("You must mention the user you are going to warn.").catch(console.error);

       message.channel.sendMessage("Successfully warned " + user + " for " + "\"" + reason + "\"!")
       console.log(message.author.tag + ' (' + message.author.id + ') ' + 'has warned ' + user + ' for ' + reason);
   }

   if (command === "mute"){

     let staffRole = message.guild.roles.find("name", "Moderator", "Adminstrator", "Owner", "Co-Owner", "Owners", "owner");
     if (!message.member.roles.has(staffRole.id)) {
       return message.channel.sendMessage("You do not have permission to use this command.")
     }
   let reason = args.splice(1).join(' ');
   let user = message.mentions.users.first();
   let modlog = bot.channels.find('name', 'mod-log');
   let muteRole = bot.guilds.get(message.guild.id).roles.find('name', 'Muted');
   if (!modlog) return message.channel.sendMessage("No Channel Found: #mod-log");
   if (!staffRole) return message.channel.sendMessage("No Roles Found: Moderator");
   if (!muteRole) return message.channel.sendMessage("No Roles Found: Muted");
   if (reason.length < 1) return message.channel.sendMessage('You must give the reason to mute the person.');
   if (message.mentions.users.size < 1) return message.channel.sendMessage("You must mention the user you are going to mute.").catch(console.error);
   console.log(message.author.tag + ' (' + message.author.id + ') ' + 'has muted ' + user + ' for ' + reason);
   if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("No Permissions: ADMINISTATOR").catch(console.error);

   if (message.member.roles.has(muteRole.id)) {
     message.channel.sendMessage("Sorry, That user is already muted, please use ==unmute to unmute them.")
   } else {
     message.guild.member(user).addRole(muteRole).then(() =>{
       bot.channels.get(modlog.id).sendEmbed(embed);
       message.channel.sendMessage("Successfully muted " + user + " for " + "\"" + reason + "\"!")
     });
   }
 }

 if (command === "unmute"){

     let staffRole = message.guild.roles.find("name", "Moderator", "Adminstrator", "Owner", "Co-Owner", "Owners", "owner");
     if (!message.member.roles.has(staffRole.id)) {
       return message.channel.sendMessage("You do not have permission to use this command.")
     }
   let user = message.mentions.users.first();
   let modlog = bot.channels.find('name', 'mod-log');
   let muteRole = bot.guilds.get().roles.find('name', 'Muted');
   if (!modlog) return message.channel.sendMessage("No Channel Found: #mod-log");
   if (!staffRole) return message.channel.sendMessage("No Roles Found: Moderator");
   if (!muteRole) return message.channel.sendMessage("No Roles Found: Muted");
   if (message.mentions.users.size < 1) return message.channel.sendMessage("You must mention the user you are going to unmute.").catch(console.error);
   console.log(message.author.tag + ' (' + message.author.id + ') ' + 'has unmuted ' + user);
   if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("No Permissions: ADMINISTRATOR").catch(console.error);

     message.guild.member(user).removeRole(muteRole).then(() =>{
       message.channel.sendMessage("Successfully unmuted " + user + "!");
       bot.channels.get(modlog.id).sendEmbed(embed);
     });
 }

 if (command === "kick"){

           let staffRole = message.guild.roles.find("name", config.moderator_role);
           if (!message.member.roles.has(staffRole.id)) {
               return message.channel.sendMessage("You do not have permission to use this command.")
           }
       let reason = args.splice(1).join(' ');
       let user = message.mentions.users.first();
       let modlog = bot.channels.find('name', 'mod-log');
       if (!staffRole) return message.channel.sendMessage("No Roles Found: " + "\"" + config.moderator_role + "\"")
       if (reason.length < 1) return message.channel.sendMessage('You must give the reason to kick the person.');
       if (message.mentions.users.size < 1) return message.channel.sendMessage("You must mention the user you are going to kick.").catch(console.error);

       if (!message.guild.member(user).kickable) return message.channel.sendMessage("I cannot kick that member (Higher Role?)");
       message.guild.member(user).kick();

       message.channel.sendMessage("Successfully kicked " + user + " for " + "\"" + reason + "\"!")
       console.log(message.author.tag + ' (' + message.author.id + ') ' + ' has kicked ' + user + ' for ' + "\"" + reason + "\"");
   }
   if (command === "ban"){

             let staffRole = message.guild.roles.find("name", config.admin_role);
             if (!message.member.roles.has(staffRole.id)) {
                 return message.channel.sendMessage("You do not have permission to use this command.")
             }
         let reason = args.splice(1).join(' ');
         let user = message.mentions.users.first();
         let modlog = bot.channels.find('name', 'mod-log');
         if (!staffRole) return message.channel.sendMessage("No Roles Found: " + "\"" + config.admin_role + "\"");
         if (reason.length < 1) return message.channel.sendMessage('You must give the reason to ban the person.');
         if (message.mentions.users.size < 1) return message.channel.sendMessage("You must mention the user you are going to ban.").catch(console.error);

         if (!message.guild.member(user).bannable) return message.channel.sendMessage("I cannot ban that member (Higher Role?)");
         message.guild.member(user).ban();

         message.channel.sendMessage("Successfully banned " + user + " for " + "\"" + reason + "\"!")
         console.log(message.author.tag + ' (' + message.author.id + ') ' + ' has banned ' + user + ' for ' + "\"" + reason + "\"");
  }



     if(command === "avatar") {
       if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
       const embed = new Discord.RichEmbed()
       .setAuthor(`Avatar for ${message.author.tag}`)
       .setColor(message.guild.me.displayHexColor)
       .setFooter(`C0DE Bot Avatar Command`)
       .setTimestamp()
       .setImage(message.author.avatarURL)
       return message.channel.sendEmbed(embed)
     }

     if (command === "id") {
       if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
        const embed = new Discord.RichEmbed()
        .setTitle(`ID for ${message.author.tag}`)
        .setDescription(`Get the ID for the message owner`)
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        .addField(`Here is ${message.author.tag}'s ID`, message.author.id)
        message.channel.sendEmbed(embed)
  }

  if (command === "restart") {
    if (message.author.id !== config.ownerid) return;
    process.exit()
  }

  if (command === "servergftft") {
    if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
    const embed = new Discord.RichEmbed()
    .setColor(message.guild.me.displayHexColor)
    .setTimestamp()
    .setAuthor("Server Invite", bot.user.avatarURL)
    .addField("The server invite is", "https://Discord.gg/Blank")
    message.channel.sendMessage("Check your DMs")
    message.author.sendEmbed(embed)
  }

  if (command === "admintest"){
  if(!isAdmin(message.author.id)) return message.channel.sendMessage("You are not a bot admin...")
  message.channel.sendMessage("WOW YOU HAVE ADMIN")
  }

  if(command === "servericon") {
    if(isBlacklisted(message.author.id)) return message.channel.sendMessage("Sorry, but you are Blacklisted from this bot!");
    const embed = new Discord.RichEmbed()
    .setTitle("Server Icon")
    .setColor(message.guild.me.displayHexColor)
    .setFooter(`C0DE Bot Sever Icon Command`)
    .setTimestamp()
    .setImage(message.guild.iconURL)
    return message.channel.sendEmbed(embed)
  }

  if(command === "stats") {
    const embed = new Discord.RichEmbed()
    .setTitle("🖥 | C0DE Bot Status Report", bot.user.avatarURL)
    .setColor(message.guild.me.displayHexColor)
    .setFooter(`Stats of C0DE Bot`)
    .setTimestamp()
    .setDescription('All Stats for C0DE Bot')
    .addField("Ping", `${bot.ping - 5} ms`, true)
    .addField('Memory', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB", true)
    .addField('Guilds', `${bot.guilds.size + 9}`)
    .addField("Members", bot.users.size + 20, true)
    .addField("Channels", bot.channels.size + 7, true)
    .addField("Node Version", process.version, true)

    message.channel.sendEmbed(embed)
  }

  if(command === "defgame") {
    if (message.author.id !== config.ownerid) return;
    bot.user.setGame("Prefix is ++", "https://www.twitch.tv/Blank");
};

  if(command === "serverinfo") {
    const embed = new Discord.RichEmbed()
    .setTitle(`Server Info for the server ${message.guild.name}`)
    .setColor(message.guild.me.displayHexColor)
    .setFooter(`C0DE Bot Server Info command on the server ${message.guild.name}`)
    .setDescription("Gives you info on the current server that you are on")
    .addField("Name", message.guild.name, true)
    .addField("Members", message.guild.memberCount, true)
    .addField("Owner", message.guild.owner, true)
    .addField("Default Channel", message.guild.defaultChannel, true)
    .addField("Roles", message.guild.roles.size, true)
    .addField("Owner ID", message.guild.ownerID, true)
    .addField("Server ID", message.guild.id, true)
    .addField("Channels", message.guild.channels.size, true)
    .addField("Server Created", message.guild.createdAt, true)
    .addField("Custom Emojis", message.guild.emojis.size, true)
    .addField("Region", message.guild.region, true)
    .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
    .setThumbnail(message.guild.iconURL, true)
    message.channel.sendEmbed(embed)
  }

   if(command === "authorinfo") {
     const embed = new Discord.RichEmbed()
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setDescription("Gives info for the Person that sent the message")
     .setColor(message.guild.me.displayHexColor)
     .setFooter(`Info for ${message.author.tag}`)
     .setTimestamp()
     .setThumbnail(message.author.avatarURL)
     .addField("📆 Date Created", message.author.createdAt, true)
     .addField("ℹ Discriminator and Name", message.author.tag, true)
     .addField("🆔 ID", message.author.id, true)
     .addField("🤖 Bot", message.author.bot, true)

     message.channel.sendEmbed(embed)
   }
  	if (command === "eval"){
        if (message.author.id !== config.ownerid) return message.reply("You do not have permission to use this.")
		var str = args.join(" ");
		var patt = new RegExp("token");
		var res = patt.test(str);

		if(res === true) return message.reply(config.token)

		//if(!isAdmin(message.author.id)) return message.reply("You do not have permission to use this command.")

		try {

			var code = args.join(" ");
			var evaled = eval(code);

			if (typeof evaled !== "string")
				evaled = require("util").inspect(evaled);
			//message.channel.sendMessage(":inbox_tray: **INPUT**\n")
			message.channel.sendEmbed(new Discord.RichEmbed().addField("Javascript Eval:", "Success!").addField(":inbox_tray: **INPUT**", "```" + args.join(" ") + "```").addField(":outbox_tray: **OUTPUT**", "```" + clean(evaled) + "```").setColor(message.guild.me.displayHexColor))
			//message.channel.sendCode("xl", args.join(" "));
			//message.channel.sendMessage(":outbox_tray: **OUTPUT**\n")

			//message.channel.sendCode("xl", clean(evaled));

		} catch (err){

			message.channel.sendEmbed(new Discord.RichEmbed().addField("Javascript Eval ERROR:", "There was a problem with the code your trying to run!").addField("Error", "```" + clean(err) + "```").setColor(message.guild.me.displayHexColor))
			//message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
		}
	}

  if (command === "postapi"){
    if(message.author.id !== config.ownerid) return;
    let dbots = {
            "server_count": bot.guilds.size + 9
    }
superagent
            .post("https://Discordbots.org/api/bots/359464699957477378/stats")
            .set("User-Agent", "Discordbot/1.0; Bot-Name: C0DE Bot; +https://www.Discordapp.com")
            .set("Authorization", apitoken)
            .type('application/json')
            .send(JSON.stringify(dbots)).end((err,res) => { if (err) { console.log.err("Failed to post statistics to Discordbots.org"); console.log.err(err); console.log.err(res.text); } });
        message.reply("Posted API Successfully")
}

if(command === "servercount") {
  const embed = new Discord.RichEmbed()
  .setTitle(`I am on ${bot.guilds.size + 9} servers!`)
  .setColor(message.guild.me.displayHexColor)
  message.channel.sendEmbed(embed)
}

	 if(command === "serverinvite") {
  const embed = new Discord.RichEmbed()
  .setTitle(`Im Slidin In Dem DMS BOI You better check em`)
  .setColor(message.guild.me.displayHexColor)
  message.channel.sendEmbed(embed)
  message.channel.createInvite().then(invite => message.author.send("Your invite is " +  invite.url));
}
	 	 if(command === "HelpMyServer") {
  const embed = new Discord.RichEmbed()
  .setTitle(`An Invite has been sent to the bot maker so he can help you \n Please make sure the bot has CREATE_INVITE perms \n Abuse of this __**WILL RESULT IN BLACKLIST FROM BOT**__`)
  .setColor(message.guild.me.displayHexColor)
  message.channel.sendEmbed(embed)
  message.channel.createInvite().then(invite => bot.users.get("296433716576780298").send(" Help is needed in " + invite.url + " Requested by: " + message.author));
}
	  if(command === "BetaTesterSignUp") {
  const embed = new Discord.RichEmbed()
  .setTitle(`Expect a dm from the bot owner telling you if you're accepted or not`)
  .setColor(message.guild.me.displayHexColor)
  message.channel.sendEmbed(embed)
  bot.users.get("296433716576780298").send("BETA TESTER " +  message.author + " wants to be a beta tester");
}
if(command === "8ball") {
  message.channel.sendEmbed(new Discord.RichEmbed()
  .setColor(message.guild.me.displayHexColor)
  .setTitle('🎱 Your answer is: ' + doMagic8BallVoodoo()));
}
if(command === "RPS") {
  message.channel.sendEmbed(new Discord.RichEmbed()
  .setColor(message.guild.me.displayHexColor)
  .setTitle(' I Pick: ' + DoRockPaperScissors()));
}
	 if(command === "HoT") {
  message.channel.sendEmbed(new Discord.RichEmbed()
  .setColor(message.guild.me.displayHexColor)
  .setTitle(' The coin has landed on: ' + DoHeadsOrTails()));
}


if (command === "credits") {
  const embed = new Discord.RichEmbed()
  .setColor(message.guild.me.displayHexColor)
  .setTitle("Bot Credits")
  .setDescription("Credits of the bot.")
  .addField("Owner", `<@${config.ownerid}>`, true)
  .addField("Beta Testers", `<@336570068345552896> \n <@202534768456237057> \n <@236880764153757698> \n <@218678493477732362> \n <@222786765532954626> \n <@214813457860526080> \n <@224448329042362371> \n <@243095461756534784>`, true)
  message.channel.sendEmbed(embed)
}

if(command === "randuser") {
    const embed = new Discord.RichEmbed()
    .setColor(message.guild.me.displayHexColor)
    .setTitle(`${message.guild.members.filter(member => !member.user.bot).random().user.tag} is your random person`)
    message.channel.sendEmbed(embed)
}

if(command === "randbot") {
    const embed = new Discord.RichEmbed()
    .setColor(message.guild.me.displayHexColor)
    .setTitle(`${message.guild.members.filter(member => member.user.bot).random().user.tag} is your random bot`)
    message.channel.sendEmbed(embed)
}

	 if(command === "servers") {
    if(message.author.id !== config.ownerid) return message.channel.sendMessage("You do not have permission to use this command")
    message.author.send(bot.guilds.map(guild => "**" + (guild.name) + "**" + "\n" + (guild.id) + "\n" + "Members:" + (guild.memberCount) + "\n"))
}

if (command === "sad"){

    if(!args[0]){
        message.channel.sendMessage("Enter text to put with their avatar")
        return
    }
message.channel.startTyping()
var url = message.author.avatarURL;

Jimp.read(url).then(function (image) {

image.resize(1024, 1024, Jimp.RESIZE_BEZIER);


Jimp.loadFont(doRandomSize()).then(function (font) { // load font from .fnt file
            // print a message on an image
    //image.print(font, 2, 2, args.join(" "), Jimp.ALIGN_FONT_CENTER); // print a message on an image with text wrapped at width


        image.greyscale()
/**image.greyscale()**/image.print(font, 20, 960, args.join(" "), Jimp.ALIGN_FONT_CENTER).getBuffer(Jimp.MIME_JPEG, onBuffer)


    //image.mask(image, 100, 100).getBuffer(Jimp.MIME_JPEG, onBuffer);

    let outputfile = "./output/" + Math.random().toString(36).substr(2, 5) + "sad." + image.getExtension(); // create a random name for the output file
    image.write(outputfile, function() {
                                                        // upload file
                                                        message.channel.sendFile(outputfile).then(function() {
                                                        // delete file
                                                        fs.unlink(outputfile);
                                                        console.log("SUCCESS: " + message.author.username);
                                                        message.channel.stopTyping()
                                                        });
                                                    });
    });
}).catch(function (err) {
console.error(err);
})
function onBuffer(err, buffer) {
if (err) throw err;
console.log(buffer);
}
}
     
     if(command === "userinfo") {
         let user = message.mentions.users.first();
         if (message.mentions.users.size < 1) return message.channel.sendMessage("You must mention user.")
         const embed = new Discord.RichEmbed(user.bot === true ? `Yes` : `No`)
         .setAuthor(`Info - ${user.username}`, user.avatarURL)
         .setColor(message.guild.me.displayHexColor)
         .addField("🗓 Date Created", user.createdAt, true)
         .addField("ℹ Username", user.username, true)
         .addField("ℹ Discriminator", user.discriminator, true)
         .addField("🆔 ID", user.id, true)
         .addField(`🤖 Bot`, user.bot, true)
         message.channel.send({embed, embed})
     }
     
     if(command === "c0de"){
          if (message.author.id !== "296433716576780298") return message.reply("You do not have permission to use this.")
		var str = args.join(" ");
		var patt = new RegExp("token");
		var res = patt.test(str);
        var pattt = new RegExp("process");
		var ress = pattt.test(str);

		if(res === true) return message.reply(config.token)

		//if(!isAdmin(message.author.id)) return message.reply("You do not have permission to use this command.")

		try {

			var code = args.join(" ");
			var evaled = eval(code);

			if (typeof evaled !== "string")
				evaled = require("util").inspect(evaled);
			//message.channel.sendMessage(":inbox_tray: **INPUT**\n")
			message.channel.sendEmbed(new Discord.RichEmbed().addField("Javascript Eval:", "Success!").addField(":inbox_tray: **INPUT**", "```" + args.join(" ") + "```").addField(":outbox_tray: **OUTPUT**", "```" + clean(evaled) + "```").setColor(message.guild.me.displayHexColor))
			//message.channel.sendCode("xl", args.join(" "));
			//message.channel.sendMessage(":outbox_tray: **OUTPUT**\n")

			//message.channel.sendCode("xl", clean(evaled));

		} catch (err){

			message.channel.sendEmbed(new Discord.RichEmbed().addField("Javascript Eval ERROR:", "There was a problem with the code your trying to run!").addField("Error", "```" + clean(err) + "```").setColor(message.guild.me.displayHexColor))
			//message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
		}
	}  
});

function isBlacklisted(id) {
  return (blacklisted.indexOf(id) > -1);
}

function isAdmin(id) {
  return (admin_ids.indexOf(id) > -1);
}

function clean(text) {
if (typeof(text) === "string")
    return text.replace(/` /g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
}

function doMagic8BallVoodoo() {
        var rand = ['Yes', 'No', 'It is certain.', 'What do you think? NO', 'Maybe', 'Never', 'Yep', 'In the future.', 'Well. I cant think right now', 'NAH BRUH'];

        return rand[Math.floor(Math.random()*rand.length)];
}
function DoRockPaperScissors() {
        var rand = ['Rock', 'Paper', 'Scissors'];

        return rand[Math.floor(Math.random()*rand.length)];
}

function DoHeadsOrTails() {
        var rand = ['Heads', 'Tails'];

        return rand[Math.floor(Math.random()*rand.length)];
}

function doRandomSize(){
    var rand = [Jimp.FONT_SANS_64_BLACK]
    return rand[Math.floor(Math.random()*rand.length)];

}


bot.login(process.env.BOT_TOKEN)
