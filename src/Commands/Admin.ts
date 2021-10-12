import { Message, MessageEmbed  } from 'discord.js';
import Config from '../Config';
import { Messages } from '../Globals/Messages';
import { Commands } from '../Managers/Command.Manager';
import { Guild } from '../Utils';


Commands['mute'] = { 
   Description: Messages.CMD_MUTE,
   Call: (Message: Message, args: string[]) => { 
      const Target = Message.mentions.members?.first();
      const Role = Guild?.roles.cache.find(role => role.name === Config.Muted_Role);
      console.log(Role);

      if (Role) Target?.roles.add(Role);
      console.log(2)
   }
}


Commands['verification'] = { 
   Description: Messages.CREATING_VERIFY_CHANNEL,
   Call: (Message: Message, args: string[]) => { 
      if (Message.channel.id != Config.Verification_Channel) return;

      const Verify_Msg = new MessageEmbed()
         .setColor('#0099ff')
         .setTitle(Message.guild?.name!)
         .setURL('https://mn-rp.com')
         //.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
         //.setDescription('Some description here')
         //.setThumbnail('https://i.imgur.com/AfFp7pu.png')
         // .addFields(
         //    { name: 'Regular field title', value: 'Some value here' },
         //    { name: '\u200B', value: '\u200B' },
         //    { name: 'Inline field title', value: 'Some value here', inline: true },
         //    { name: 'Inline field title', value: 'Some value here', inline: true },
         // )
         .addField('🎗 Pravila Discord servera', '🧠 Ako mislite da ćete dobiti upozorenje za nešto, nemojte to raditi!\n\n \
         🌸 *Budite ljubazni* i prijateljski nastrojeni prema svim članovima ove zajednice.\n\n \
         💬 *Aktivno doprinosite* tipskim raspravama, ali *izbjegavajte rasprave koje su generalno predmet sukoba, koje će Vas dovesti u svađu ili konflikt sa nekim od članova zajednica!*.\n\n \
         🛑 Pokušajte izbjeći *konflkit* koliko je god moguće u vašim porukama. Ako ste nehoticom nekoga uvrijedili, od Vas se očekuje da se osobi javite na privatnu poruku, te da ispravite narušeno. Budite čovjek!\n\n \
         📢 Mi volimo pomoći svima, zato ukoliko imate neke *nedoumice* javite se u za to predviđen te će Vas neko od našeg osoblja ili članova zajednice kontaktirati!', true)
         //.setImage('https://i.imgur.com/AfFp7pu.png')
         //.setTimestamp()
         //.setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');
   
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