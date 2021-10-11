import { Message } from "discord.js";
import Config from "../Config";
import { Messages } from "../Globals/Messages";
import { Commands } from "../Managers/Command.Manager";
import { Guild } from "../Utils";


Commands['mute'] = { 
   Description: 'Ućutkivanje člana servera.',
   Call: (Message: Message, args: string[]) => { 
      const Target = Message.mentions.members?.first();
      const Role = Guild?.roles.cache.find(role => role.name === Config.Muted_Role);
      console.log(Role);

      if (Role) Target?.roles.add(Role);
      console.log(2)
   }
}

Commands['verification'] = { 
   Description: Messages.CREATING_VERIFY_CHANNEL,
   Call: (Message: Message, args: string[]) => { 
      if (Message.channel.id != Config.Verification_Channel) return;

   }
};