

import { Bot } from '../main';
import { Logger, LogType } from '../Utils';

const Forbiden_Words = [
   'jebem ti', 'bottest'
]

Bot.on('messageCreate', Message => {
   if (Forbiden_Words.some(word => Message.toString().toLowerCase().includes(word))) {
      Message.delete().catch((e: string) => Logger(LogType.Error, 'Forbiden Words ' + e));
   };
});