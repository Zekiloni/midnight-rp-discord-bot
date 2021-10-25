import { Client, Intents  } from 'discord.js';
import Config from './Config';
import { Messages } from './Globals/Messages';


export const Bot = new Client(
   { 
      intents: [
         Intents.FLAGS.GUILDS,
         Intents.FLAGS.GUILD_MEMBERS, 
         Intents.FLAGS.GUILD_MESSAGES,
         Intents.FLAGS.GUILD_MESSAGE_REACTIONS
      ],
      partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
   }
);

import './Managers/Welcoming.Manager';
import './Managers/Verification.Manager';
import './Managers/Command.Manager';
import './Managers/Message.Manager';

import { Logger, LogType } from './Utils';

Bot.on('ready', () => {
   Bot.user?.setActivity(Config.Website, { type: 'PLAYING' })
   Logger(LogType.Succes, Messages.CMD_BOT_READY)
});


Bot.login(Config.Token);