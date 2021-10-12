import { Client, Intents  } from 'discord.js';
import Config from './Config';

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

Bot.on('ready', () => {
   Bot.user?.setActivity('mn-rp.com', { type: 'PLAYING' })
   console.log('Ready !');
});


Bot.login(Config.Token);