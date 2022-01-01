import Config from '../Config';
import { Enums } from '../Globals/Enums';
import { Bot } from '../main';


Bot.on('interactionCreate', async Interaction => {
	if (!Interaction.isButton()) return;

	if (Interaction.customId == 'verification') {
		const Guild = Bot.guilds.cache.get(Config.Guild_ID); 
		const Member = Guild?.members.cache.get(Interaction.member?.user.id!)
      const Role = Guild?.roles.cache.find(role => role.id === Enums.Roles.VERIFIED);

		if (Member?.roles.cache.get(Role?.id!)) {
			Member.roles.remove(Role!)
		} else { 
			Member?.roles.add(Role!);
		}
		
		const Response = Member?.roles.cache.get(Role?.id!) ? Enums.Messages.VERIFIED : Enums.Messages.UNVERIFIED;
		await Interaction.reply({ content: Response });
		await Interaction.deleteReply();
		
	}
});


// Bot.on('messageReactionAdd', async (Reaction, User) => {
//    if (Reaction.message.channelId != Enums.Channels.VERIFICATION) return;
   
// 	if (Reaction.partial) {
// 		try {
// 			await Reaction.fetch();
// 		} catch (error) {
// 			console.error('Something went wrong when fetching the message:', error);
// 			return;
// 		}
// 	}

//    if (Reaction.emoji.name == '✅') {

// 		const Guild = Bot.guilds.cache.get(Config.Guild_ID); 
//       const Member = Guild?.members.cache.find(member => member.user.id === User.id);

//       const Role = Member?.guild?.roles.cache.find(role => role.name === Config.Verification_Role);


//       if (Member?.roles.cache.some(role => role.name === Config.Verification_Role)) return;

//       if (Role) Member?.roles.add(Role);
//    }
// });

// Bot.on('messageReactionRemove', async (Reaction, User) => {
//    if (Reaction.message.channelId != Enums.Channels.VERIFICATION) return;

//    if (Reaction.partial) {
// 		try {
// 			await Reaction.fetch();
// 		} catch (error) {
// 			console.error('Something went wrong when fetching the message:', error);
// 			return;
// 		}
// 	}
//    if (Reaction.emoji.name == '✅') { 
// 		const Guild = Bot.guilds.cache.get(Config.Guild_ID); 
//       const Member = Guild?.members.cache.get(User.id);

//       const Role = Member?.guild?.roles.cache.find(role => role.name === Config.Verification_Role);
//       if (Role) Member?.roles.remove(Role);
//    }
// });


