import { TextChannel } from 'discord.js';
import { ChannelTypes } from 'discord.js/typings/enums';
import Config from '../Config';
import { Messages } from '../Globals/Messages';
import { Bot } from '../main';
import { Guild } from '../Utils';


Bot.on('guildMemberAdd', Member => {
   const Channel = Guild?.channels.cache.get(Config.Gateway_Channel) as TextChannel;
   const Message = '<@' + Member.id + '> ' + Messages.WELCOME;
   
   if (Channel && Channel?.type == 'GUILD_TEXT') Channel.send(Message);
   // const Channel:TextChannel = member.guild.channels.cache.get('.....');
   // Channel?.send("Welcome"); 
});