import { Messages } from '../Globals/Messages';
import { Bot } from '../main';


export let Commands: Commands = {};

type Commands = {
   [key: string]: Command;
}

type Command = {
   Description: string;
   Params?: any[];
   Permissions?: string[];
   Call (args: string[]): void;
};

Bot.on('messageCreate', Message => {
   if (Message.author.bot) return;
   
   const Content = Message.content.split(' ');
   const CommandName = Content[0].replace('/', '');
   if (Message.content.startsWith('/')) { 
      if (Commands[CommandName]) {
         const Command = Commands[CommandName];
      } else { 
         Message.reply(Messages.CMD_NOT_FOUND);
      }
   }
});



