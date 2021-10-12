import { TextChannel } from 'discord.js';
import Config from '../Config';
import { Messages } from '../Globals/Messages';
import { Bot } from '../main';


Bot.on('guildMemberAdd', Member => {
   const Channel = Member.guild.channels.cache.get(Config.Gateway_Channel) as TextChannel;
   const Message = '<@' + Member.id + '> ' + Messages.WELCOME;

   if (Channel && Channel?.type == 'GUILD_TEXT') Channel.send(Message); 
});