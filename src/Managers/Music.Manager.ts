
import { Bot } from '../main';
import { Player, Queue, Song } from 'discord-music-player'; 
import { Message, TextBasedChannel, TextBasedChannels, VoiceChannel } from 'discord.js';
import { Messages } from '../Globals/Messages';


export const Music = {
   Player: new Player(Bot, {
      leaveOnEmpty: true,
      volume: 200,
   }),

   Dispatch: <TextBasedChannels | null> null,

   async Play (Message: Message, args: string[]) {
      let queue = this.Player.createQueue(Message!.guild!.id);
      const Channel = Message?.member?.voice.channel as VoiceChannel;
      this.Dispatch = Message.channel;
      await queue.join(Channel);

      let guildQueue = this.Player.getQueue(Message!.guild!.id);
      const Song = await queue.play(args.join(' ')).catch(_ => {
         if (!guildQueue) 
            queue.stop();
      });      

      Message.delete();
   }
};

Music.Player
   .on('songAdd', (Queue: Queue, Song: Song) => { 
      Music.Dispatch?.send(Messages.PLAYER_PLAYING + '**' + Song.name + '**.');
   })



