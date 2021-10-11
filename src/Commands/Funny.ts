import { Message } from "discord.js";
import { Commands } from "../Managers/Command.Manager";

Commands['zeki'] = { 
   Description: 'zeki',
   Call: (Message: Message, args: string[])=> { 
      console.log('zeki called');
   }
};