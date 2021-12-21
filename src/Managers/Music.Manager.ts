
import { Bot } from '../main';
import { Player, Queue, Song } from 'discord-music-player'; 
import { GuildMember, Message, MessageEmbed, TextBasedChannels, VoiceChannel } from 'discord.js';
import { Messages } from '../Globals/Messages';
import { Logger, LogType } from '../Utils';
import Config from '../Config';


export const Music = {
   Player: new Player(Bot, {
      leaveOnEmpty: true,
      volume: 200,
   }),

   Paused: false,
   Replay: 0,
   Requests: new Map(),
   Dispatch: <TextBasedChannels | null> null,

   async Play (Message: Message, args: string[]) {
      let queue = this.Player.createQueue(Message!.guild!.id);
      const Channel = Message?.member?.voice.channel as VoiceChannel;
      this.Dispatch = Message.channel;
      await queue.join(Channel);

      let guildQueue = this.Player.getQueue(Message!.guild!.id);

      queue.play(args.join(' ')).then((Song: Song) => { 
         this.Requests.set(Song, Message.member);
         const Index = guildQueue?.songs.indexOf(Song);
         Logger(LogType.Info, 'Index ' + Index + ', songs ' + guildQueue?.songs.length);
         this.Dispatch?.send(Messages.SONG_ADDED + '**' + Song.name + '**, ' + Messages.REQUESTED_BY + ' <@' + Message.member?.id + '>. ');
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

   Pause (Message: Message) {
      let guildQueue = Music.Player.getQueue(Message!.guild!.id);
      if (guildQueue) {
         this.Paused = !this.Paused;
         guildQueue.setPaused(this.Paused);
         return this.Paused;
      }
   },

   Volume (Message: Message, X: number) { 
      let guildQueue = this.Player.getQueue(Message?.guild!.id);
      guildQueue?.setVolume(X);
   },

   Skip (Message: Message) { 
      let guildQueue = this.Player.getQueue(Message?.guild!.id);
      guildQueue?.skip();
   },

   SetLoop (Message: Message) {
      let guildQueue = this.Player.getQueue(Message?.guild!.id);
      this.Replay == 0 ? (
         this.Replay = 1, guildQueue?.setRepeatMode(1)
      ) : (
         this.Replay = 0, guildQueue?.setRepeatMode(0)
      );

      return this.Replay;
   },

   List (Message: Message) { 
      const guildQueue = this.Player.getQueue(Message?.guild!.id);
      let Result = '';
      for (let Song of guildQueue?.songs!) {
         let i = guildQueue?.songs.indexOf(Song);
         Result += '**' + (i! + 1) + '.** ' + Song.name + '\n';
      }
      return Result;
   }
};

Music.Player
   .on('songChanged', (Queue: Queue, NewSong: Song, OldSong: Song) => { 
      const RequestedBy: GuildMember = Music.Requests.get(NewSong);
      if (RequestedBy) Music.Requests.delete(NewSong);

      if (NewSong && RequestedBy) {
         const Info = new MessageEmbed()
            .setAuthor(Messages.NOW_PLAYING)
            .setTitle(NewSong.name)
            .setURL(NewSong.url)
            .setColor('RANDOM')
            .addField(Messages.REQUESTED_BY, '<@' + RequestedBy.id + '>', true)
            .setThumbnail(NewSong.thumbnail)
            .setFooter(Config.Website);

         Music.Dispatch?.send({ embeds: [Info] });
      }
   })



