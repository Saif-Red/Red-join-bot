/*CMD
  command: /filters
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

// Command: /filters

// make sure we have a chat id
let chatId = chat.chatid || chat.id;
if (!chatId) {
  Bot.sendMessage("Cannot detect chat id.");
  return;
}

// property name for this chat (same pattern as /filter)
let propName = "filters_" + chatId;

// get filters for this chat
let filters = Bot.getProperty(propName, {}) || {};

let keys = Object.keys(filters);

if (keys.length === 0) {
  Bot.sendMessage("No filters saved in this chat.");
  return;
}

// build readable list
let text = "Filters in this chat:\n\n";
for (let i = 0; i < keys.length; i++) {
  let k = keys[i];
  let v = filters[k];
  text += (i + 1) + ". " + k + " ➜ " + v + "\n";
}

Bot.sendMessage(text);
