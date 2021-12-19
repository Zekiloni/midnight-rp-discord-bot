import { TextChannel, VoiceChannel, MessageEmbed, Message } from 'discord.js'; 
import { Commands } from '../Managers/Command.Manager';
import { Messages } from '../Globals/Messages';
import { Logger, LogType } from '../Utils';
import Config from '../Config';
import { Music } from '../Managers/Music.Manager';


Commands['play'] = { 
   Description: Messages.CMD_PLAY,
   Call: async (Message: Message, args: string[]) => { 
        if (!args) return;

        Music.Play(Message, args);

   		
   }
};

Commands['stop'] = {
    Description: Messages.CMD_PLAY,
    Call: async (Message: Message, args: string[]) => { 
        let guildQueue = Music.Player.getQueue(Message!.guild!.id);
        const TextChannel = Message.channel as TextChannel;
        guildQueue!.stop();
        TextChannel.send('Stopirano: **' + guildQueue!.nowPlaying + '**, Od: <@' + Message!.member! + '>');
        Message.delete();
   }
};