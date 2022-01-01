
export namespace Enums {

   export enum Chars { 
      EMPTY = '\u200b'
   }

   export enum Messages { 
      USEFUL = 'Korisno',
      LINKS = 'Linkovi',
      VERIFIED = 'Uspešno ste se verifikovali !',
      UNVERIFIED = 'Makli ste verifikaciju.',
      WELCOME_1 = `
      Dobrodošli na oficijalni Discord server **Midnight Roleplay** zajednice. Mi smo GTA V zajednica koja okuplja ljubitelje roleplay-a.
      Osetite atmosferu neverovatnog sveta RP-a sa skriptom koja vam daje posebnee visoke mogućnosti realizma sa malo RPG elemenata.
      Više o nama možete pronaći (ovde)[https://www.mn-rp.com].
      `
   }

   export const Links = [
      '[Vebsajt / UCP](https://www.mn-rp.com)',
      '[Forum](https://forum.mn-rp.com)',
      '[Status Servisa](https://status.mn-rp.com)'
   ]

   export enum Channels {
      GATEWAY = '897485251989880854',
      VERIFICATION = '897183073861500930',
      RULES = '896905564427284501',
      START_PLAYING = '924115514136100916',
      SNEAKS = '896901829609291826',
      SUGGESTIONS = '896899540274262056'
   }

   export const Useful = [
      '<#' + Channels.RULES + '>',
      '<#' + Channels.START_PLAYING + '>',
      '<#' + Channels.SNEAKS + '>',
      '<#' + Channels.SUGGESTIONS + '>'
   ]


   export enum Roles {
      OWNER = '896872215667167283',
      VERIFIED = '896872714420252713'
      
   }
}
