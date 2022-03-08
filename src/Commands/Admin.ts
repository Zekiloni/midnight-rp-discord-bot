import { Message, MessageActionRow, MessageButton, MessageEmbed } from 'discord.js';
import { Enums } from '../Globals/Enums';
import { Messages } from '../Globals/Messages';
import { Commands } from '../Managers/Command.Manager';



Commands['verification'] = { 
   Roles: [Enums.Roles.OWNER],
   Description: Messages.CREATING_VERIFY_CHANNEL,
   Call: (Message: Message, args: string[]) => { 
      if (Message.channel.id != Enums.Channels.VERIFICATION) return;

      const Verify_Msg = new MessageEmbed()
         .setColor('#7b19f2')
         .setTitle(Enums.Messages.WELCOME_TITLE)
         .addField(Enums.Chars.EMPTY, Enums.Messages.WELCOME_VERIFY)
         .addField(Enums.Chars.EMPTY, Enums.Messages.ABOUT_VERIFY)
         .setFooter(Enums.Messages.CONCTACT_SUPPORT_VERIFY_NO_WORK)


      const Verify_Actions = new MessageActionRow()
         .addComponents(
            new MessageButton()
               .setCustomId('verification')
               .setLabel(Enums.Messages.VERIFY_NOW)
               .setStyle('SUCCESS'),
         );


      Message.channel.send({ embeds: [Verify_Msg],  components: [Verify_Actions] });
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

Commands['rules'] = {
	Description: Messages.CMD_RULES,
	Call: (Message: Message, args: string[]) => {
	const Verify_Msg = new MessageEmbed()
        .setColor('#7b19f2')
        .setTitle('Midnight Roleplay - Discord Pravila')
		.addFields(
		   { name: "**Pravilo br.1**", value: "Budite ljubezni i poštujte druge članove.", inline: true },
		   { name: "**Pravilo br.2**", value: "Uznemiravanje, zlostavljanje, rasizam ili diskriminatorni komentari se ne tolerišu.", inline: true },
		   { name: "**Pravilo br.3**", value: "Koristite ispravan kanal koji je specifičan za vaše potrebe ili sadržaj za chatovanje.", inline: true }
		)
		.addFields(
		   { name: "**Pravilo br.4**", value: "Ne spamajte, niti ne tagujte ljude više puta.", inline: true },
		   { name: "**Pravilo br.5**", value: "Ne prikazujte privatne podatke o članovima zajednice.", inline: true },
		   { name: "**Pravilo br.6**", value: "Ne prikazujte nikakav NSFW sadržaj putem chatovanja ili avatara.", inline: true }
		)
		.addFields(
		   { name: "**Pravilo br.7**", value: "Ne reklamirajte nikakav sadržaj koji nije povezan sa Midnight Roleplay.", inline: true },
		   { name: "**Pravilo br.8**", value: "Nemojte tagovati staff team-a na bilo kom od javnih kanala.", inline: true },
		   { name: "**Kazne**", value: "Svako kršenje ovog skupa pravila če rezultirati ban-om/kick-om.", inline: true }
		)		
        .setFooter("Midnight Roleplay | mn-rp.com/staff");
    Message.channel.send({ embeds: [Verify_Msg] });
   }
}