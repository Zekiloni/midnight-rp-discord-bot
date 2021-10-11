import { GuildMember, User } from 'discord.js';
import { Messages } from '../Globals/Messages';
import { Bot } from '../main';
import { hasRole } from '../Utils';

export let Commands: Commands = {};

type Commands = {
   [key: string]: Command;
}

type Command = {
   Description: string;
   Params?: any[];
   Permissions?: string[];
   Roles?: string[];
   Call (User: User, Member: GuildMember, args: string[]): void;
};

Bot.on('messageCreate', Message => {
   if (Message.author.bot) return;
   
   if (Message.content.startsWith('/')) { 
      let args = Message.content.split(/ +/);
      let Name:string = args.splice(0, 1)[0];
      Name = Name.replace('/', '');
      console.log('Command name ' + Name);
      console.log(args);
      if (Commands[Name]) {
         const Command = Commands[Name];
         if (Command.Roles && Message.member != null && hasRole(Message.member, Command.Roles) != false) return;
         if (Message.member) { 
            Command.Call(Message.author, Message.member, args);
         }
      } else { 
         Message.reply(Messages.CMD_NOT_FOUND);
      }
   }
});



import '../Commands/Funny';
