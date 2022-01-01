import { GuildMember } from "discord.js";


export function DateTime () {
   let now = new Date(), time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(), date = [now.getUTCFullYear(), now.getUTCMonth() + 1, now.getUTCDate()].join('-');
   return date + ' ' + time;
}

export enum LogType {
   Error, Succes, Info
}

export function Logger (Status: LogType, Message: string) {
   const Colors = ['\x1b[31m', '\x1b[32m', '\x1b[33m', '\x1b[0m'];

   console.log(Colors[Status] + DateTime() + Colors[3] + ' | ' + Message)
}

export function hasRole (Member: GuildMember, Roles: string[]): boolean { 
   console.log('hasrole ')
   let Result = false;
   for (const Role of Roles) { 
      console.log('for role  ' + Role)
      if (Member.roles.cache.find( ({ id }) => id === Role )) {
         Result = true;
      }
   }
   console.log('hasrole result', Result)
   return Result;
}

