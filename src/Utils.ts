import { GuildMember } from "discord.js";
import Config from "./Config";
import { Bot } from "./main";

export const Guild = Bot.guilds.cache.get(Config.Guild_ID);

export function hasRole (Member: GuildMember, Roles: string[]): boolean { 
   let Result = false;
   for (const Role of Roles) { 
      if (Member.roles.cache.has(Role)) {
         Result = true;
      }
   }
   return Result;
}

