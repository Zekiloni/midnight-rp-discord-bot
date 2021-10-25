import { Message, MessageEmbed } from 'discord.js';
import Config from '../Config';
import { Messages } from '../Globals/Messages';
import { Commands } from '../Managers/Command.Manager';


Commands['mute'] = { 
   Description: Messages.CMD_MUTE,
   Call: (Message: Message, args: string[]) => { 
      const Target = Message.mentions.members?.first();
      const Role = Target?.guild?.roles.cache.find(role => role.name === Config.Muted_Role);

      if (Role) Target?.roles.add(Role);
   }
}


Commands['verification'] = { 
   Description: Messages.CREATING_VERIFY_CHANNEL,
   Call: (Message: Message, args: string[]) => { 
      if (Message.channel.id != Config.Verification_Channel) return;

      const Verify_Msg = new MessageEmbed()
         .setColor('#7b19f2')
         .setTitle(Message.guild?.name!)
         .setURL('https://mn-rp.com')
         .setImage("https://i.imgur.com/q1R8Q6w.png")
         .addField("Da biste pristupili discord zajednice, morat ćete se složiti s gore navedenim pravilima.", "Klikom na ✅ slažete se s gore navedenim pravilima i bit ćete odgovorni za svoje ponašanje u ovoj zajednici, kršenje bilo kojeg od navedenih pravila rezultirat će kaznom.")
         .setFooter("Midnight Roleplay | mn-rp.com");
         Message.channel.send({ embeds: [Verify_Msg] });
      }
};

Commands['say'] = {
   Description: Messages.CMD_SAY,
   Call: (Message: Message, args: string[]) => {
        const saytext = args.join(' ');
        Message.channel.send(saytext);
        Message.delete();
   }
};

Commands['information'] = {
   Description: Messages.CMD_INFORMATION,
   Call: (Message: Message, args: string[]) => {
      const Verify_Msg = new MessageEmbed()
      .setColor('#7b19f2')
      .setTitle(Message.guild?.name!)
      .setURL('https://mn-rp.com')
      .setImage("https://i.imgur.com/q1R8Q6w.png")
      .addFields(
       { name: "**__Server IP__**", value: "server.mn-rp.com", inline: true },
       { name: "**__RageMP__**", value: "[Click to download](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe)", inline: true },
       { name: "\u200b", value: "\u200b", inline: true }
      )
      .addFields(
       { name: "**__Website__**", value: "[mn-rp.com](https://mn-rp.com)", inline: true },
       { name: "**__Forum__**", value: "[forum.mn-rp.com](https://forum.mn-rp.com)", inline: true },
       { name: "\u200b", value: "\u200b", inline: true }
      )   
      .setTimestamp()
      .setFooter("Last Update");
      Message.channel.send({ embeds: [Verify_Msg] });
   }
}