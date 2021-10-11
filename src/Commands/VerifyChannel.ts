import { Message } from 'discord.js';
import { Commands } from "../Managers/Command.Manager";
import { Messages } from '../Globals/Messages';
import { Bot } from '../main';

Commands['createvchannel'] = { 
   Description: 'createvchannel',
   Call: (User, Member, args) => { 
      console.log('Test test test');
   }
};