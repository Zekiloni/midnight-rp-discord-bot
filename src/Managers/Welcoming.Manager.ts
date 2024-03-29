import { TextChannel, GuildMember } from 'discord.js';
import { Messages } from '../Globals/Messages';
import { Bot } from '../main';
import { Enums } from '../Globals/Enums'

Bot.on('guildMemberAdd', Member => {
   const Channel = Member.guild.channels.cache.get(Enums.Channels.GATEWAY) as TextChannel;
   const CounterChannel = Member.guild.channels.cache.get(Enums.Channels.MEMBERCOUNTER) as TextChannel;
   const Message = '<@' + Member.id + '> ' + Messages.WELCOME;
   
   if (Channel && Channel?.type == 'GUILD_TEXT') Channel.send(Message); 
   CounterChannel.setName('👥︰members︰'+Member?.guild?.memberCount);
});
