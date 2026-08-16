/*CMD
  command: /filter
  help: 
  need_reply: false
  auto_retry_time: 
  folder: filters

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
if (admin.list[user.telegramid] == user.telegramid) {

let params = message.split(" ");
let keyword = params[1];
let response = params.slice(2).join(" ");

if (!keyword || !response) {
  Bot.sendMessage("Usage: /filter {keyword} {response}");
  return;
}

// unique key for this chat
let propName = "filters_" + chat.chatid;  // or chat.id

let filters = Bot.getProperty(propName, {}) || {};
filters[keyword] = response;

Bot.setProperty(propName, filters, "json");

let chatName = chat.title || user.first_name || "this chat";
Bot.sendMessage("Saved 1 filter in " + chatName + ": -" + keyword);
} else {
  Bot.sendMessage("❌ You Are Not An Admin")
}
