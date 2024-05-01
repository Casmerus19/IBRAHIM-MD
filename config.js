const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' }) 


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ngoyaibraah@gmail.com"
global.location="Bungoma,Kenya."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/ibrahimaitech/IBRAHIM-MD/tree/main";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/JE3gJsV15ly9ViU6lgw0GD";
global.website=process.env.GURL || "https://www.youtube.com/@ibrahimmdgpt" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fdeb9bdbfae04a6b62dd4.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "25523502127";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/fdeb9bdbfae04a6b62dd4.jpg",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "25471077266,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254710772666,254xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://ibrahim-tech-1-4a7321f212d3.herokuapp.com/";

module.exports = {

  menu: process.env.MENU || "A17_MD", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©ⁱᵇʳᵃʰⁱᵐ ᵗᵉᶜʰ💥90✴" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "outlook",
  packname: process.env.PACK_NAME || "👑",
  botname : process.env.BOT_NAME  || " 𝗜𝗕𝗥𝗔𝗛𝗜𝗠-ᵐᵈ",
  ownername:process.env.OWNER_NAME|| "outlook-md",

  sessionName:process.env.SESSION_ID || "PANTHER;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUNEQ3RIYjRDeDh1dXNSSldQVHJVZU1pUjlXcmV2ZlRhNkFhM1V2cjNHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMW5WWlNpSDAyVDBGSTJNMUFqS0ZQTytuMkNFOEh5OTByTWY2R1AwZnBXaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQ0Ivb3JvL0VSRUphS1FKYUJwMlNmeVR4Z2hsSG9yZWVadk5oVkRxMUhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoeWZOS2x4N1lkTDB3YXVSZzhvRlR2QThRWnNTcjR5TkxhaGVWSHQzaEVRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVDejBHNVZRUm9NR2ltbFdQTm5FVU15bEJ4NndnaEVtNDZpWXNqbVlvSDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind3dGw5Z1lHVlZiYk9vOUFDVTczbDQ5Ym1QSWNxOE1iRm5yRG5wcHFYajA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0swUkpGaUl2STk4UWhMandXUzE3aVczZVM0bGt4TGp1eXEvZ0NwZmMwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2Z6aGFTVGgvbFhsOEdoNHEzNlhGQ1ZTUWpvNFc1WTFkNE1FL1lvbFJtRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ino3UWRYVFJrVWZUcFo3STFvNnlwSjRNODZEeHYwd2JJVkU2U1JncExmZkRDWllhb0hRSDI3Qy9XemFEZmFzbHBDVE44RW01UlVDbnRjcnVUcDk4d0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU2LCJhZHZTZWNyZXRLZXkiOiJSUzlXWWxTNGN1dStlZWdkZmNxNDA0YVZsMDlJb1M5QUZFNkFQT2xTRllNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuQTM1MFR1WFJyYWI0Y2ZlY1BBR2F3IiwicGhvbmVJZCI6IjQzZWFlMTNlLWI4NjAtNDIzOS04MDA5LTAxMDE1MzU3NGUwYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUb1JMREpMeGdFUlRhVEFxbEJBVUpjMDB5ejQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHo2SnlidEMwZXNWMXJqbW94czd2enZZcHhBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFNNEhZVzFQIiwibWUiOnsiaWQiOiIyNTU2MjM1MDIxMjc6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiT3V0bG9vayJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFBPbXJZQ0VMYXF4YkVHR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiN1VrR0tVWWkzZHlEK3BxVG5RdWc4a0tTcWRPT3pKS3lvam9EM3FBOTQyQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZlNqUHNVWTJnd0x0U3oxZk1QMExWTFdLMlEyNjF1cmd3RmtuOXUrK1hXVkZ4ekRaVFBkT0xSWE0rbzRKQ0JRdXdZVTFKcG5JZnBLbXFEcHdqZk1QQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IkVrV1VnSmphYzVoSDRmRGY5UXBtdFJ6WGd1ODNJT3I5Y3k1Y1BRR3JMMmwxaWR0bjg3UnhmRjFodHJEUXlHczdnSGNRbFd6dmpBY3MvUjl2V1dGRURRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NjIzNTAyMTI3OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmUxSkJpbEdJdDNjZy9xYWs1MExvUEpDa3FuVGpzeVNzcUk2QTk2Z1BlTmcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTQ1MDkxMjR9",  // PUT SESSION ID HERE 
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
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "ADAM",



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
 
