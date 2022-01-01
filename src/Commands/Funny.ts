import { TextChannel, MessageEmbed, Message } from 'discord.js'; 
import got from 'got';
import { Commands } from '../Managers/Command.Manager';
import { Messages } from '../Globals/Messages';
import { Logger, LogType } from '../Utils';
import Config from '../Config';
import { Enums } from '../Globals/Enums';


Commands['meme'] = { 
   Description: Messages.CMD_MEMES,
   Call: (Message: Message, args: string[])=> { 
      const Channel = Message.channel as TextChannel;
      if (/spam/.test(Channel.name) == false) return;
      
      got(Enums.Links.REDDIT).then(Response => { 
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

Commands['coin'] = {
   Description: Messages.CMD_COIN,
   Call: (Message: Message, args: string[])=> { 
      const randomTextsArray = [
            Messages.CMD_RANDOM_COIN_BACK,
            Messages.CMD_RANDOM_COIN_HEAD
        ],
      randomItemFromArray = randomTextsArray[Math.floor(Math.random()*randomTextsArray.length)];

      Message.reply(randomItemFromArray);
   }
};