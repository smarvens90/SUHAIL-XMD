const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Accra/Ghana";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "233247923525";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233247923525";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "online" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,509xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "50944562059,509xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "YSUHAIL_00_58_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA2NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQxLFxuICAgICAgICA5NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDkwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDg1LFxuICAgICAgICA2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDk4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM2LFxuICAgICAgICA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDYwLFxuICAgICAgICAyLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3LFxuICAgICAgICA3OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODksXG4gICAgICAgIDI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgODYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODIsXG4gICAgICAgIDYwLFxuICAgICAgICA1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkT2QzamxqTWpTWUZQaDFqWk9xR29WTThRVDlobkp1THlIYVNBamhBUThRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwbXlEenpjSlJZT0xfOGhwb3p4U2RnXCIsXG4gIFwicGhvbmVJZFwiOiBcImE0MWQ5NmRlLTk2M2UtNGNlZi1hOTNkLWY5NjM1NTY1NWQ2MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MyxcbiAgICAgIDE0LFxuICAgICAgMTgsXG4gICAgICAxNzksXG4gICAgICA1MixcbiAgICAgIDcwLFxuICAgICAgODksXG4gICAgICAxOCxcbiAgICAgIDUyLFxuICAgICAgMyxcbiAgICAgIDkwLFxuICAgICAgMTc4LFxuICAgICAgODgsXG4gICAgICAyNDcsXG4gICAgICA1LFxuICAgICAgNzcsXG4gICAgICAxMzYsXG4gICAgICAxNSxcbiAgICAgIDEzMCxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc2LFxuICAgICAgMzYsXG4gICAgICAxNjIsXG4gICAgICAxMTQsXG4gICAgICA2OCxcbiAgICAgIDc2LFxuICAgICAgMTc2LFxuICAgICAgMTE2LFxuICAgICAgNTMsXG4gICAgICA2NixcbiAgICAgIDE3OSxcbiAgICAgIDIxNyxcbiAgICAgIDUwLFxuICAgICAgMjMyLFxuICAgICAgNzMsXG4gICAgICAyMzUsXG4gICAgICAxODUsXG4gICAgICAxLFxuICAgICAgMzAsXG4gICAgICAxNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMM1B5WWdHRUpiQWs4SUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFXbHBUcnBWMEFnZTZKSk9YRzNObkJrMFpPZ1R3V3cxdXNvRlJJSUlFMEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidUxRVUhnZkxnazg1aXR1aWFIK3NaSU1naDFjSjZ3QXJaMGEyR1VRRldTNmtsYllDYUdaN0ozSVBkYVFaV210OElOMkFYVnpGdWtMbHVnMlJYSUdTQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVUd5Rjk1WFdZVGFQYW9NV21rb2lRUDZYVFJua2I2WkR5bG1uWFprZ1RLS00zalBRL056d0dRN0hQMFdOVnd4NDF3aTZzMUhHZ0VlRUxEK0RtSFVValE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDk0NDU2MjA1OTozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlbjwnZaG8J2Wl/CdlpvwnZaK8J2Wk/Cdlpgg8J2WkfCdloog8J2Wm/CdlorMgfCdlpfwnZaO8J2WmfCdlobwnZaH8J2WkfCdloog8J2WivCdlpPwnZaI8J2WjfCdlobwnZaT8J2WmfCdlorwnZaa8J2Wl1wiLFxuICAgIFwibGlkXCI6IFwiMTg1MzcxNDI2MDI5NTgwOjM5QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNTA5NDQ1NjIwNTk6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDkzNDQyODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOaExcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5oSi5qc29uIjogIntcImtleURhdGFcIjpcIkJCWkl1alVFVFFSeFFqVGNvdk9mcWM1Z3pOK25nSSsyVW9jR3dhZGVna1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYyODU5NjE1NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ4NTYyMzk0MTk4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmhLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMkdNQVdwRHNtV1RBcFE0TGRVZzFOdEhUZGt6dXBMWVIvWW1QSTh2clhjTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjI4NTk2MTU3LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmhMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRVFjQ0craXNtbFpZcTNycjdQQjJ4Y3JmcE83MWdOQzRVTEwyNUdRQkhZcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjI4NTk2MTU3LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTc0OTM0NDI0OTM5OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "MRWILL-available",
  packname: process.env.PACK_NAME || "MRWILL-available",
  botname : process.env.BOT_NAME  || "🥷🧛‍♂️ 🅳🆁🅰🅲🆄🅻🅰 🧛‍♂️ 🥷",
  ownername:process.env.OWNER_NAME|| "🥷🧛‍♂️𝕄𝕒𝕣𝕧𝕖𝕟𝕤🧛‍♂️ 🥷",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
