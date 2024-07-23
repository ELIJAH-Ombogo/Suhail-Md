const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_37_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODgsXG4gICAgICAgIDU1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMixcbiAgICAgICAgMTc4LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MixcbiAgICAgICAgMTk1LFxuICAgICAgICAzMixcbiAgICAgICAgMTczLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDg1LFxuICAgICAgICAzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNSxcbiAgICAgICAgNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDk5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMixcbiAgICAgICAgOTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgMTU5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInREb3N2dFRHWGhhNEpDcnMwQ0lXT3dnbkxWcVNTK0FMSytMTHFiUzJFcWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzIwMjU0Nzk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2QzUwODczQkUwNDRFQkJEMEM2REJBRDIxQTNBNUMwM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE3MzQ2MjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY0hLclk3RkRRMi16Yy1BR3RjbVZTUVwiLFxuICBcInBob25lSWRcIjogXCI2MzZlZjdlNi0zMTE2LTQ1NDAtOGRhZC0zNGIyNjZlNTEyZGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY3LFxuICAgICAgMjEwLFxuICAgICAgOSxcbiAgICAgIDE2NixcbiAgICAgIDM3LFxuICAgICAgMjAsXG4gICAgICA0OCxcbiAgICAgIDg4LFxuICAgICAgMjQzLFxuICAgICAgMTU3LFxuICAgICAgMTc2LFxuICAgICAgMTU2LFxuICAgICAgMTc2LFxuICAgICAgMTQ3LFxuICAgICAgNjUsXG4gICAgICA4NSxcbiAgICAgIDgwLFxuICAgICAgMTc4LFxuICAgICAgMTY3LFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDU4LFxuICAgICAgNTIsXG4gICAgICAyNyxcbiAgICAgIDE1MyxcbiAgICAgIDEzOSxcbiAgICAgIDE2LFxuICAgICAgMTE5LFxuICAgICAgNTEsXG4gICAgICAyMDksXG4gICAgICAxMDUsXG4gICAgICA4NCxcbiAgICAgIDc4LFxuICAgICAgMTgyLFxuICAgICAgMjA0LFxuICAgICAgMjQxLFxuICAgICAgMjM5LFxuICAgICAgOTAsXG4gICAgICAxNzMsXG4gICAgICAyMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTlFYRlo5UFZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcyMDI1NDc5Nzo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkxMDQ0ODU5NzQwMjk1OjU2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xYajRya0VFTmlyL3JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK1RXMUY4NWxJZ0ZCZHpCbXNwUFFBclNJZ0tlZk9veURjMlNPQmtLTHlTYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzanRIN2NQR1gwMHBsbzdabnl1Ujk0NnZRUnpKeE5yczE0UnRBdlVnRitqNTRRMG5LMmpkSUVPSDdSdFFkcW1iUTFaRFBIV3Fiei9mZjBMaUxwck5Cdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYMllHU00xMkpvOGduZ3ZTMFNra0d4bUxPRjFXN3ErTFlRRVpXOG9nTll0QUdSam14UDZxclVFTDl3dERpQXU3WDZmNjYrVFhKZGllOHVYMENrNTFEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MjAyNTQ3OTc6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzM0NjIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTmpTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOalMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHQSt5bW42NWQybllLSFpRbHJEK2RibmJQN1Y1TldIV1Q4TmJSeTVkNzZNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExOTQ4OTc4NDIsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "elijah",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
