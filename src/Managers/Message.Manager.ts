

import { Bot } from '../main';
import { Logger, LogType } from '../Utils';
import * as fs from 'fs';
import * as path from 'path';

let MessagesCounts: { [key: string]: number } = {};

const Forbiden_Words = [
   'jebem ti', 'bottest'
];

Bot.on('messageCreate', Message => {
   if (Forbiden_Words.some(word => Message.toString().toLowerCase().includes(word))) {
      Message.delete().catch((e: string) => Logger(LogType.Error, 'Forbiden Words ' + e));
   };

   if (MessagesCounts[Message.member?.id!]) {
      MessagesCounts[Message.member?.id!] ++;
   } else {
      MessagesCounts[Message.member?.id!] = 1;
   }

});

export function SaveCounter () {
   fs.writeFile(path.join(__dirname, '../data/Message.Counter.json'), JSON.stringify(MessagesCounts), (Error) => {
      if (Error) Logger(LogType.Error, Error);
   });
};


(() => { 
   fs.readFile(path.join(__dirname, '../data/Message.Counter.json'), 'utf8', (Error, Data) => {
      if (Error) Logger(LogType.Error, Error);
      MessagesCounts = JSON.parse(Data.toString());
   });
})();