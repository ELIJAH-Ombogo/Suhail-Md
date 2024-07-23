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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_31_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDcwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDcwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgxLFxuICAgICAgICAxODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDcwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDM1LFxuICAgICAgICA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM3LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNSxcbiAgICAgICAgNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDg5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgODMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI5LFxuICAgICAgICA5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjExLFxuICAgICAgICA2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNixcbiAgICAgICAgNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDk4LFxuICAgICAgICA3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkcrQ29Cem9HVXpIWEpzZFVYS29iMklucDkrN3FYNmU3QUVuVk12VWplUFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFNdnptQnRkUnNHb1NqZ0J0MHRGM1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTdmNzk5YzgtMjZkMy00ZWFhLWEzMDEtNjIwMTdmMzZlNzZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NSxcbiAgICAgIDE0LFxuICAgICAgMTYxLFxuICAgICAgMzksXG4gICAgICAyNDMsXG4gICAgICAxMTEsXG4gICAgICAyMjcsXG4gICAgICAxMDQsXG4gICAgICA2NyxcbiAgICAgIDEyLFxuICAgICAgMzksXG4gICAgICAyMjUsXG4gICAgICAzOCxcbiAgICAgIDEzOSxcbiAgICAgIDkxLFxuICAgICAgOTAsXG4gICAgICAxNzgsXG4gICAgICA3LFxuICAgICAgMTY0LFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgMTEsXG4gICAgICAyNTEsXG4gICAgICA0MSxcbiAgICAgIDE4NSxcbiAgICAgIDk2LFxuICAgICAgMTI1LFxuICAgICAgMTA1LFxuICAgICAgMjE2LFxuICAgICAgMTc3LFxuICAgICAgODIsXG4gICAgICA4NSxcbiAgICAgIDQ0LFxuICAgICAgMTkzLFxuICAgICAgMjEzLFxuICAgICAgMjMyLFxuICAgICAgNDIsXG4gICAgICA0NyxcbiAgICAgIDE4MixcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjk0V1k3TEZIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTc3MjE2Njg6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ0MDc5MjQxMzU5NTYyOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGlVdjlNQ0VNcjIrYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsSVlmbno0NHdvVTBXTWwvelNvdHczSi95WUZwUXNhSlpJMWZ0TjlHQldRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZIUjNVVFNNQnI2NVozaHVxZ2IyNjErZys4WERxR0MxR05GMnBucjlpNEoyMzJtOE9Ra1ZqQ0NSVzErc3ZVUU5qc1JEalRoZnU0L0Q1R296Wm1tWkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkx3VDZRc0NNOHJGRnV1ZllBMG9OS0ZiWDNaVGZaMkVWdWh6QzhJdStNVWFhQlFOenYwNW91R0orTzYzbytNaE1OSGJTWStnZlhmaEEvdnBNMWVIbWpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc1NzcyMTY2ODo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjYyMjg2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
