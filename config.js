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
global.github=process.env.GITHUB|| "https://google-ai-x.blogspot.com/";
global.gurl  =process.env.GURL  || "https://google-ai-x.blogspot.com/";
global.website=process.env.GURL || "https://google-ai-x.blogspot.com/" ; https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://google-ai-x.blogspot.com/" ; // SET LOGO FOR IMAGE 
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_25_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNixcbiAgICAgICAgMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NixcbiAgICAgICAgMTIxLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1LFxuICAgICAgICA2NixcbiAgICAgICAgNzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDksXG4gICAgICAgIDM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUyLFxuICAgICAgICA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgODQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibU9ocEVaLzFWM2x2TFpaSHVIVEhOeGl2Sk1PNnRNU2NPaHNHRi82L2c5MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTkzNjk5ODcwMzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMwRDQ0QjBFNjAzNUI4MDlGNEFFQTZCODlENjEwNERDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODI3NzkxMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTM2OTk4NzAzNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDc3RTdBNThDODg2QzA0OTcxMUVCQUZGNDNFRDNCMEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4Mjc3OTExXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5MzY5OTg3MDM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFQTJENkYwMEJFMUI3MzI5NTA4QjYzNzE4RDM3MzM3OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgyNzc5MTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTkzNjk5ODcwMzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjIyNzkyODkxRUI2ODZDMjIwMzNGMTY4MTE1NzIyQUYxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODI3NzkxNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLSUdhLW5vZVRBMmFfaW5YX1FDclF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjhiNDQ2YjAzLTBiOTAtNDg1OC04OTc2LTkzODgxNDUwODJmZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTgsXG4gICAgICAzMixcbiAgICAgIDEzNyxcbiAgICAgIDQsXG4gICAgICAyMTQsXG4gICAgICAxODksXG4gICAgICAzNSxcbiAgICAgIDU2LFxuICAgICAgMTIxLFxuICAgICAgMjM1LFxuICAgICAgNzIsXG4gICAgICA3NCxcbiAgICAgIDg0LFxuICAgICAgMTMzLFxuICAgICAgMTQ1LFxuICAgICAgOTAsXG4gICAgICAxNjgsXG4gICAgICAyNTMsXG4gICAgICAyMzMsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgMzksXG4gICAgICA1NSxcbiAgICAgIDExNyxcbiAgICAgIDEyOCxcbiAgICAgIDksXG4gICAgICAxMjksXG4gICAgICAxNTYsXG4gICAgICAyMDUsXG4gICAgICAxNDYsXG4gICAgICAxNzAsXG4gICAgICAxNTMsXG4gICAgICAzLFxuICAgICAgNDYsXG4gICAgICAyMjIsXG4gICAgICAyMDEsXG4gICAgICAyNTEsXG4gICAgICAyNTIsXG4gICAgICAxNDIsXG4gICAgICAxNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOExON00yUVdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTM2OTk4NzAzNTozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE3NzY4NDU2MjY1NzMxOjM1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIldvcmxkIPCfjI5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNONkYzTU1GRUpLdXE3TUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxnSE5Gc0Z2bGJvbThBOU9SYnhCTW1oNjhaL3d6aFhZQ29tbCtRaUJ0Ukk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNmc4MUcyUEtCU0tvN0dyWEN6OWdHcGp6eXA0VXF3RFdXWnhicnRMR1lpWnZFRS9EdzZORklMUUF2VzdjdFF6MDIzbHBPOXoweXVnWXNWNVJZa3paQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRlFWQnZkaEc5WTVVSWpXWGFZbjI1VG85WWV4ZE1YZWxTMU0zWXFOejB4K2hTcmlncWVHNkwvaS9LNEcwY3drRnp4azYvaVJiOGpkWUVLZGZ3K3VsakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5MzY5OTg3MDM1OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODI3NzkwOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9WSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1ZKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVnRObDNVSFlOT0tWZEcycnZxcUJRdkNiaVM4RHJQdlBZZ3FnY3U1UzJ1Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDg0MTk0NTI2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgyNzc1MTgzMDhcIn0iCn0="  // PUT your SESSION_ID 


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
