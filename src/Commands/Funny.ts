import { Commands } from "../Managers/Command.Manager";

Commands['zeki'] = { 
   Description: 'zeki',
   Call: (User, Member, args) => { 
      console.log('zeki called');
   }
};