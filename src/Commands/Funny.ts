import { TextChannel, MessageEmbed } from 'discord.js'; 
import got from 'got';
import { Message } from 'discord.js';
import { Commands } from '../Managers/Command.Manager';
import { Logger, LogType } from '../Utils';
import Config from '../Config';


Commands['meme'] = { 
   Description: 'Jedan sveži meme.',
   Call: (Message: Message, args: string[])=> { 
      const Channel = Message.channel as TextChannel;
      if (/spam/.test(Channel.name) == false) return;
      
      got(Config.Meme_Link).then(Response => { 
         const Post = JSON.parse(Response.body)[0].data.children[0].data;
         const { title, permalink, ups, num_comments, url } = Post;

         const Meme = new MessageEmbed()
            .setTitle(title)
            .setURL('https://reddit.com' + permalink)
            .setColor('RANDOM')
            .setImage(url)
            .setFooter('👍 ' + ups + ', 💬 ' + num_comments);

         Channel.send({ embeds: [Meme] });

      }).catch((e: string) => { 
         Logger(LogType.Error, 'Meme ' + e);
      });
   
   }
};