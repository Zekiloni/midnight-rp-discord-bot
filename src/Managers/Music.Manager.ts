
import { Bot } from '../main';
import { Player, Queue, Song } from 'discord-music-player'; 
import { GuildMember, Message, TextBasedChannel, TextBasedChannels, VoiceChannel } from 'discord.js';
import { Messages } from '../Globals/Messages';
import { Logger, LogType } from '../Utils';


export const Music = {
   Player: new Player(Bot, {
      leaveOnEmpty: true,
      volume: 200,
   }),

   Requests: new Map(),
   Dispatch: <TextBasedChannels | null> null,

   async Play (Message: Message, args: string[]) {
      let queue = this.Player.createQueue(Message!.guild!.id);
      const Channel = Message?.member?.voice.channel as VoiceChannel;
      this.Dispatch = Message.channel;
      await queue.join(Channel);

      let guildQueue = this.Player.getQueue(Message!.guild!.id);
      const Song = await queue.play(args.join(' ')).catch(_ => {
         if (!guildQueue) {
            queue.stop();
            Logger(LogType.Error, _);
         }
      });    

      this.Requests.set(Song, Message.member);
   }
};

Music.Player
   .on('songAdd', (Queue: Queue, Song: Song) => { 
      const RequestedBy: GuildMember = Music.Requests.get(Song);
      Music.Dispatch?.send(Messages.PLAYER_PLAYING + '**' + Song.name + '**, ' + Messages.REQUESTED_BY + ' <@' + RequestedBy.id + '>. ');
   })
   .on('songChanged', (Queue: Queue, NewSong: Song, OldSong: Song) => { 
      const Request = Music.Requests.get(OldSong);
      if (Request) Music.Requests.delete(OldSong);
   })



