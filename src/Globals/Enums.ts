
export namespace Enums {
   
   export enum Community { 
      NAME = 'Midnight Roleplay'
   }

   export enum Chars { 
      EMPTY = '\u200b'
   }

   export enum Messages { 
      USEFUL = 'Korisno',
      LINKS = 'Linkovi',
      VERIFIED = 'Uspešno ste se verifikovali !',
      UNVERIFIED = 'Makli ste verifikaciju.',
      VERIFIED_MEMBERS = 'Verifikovanih članova: ',
      VERIFY_NOW = 'Verifikuj se',
      WELCOME_TITLE = 'Poruka dobrodošlice.',
      WELCOME_VERIFY = 'Dobrodošli na oficijalni Discord server **Midnight Roleplay** zajednice. \n Mi smo GTA V zajednica koja okuplja ljubitelje roleplay-a. \n Osetite atmosferu neverovatnog sveta RP-a sa skriptom \n koja vam daje posebne mogućnosti realizma sa malo RPG elemenata. \n Više o nama možete pronaći [ovde](https://www.mn-rp.com).',
      ABOUT_VERIFY = 'Da biste pristupili ostalom sadržaju servera morate se verifikovati.\n Pre svega morate proćitati pravila Discord servera koja možete pronaći \nu <#896905564427284501> kao i pravila same zajednice. \nSamom verifikacijom se slažete sa tim pravilima i uslovima korišćenja. \nVerifikovati se možete na zeleno dugme iposd ovog teksta *(Verifikuj Se)*.',
      CONCTACT_SUPPORT_VERIFY_NO_WORK = 'Ukoliko imate problema pri verifikaciji, kontaktirajte nekog od naših administratora.'
      
   }

   // export const Links = [
   //    '[Vebsajt / UCP](https://www.mn-rp.com)',
   //    '[Forum](https://forum.mn-rp.com)',
   //    '[Status Servisa](https://status.mn-rp.com)'
   // ]

   export enum Channels {
      GATEWAY = '897485251989880854',
      VERIFICATION = '897183073861500930',
      RULES = '896905564427284501',
      START_PLAYING = '924115514136100916',
      SNEAKS = '896901829609291826',
      SUGGESTIONS = '896899540274262056',
      MEMBERCOUNTER = '927165170227216415'
   }

   export const Useful = [
      '<#' + Channels.RULES + '>',
      '<#' + Channels.START_PLAYING + '>',
      '<#' + Channels.SNEAKS + '>',
      '<#' + Channels.SUGGESTIONS + '>'
   ]

   export enum Links {
      REDDIT = 'https://www.reddit.com/r/memes/random/.json'
   }

   export enum Roles {
      OWNER = '896872215667167283',
      VERIFIED = '896872714420252713'
      
   }
}
