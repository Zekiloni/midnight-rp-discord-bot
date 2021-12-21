import { Message } from 'discord.js'; 
import { Commands } from '../Managers/Command.Manager';
import { Messages } from '../Globals/Messages';

import { Music } from '../Managers/Music.Manager';


Commands['play'] = { 
   Description: Messages.CMD_PLAY,
   Call: async (Message: Message, args: string[]) => { 
      if (!args) return;
      Music.Play(Message, args);
      Message.delete();
   }
};

Commands['stop'] = {
    Description: Messages.CMD_PLAY,
    Call: async (Message: Message, args: string[]) => { 
      Music.Stop(Message);
      Message.delete();
   }
};

Commands['skip'] = {
   Description: Messages.CMD_PLAY,
   Call: async (Message: Message, args: string[]) => { 
     Music.Skip(Message);
     Message.delete();
   }
};

Commands['replay'] = {
   Description: Messages.CMD_PLAY,
   Call: async (Message: Message, args: string[]) => { 
      const Loop = Music.SetLoop(Message);
      Message.channel.send('🔊 ' +Messages.REPLAY + ': **' + (Loop ? Messages.ENABLED : Messages.DISABLED) + '**.');
      Message.delete();
   }
};

Commands['pause'] = {
   Description: Messages.CMD_PLAY,
   Call: async (Message: Message, args: string[]) => { 
      const Paused = Music.Pause(Message);
      Message.channel.send('🔊 ' +Messages.PAUSE + ': **' + (Paused ? Messages.ENABLED : Messages.DISABLED) + '**.');
      Message.delete();
   }
};

Commands['volume'] = {
   Description: Messages.CMD_PLAY,
   Call: async (Message: Message, args: string[]) => { 
      Music.Volume(Message, parseInt(args[0]));
      Message.channel.send('🔊 ' + Messages.VOLUME + ': **' + args[0] + '%**');
      Message.delete();
   }
};

Commands['seek'] = {
    Description: Messages.CMD_PLAY,
    Call: async (Message: Message, args: string[]) => {
        Music.SetSeek(Message, parseInt(args[0]));  
        Message.channel.send('🔊 ' + Messages.SEEK + '** ' + args[0] + '** ' + Messages.SECONDS);
        Message.delete();
   }
};