import { GuildMember } from "discord.js";



export function hasRole (Member: GuildMember, Roles: string[]): boolean { 
   let Result = false;
   for (const Role of Roles) { 
      if (Member.roles.cache.has(Role)) {
         Result = true;
      }
   }
   return Result;
}