import { TextChannel,VoiceChannel, MessageEmbed, Message } from 'discord.js'; 
import { Bot } from '../main';
import { Commands } from '../Managers/Command.Manager';
import { Messages } from '../Globals/Messages';
import { Logger, LogType } from '../Utils';
import Config from '../Config';
import { Player } from 'discord-music-player'; 

const player = new Player(Bot, {
    leaveOnEmpty: true,
    volume: 200,
});

Commands['play'] = { 
   Description: Messages.CMD_PLAY,
   Call: async (Message: Message, args: string[]) => { 
        if (!args) return;
   		let queue = player.createQueue(Message!.guild!.id);
   		const Channel = Message!.member!.voice.channel as VoiceChannel;
   		const TextChannel = Message.channel as TextChannel;
        await queue.join(Channel);

        let guildQueue = player.getQueue(Message!.guild!.id);
       	let song = await queue.play(args.join(' ')).catch(_ => {
            if (!guildQueue) {
                queue.stop();
            }
        });

        TextChannel.send('Pustam: **' + song?.name + '**, Pustio: <@' + Message!.member! + '>');
        Message.delete();
   }
};

Commands['stop'] = {
    Description: Messages.CMD_PLAY,
    Call: async (Message: Message, args: string[]) => { 
        let guildQueue = player.getQueue(Message!.guild!.id);
        const TextChannel = Message.channel as TextChannel;
        guildQueue!.stop();
        TextChannel.send('Stopirano: **' + guildQueue!.nowPlaying + '**, Od: <@' + Message!.member! + '>');
        Message.delete();
   }
};