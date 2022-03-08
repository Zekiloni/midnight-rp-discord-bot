import { Client, Intents } from 'discord.js';
import Config from './Config';
import { Messages } from './Globals/Messages';
import process from 'process';


export const Bot = new Client(
   { 
      intents: [
         Intents.FLAGS.GUILDS,
         Intents.FLAGS.GUILD_MEMBERS, 
         Intents.FLAGS.GUILD_MESSAGES,
         Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
         Intents.FLAGS.GUILD_VOICE_STATES
      ],
      partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
   }
);

import './Managers/Welcoming.Manager';
import './Managers/Command.Manager';
import './Managers/Message.Manager';

import { Logger, LogType } from './Utils';

Bot.on('ready', () => {
   Bot.user?.setActivity(Config.Website, { type: 'PLAYING' })
   Logger(LogType.Succes, Messages.CMD_BOT_READY)
});

const Exit = async () => {
   
};


process.on('SIGHUP', Exit);
process.on('SIGQUIT', Exit);
process.on('SIGTERM', Exit);
process.on('SIGINT', Exit);


Bot.login(Config.Token);