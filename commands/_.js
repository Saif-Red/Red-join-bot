/*CMD
  command: *
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (chat.chat_type != "private") {
var newJoined = request.new_chat_members

//Filters

// Always-running command
//let filters = Bot.getProperty("filters", {});
//let userMessage = message;

//for (let keyword in filters) {
  //if (userMessage.includes(keyword)) {
    //Bot.sendMessage(filters[keyword]);
    //break; // Stop after the first match
  //}
//}

// Always-running filter checker

// ignore commands themselves if you want
if (message && message.startsWith("/")) {
  return;
}

// make sure we have a chat id
let chatId = chat.chatid || chat.id;
if (!chatId) {
  return;
}

// property name for this chat
let propName = "filters_" + chatId;

// load filters for this chat
let filters = Bot.getProperty(propName, {}) || {};

let text = message || "";
let lower = text.toLowerCase();

// loop through all filters for this chat
for (let k in filters) {
  if (!filters.hasOwnProperty(k)) continue;

  let keyLower = String(k).toLowerCase();

  // simple "contains" match
  if (lower.indexOf(keyLower) !== -1) {
    Bot.sendMessage(filters[k]);
    break;
  }
}

//Greetings

if (newJoined.length > 0) {
  let fname = newJoined[0].first_name
let lname = newJoined[0].last_name
let uname = newJoined[0].username
let tid = newJoined[0].id

  if (chat.chatid == -1001877384037) {
var cap = "Welcome to "+chat.title+"\nHello user "+fname+"\n\nUse #Request command for requesting Light Novel.\nRead rules."

Api.sendVideo({ video: "https://t.me/Lanestoroads/169", caption: ""+cap+"",
reply_markup: { inline_keyboard: [
  
    [
    
      { text: "Light Novel", url: "https://t.me/Novel_G_Red" },

      { text: "Chat Group", url: "https://t.me/Novel_GC" }
    ],
[{ text: "Rules", callback_data: "/rule" }]
  ]}})
} else {
Libs.Random.sendMessage(["Watashi ga kita!", "Ha! "+fname+" has joined! You activated my trap card!", ""+fname+" joined!, Gate of Death...open!", "Hi "+fname+", welcome to the dark side.", ""+fname+" joined!, Gate of Healing...open!", ""+fname+" is here, as the prophecy foretold.", ""+fname+", blows up, no guts, left chest, face gone", "Welcome, "+fname+". Leave your weapons by the door.", ""+fname+" on a higher plane!", ""+fname+" joined. You must construct additional pylons.", "Come. I don't want to destroy this place", "Ah, "+fname+" the Platypus, you're just in time... to be trapped.", "Oh, hey "+fname+" what's the password?", "Welcome, "+fname+". We hope you brought pizza.", "Welcome "+fname+", your princess is in another castle.", "Hi, "+fname+", show me your Hunter License!"]);
}}};
