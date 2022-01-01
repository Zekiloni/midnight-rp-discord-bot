import { Message, MessageActionRow, MessageButton, MessageEmbed } from 'discord.js';
import Config from '../Config';
import { Enums } from '../Globals/Enums';
import { Messages } from '../Globals/Messages';
import { Bot } from '../main';
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
   Roles: [Enums.Roles.OWNER],
   Description: Messages.CREATING_VERIFY_CHANNEL,
   Call: (Message: Message, args: string[]) => { 
      // if (Message.channel.id != Enums.Channels.VERIFICATION) return;

      console.log(1)

      const Verify_Msg = new MessageEmbed()
         .setColor('#7b19f2')
         .setTitle(Config.Name)
         .addField(Enums.Chars.EMPTY, Enums.Messages.WELCOME_1)
         .addFields(
            { 
               name: Enums.Messages.LINKS, 
               value: Enums.Links.join('\n'), 
               inline: true 
            },
            { 
               name: Enums.Messages.USEFUL, 
               value: Enums.Useful.join('\n'),
               inline: true 
            }
         );

      console.log(2)

         // .addFields(
         //    { name: "**Discord Pravila, Prijavite bag, Kontaktirajte staff**", value: "<#896874363817697281>", inline: false },
         //    { name: "\u200b", value: "\u200b", inline: true },
         //    { name: "\u200b", value: "\u200b", inline: true }
         //    )      
         //    .addFields(
         //    { name: "✦ **Midnight Roleplay**", value: "➛ Za sve ljude koji su voljni doprineti zajednici i njenom napretku ocekuju posebne pozicije i male nagrade. Podsecamo vas da na nasem serveru pored standardnih nivoa napredovanja, postoji i posebna sekcija za nase specijalne clanove <@&899632697935298561>, kao sto su poseban privatan kanal i ranija obavestenja o stvarima koje se spremaju za buduce updatove i vise.", inline: true },
         //    { name: "\u200b", value: "\u200b", inline: true },
         //    { name: "\u200b", value: "\u200b", inline: true }
         //    )
         //    .addFields(
         //    { name: "➛ Da dobijete tu specijalnu poziciju, sve sto treba da uradite jeste da boostujete nas discord server.", value: "\u200b", inline: true },
         //    { name: "\u200b", value: "\u200b", inline: true },
         //    { name: "\u200b", value: "\u200b", inline: true }
         //    )
         //    .addFields(
         //    { name: "**Da pristupite ostatku discorda i nastavite dalje, potrebno je da se verifikujete klikom ✅**", value: "\u200b", inline: true }
         //    )

         console.log(3)


            const Verify_Actions = new MessageActionRow()
            .addComponents(
               new MessageButton()
					.setCustomId('verification')
					.setLabel('Primary')
					.setStyle('SUCCESS'),
            );

            console.log(4)

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