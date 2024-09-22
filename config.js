const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349153543347";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_18_31_09_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDkwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM0LFxuICAgICAgICAzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDk2LFxuICAgICAgICA3MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwLFxuICAgICAgICA3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAzNixcbiAgICAgICAgMjU0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDkyLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDkzLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDk3LFxuICAgICAgICA0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExLFxuICAgICAgICA1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MixcbiAgICAgICAgMzIsXG4gICAgICAgIDU5LFxuICAgICAgICA0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMixcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MixcbiAgICAgICAgNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDU2LFxuICAgICAgICAzLFxuICAgICAgICAyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjExLFxuICAgICAgICA5OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib2VUNEp6TmxMT0JwaFl6YXNlRVRKU3JmbWRnak1mQ0ZYYmF1Rllya1pYYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSlVtVnhwNi1RWXl0NzByMFpjU3lSZ1wiLFxuICBcInBob25lSWRcIjogXCIxMGViMjgzYi0zM2U4LTQ1ZjMtYmUwMi01YmQwYmRjMWM3YWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICAyMDEsXG4gICAgICAxMzAsXG4gICAgICAzMixcbiAgICAgIDIyMCxcbiAgICAgIDUsXG4gICAgICA4MCxcbiAgICAgIDgxLFxuICAgICAgNzYsXG4gICAgICAzNSxcbiAgICAgIDI0NyxcbiAgICAgIDc3LFxuICAgICAgNjMsXG4gICAgICAxMTUsXG4gICAgICAxMDEsXG4gICAgICAxMixcbiAgICAgIDY2LFxuICAgICAgOTYsXG4gICAgICA2NSxcbiAgICAgIDIzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNSxcbiAgICAgIDgwLFxuICAgICAgMjExLFxuICAgICAgMTc3LFxuICAgICAgNzcsXG4gICAgICAxMjQsXG4gICAgICA3NixcbiAgICAgIDIxMSxcbiAgICAgIDk2LFxuICAgICAgMjAsXG4gICAgICAxMTQsXG4gICAgICAxNDgsXG4gICAgICA0MyxcbiAgICAgIDE2MSxcbiAgICAgIDI1NCxcbiAgICAgIDEwMixcbiAgICAgIDEyNixcbiAgICAgIDE3MCxcbiAgICAgIDExNCxcbiAgICAgIDEwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4MjZMWE00TFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1MzU0MzM0Nzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTM2MzUzNDIzMTE2MzA6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJM2Y4UGtCRUlURndiY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJjcWJFVVhqd2Z2SXNab2JsbUIvdWYxd25xQ2VaT3NyYisxQ2lnMXBPU3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ25teDBoSDM5Z0tPTVNRSEZkZno2RDlzbmZZakE2U0RIbEthdDhUdm5MNzFzbnNPNmdpdEpiU256TGovK2luUW1OZ05JNDJLMml0U0hNVlFCU0tEQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUThwNHNiZnk2NGxkeDV6d0V0ZlU0b0VhcXQ3dWcwUHNuYk1BeUZPUXphUnJyTmhxVWJnUTU4WUpuVkhTSEVUajR2OXpKM2R0OFQzQnpLSFNpZDRuaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1MzU0MzM0Nzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjcwMjk4OTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBSjZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFKNi5qc29uIjogIntcImtleURhdGFcIjpcImxac1hNQ1BJQkJZNkFwN0xqZk55ZGkrMDNBRlhYNUluODA4bGhQM0syeTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTI0MDM4MDI1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
