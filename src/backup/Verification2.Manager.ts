import { GuildChannel, GuildMember, MessageActionRow, MessageButton, MessageEmbed, TextChannel } from 'discord.js';
import { ChannelTypes } from 'discord.js/typings/enums';
import { Enums } from '../Globals/Enums';
import { Bot } from '../main';


interface Verification { 
   Status: VerificationStatus,
   Channel: GuildChannel
}

enum VerificationStatus  {
   NONE, HALF, FINISHED
};

let VerificationQueue = new Map()

export async function startVerification (Member: GuildMember) {
   const Channel = await Member.guild.channels.create(Enums.ChannelNames.VERIFICATION, {
      type: ChannelTypes.GUILD_TEXT, 
      permissionOverwrites: [
         {
            id: Member.guild.roles.everyone,
            allow: [],
            deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
         },
         {
            id: Member.id, 
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'], 
            deny: ['MANAGE_MESSAGES']
         }
      ]
   }) as TextChannel;

   VerificationQueue.set(Member.id, { Channel: Channel, Status: VerificationStatus.NONE });

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
            .setStyle('SUCCESS')
      );


   Channel.send({ embeds: [Verify_Msg],  components: [Verify_Actions] });

};

Bot.on('guildMemberRemove', Member => {
   if (VerificationQueue.get(Member.id)) { 
      const mVerification: Verification = VerificationQueue.get(Member.id);
      mVerification.Channel.delete();
      VerificationQueue.delete(Member.id);
   }
});