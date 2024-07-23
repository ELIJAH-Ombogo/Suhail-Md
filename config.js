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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_03_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDg3LFxuICAgICAgICAzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODAsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDgxLFxuICAgICAgICA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNixcbiAgICAgICAgMTExLFxuICAgICAgICAzNSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUzLFxuICAgICAgICAzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcyLFxuICAgICAgICAzMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgODgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MixcbiAgICAgICAgMTA4LFxuICAgICAgICA4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDM4LFxuICAgICAgICA2MixcbiAgICAgICAgMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQwLFxuICAgICAgICA1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFQXJwSWhxbnNtVSt1bkNjaEE4YzlFQVlRbUxydm0wVFdQWUIwbkJMU0NFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcyMDI1NDc5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRThCNzc3REM0OTA2Q0FFMDc5NDIyQzE5NUIxNTJENDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNjYwNTk4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNnM1lpWDRBUXFTUVhobzBqMzFCREFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWQ5MmNmYjMtNzFkMy00YmRhLThiOTEtMzViY2E0Yzc0OTA0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDIyNyxcbiAgICAgIDc4LFxuICAgICAgNDIsXG4gICAgICAxLFxuICAgICAgMTksXG4gICAgICAxNTksXG4gICAgICAxNDEsXG4gICAgICAzMSxcbiAgICAgIDExMixcbiAgICAgIDc1LFxuICAgICAgNjUsXG4gICAgICAzNyxcbiAgICAgIDEzOSxcbiAgICAgIDIwOSxcbiAgICAgIDQsXG4gICAgICA4MixcbiAgICAgIDExNyxcbiAgICAgIDEyOCxcbiAgICAgIDEwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICA4NyxcbiAgICAgIDE0MSxcbiAgICAgIDE5OSxcbiAgICAgIDIzMCxcbiAgICAgIDIxMixcbiAgICAgIDE0NSxcbiAgICAgIDg3LFxuICAgICAgMzEsXG4gICAgICAxMDYsXG4gICAgICAxNzQsXG4gICAgICA3OSxcbiAgICAgIDQ5LFxuICAgICAgMTYxLFxuICAgICAgODgsXG4gICAgICAyNDYsXG4gICAgICAxNTIsXG4gICAgICAxMzUsXG4gICAgICAxNzMsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaSlBZWTNHTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzIwMjU0Nzk3OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTEwNDQ4NTk3NDAyOTU6NTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFRqNHJrRUVLN3ArYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrVFcxRjg1bElnRkJkekJtc3BQUUFyU0lnS2VmT295RGMyU09Ca0tMeVNjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJ1VDZSRjA0WnIvT1hWdjN2M3JpU2tXcnJZZUtiaHhmSnNIbXR2eWpmTWViZEF2S0pkWW96aG1EODBYaVQ3VFBRWUU5dHFWUmgrN0pNWHNUdGNrekF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdQVmE5SUdnckZlaGZLb01ZZUUxdzQ3TmlIcUxid0d6dWsxWEd4WlR4NFFieXFqeDRYRjNxV0h0VUZRbGtvdTF3dzA1RXBGUG40S04vWWYxSTlqekFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyMDI1NDc5Nzo1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2NjA1OTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOalNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5qUy5qc29uIjogIntcImtleURhdGFcIjpcIkdBK3ltbjY1ZDJuWUtIWlFsckQrZGJuYlA3VjVOV0hXVDhOYlJ5NWQ3Nk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE5NDg5Nzg0MixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
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
