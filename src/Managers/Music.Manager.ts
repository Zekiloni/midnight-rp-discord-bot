
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

      queue.play(args.join(' ')).then((Song: Song) => { 
         console.log(Song);
         this.Requests.set(Song, Message.member);
      }).catch(_ => { 
         if (!guildQueue) {
            queue.stop();
            Logger(LogType.Error, _);
         }
      });
   },

   Stop (Message: Message) { 
      let guildQueue = Music.Player.getQueue(Message!.guild!.id);
      if (guildQueue) {
         guildQueue!.stop();
         this.Dispatch?.send('Stopirano: **' + guildQueue!.nowPlaying + '**, Od: <@' + Message!.member! + '>');
      }
   },

   Volume (Message: Message, args: string[]) { 
      let guildQueue = this.Player.getQueue(Message?.guild!.id);
      guildQueue?.setVolume(parseInt(args[0]));
   },

   Skip (Message: Message) { 
      let guildQueue = this.Player.getQueue(Message?.guild!.id);
      guildQueue?.skip();

   }
};

Music.Player
   .on('songAdd', (Queue: Queue, Song: Song) => { 
      const RequestedBy: GuildMember = Music.Requests.get(Song);
      console.log('Request ' + RequestedBy.id)
      if (RequestedBy) Music.Dispatch?.send(Messages.SONG_ADDED + '**' + Song.name + '**, ' + Messages.REQUESTED_BY + ' <@' + RequestedBy.id + '>. ');
   })
   .on('songChanged', (Queue: Queue, NewSong: Song, OldSong: Song) => { 
      const RequestedBy = Music.Requests.get(OldSong);
      if (RequestedBy) Music.Requests.delete(OldSong);
      Music.Dispatch?.send(Messages.SONG_PLAYING + '**' + Song.name + '**, ' + Messages.REQUESTED_BY + ' <@' + RequestedBy.id + '>. ');
   })



