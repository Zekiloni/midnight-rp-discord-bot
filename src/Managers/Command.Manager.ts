import { GuildMember, Message, User } from 'discord.js';
import { Messages } from '../Globals/Messages';
import { Bot } from '../main';
import { hasRole } from '../Utils';
import Config from '../Config';

export let Commands: Commands = {};

type Commands = {
   [key: string]: Command;
}

type Command = {
   Description: string;
   Params?: any[];
   Permissions?: string[];
   Roles?: string[];
   Call (Message: Message, args: string[]): void;
};

Bot.on('messageCreate', (Message: Message) => {
   if (Message.author.bot) return;
   
   if (Message.content.startsWith(Config.Prefix)) { 
      let args = Message.content.split(/ +/);
      let Name:string = args.splice(0, 1)[0];
      Name = Name.replace(Config.Prefix, '');

      // DEBUG
      // console.log('Command name ' + Name);
      // console.log(args);

      if (Commands[Name]) {
         const Command = Commands[Name];
         if (Command.Roles && Message.member != null && hasRole(Message.member, Command.Roles) != false) return;
         if (Message.member) { 
            Command.Call(Message, args);
         }
      } else { 
         Message.reply(Messages.CMD_NOT_FOUND);
      }
   }
});



import '../Commands/Funny';
import '../Commands/Admin';
import '../Commands/Music';