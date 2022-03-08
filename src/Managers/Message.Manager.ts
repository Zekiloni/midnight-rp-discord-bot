

import AntiSpam from 'discord-anti-spam';
import { Bot } from '../main';
import { Logger, LogType } from '../Utils';


const forbiddenWords = [
   'jebem ti boga', 'mrtvu majku',
];


// @ts-ignore
const antiSpam = new AntiSpam({
   warnThreshold: 3,
   kickThreshold: 6, 
   banThreshold: 12,
   maxInterval: 2000, 
   warnMessage: '{@user}, molim te prestani sa spamom.',
   kickMessage: '**{user_tag}** je kikovan zbog spamovanja.', 
   banMessage: '**{user_tag}** je banovan  zbog spamovanja.',
   muteMessage: "**{user_tag}** je mutiran zbog spamovanja.", 
   maxDuplicatesWarning: 7, 
   maxDuplicatesKick: 10, 
   maxDuplicatesBan: 12, 
   exemptPermissions: [ 
      'ADMINISTRATOR'
   ], 
   ignoreBots: true,
   verbose: true, 
   ignoredUsers: [
   ],
});


Bot.on('messageCreate', message => {
   if (forbiddenWords.some(word => message.toString().toLowerCase().includes(word))) {
      message.delete().catch((e: string) => Logger(LogType.Error, 'Forbiden Words ' + e));
   };

   antiSpam.message(message);
});
