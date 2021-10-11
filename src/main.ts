import { Client, Intents  } from "discord.js";
import Config from './Config';

export const Bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

import './Managers/Command.Manager';

Bot.on("ready", () => {
   console.log('Ready !')
});


Bot.login(Config.Token);