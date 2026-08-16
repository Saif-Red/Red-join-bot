/*CMD
  command: /del
  help: 
  need_reply: false
  auto_retry_time: 
  folder: filters

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /deletefilter
  group: 
CMD*/

if (admin.list[user.telegramid] == user.telegramid) {
// Command: /deletefilter
let params = message.split(" ");
let keyword = params[1];

if (!keyword) {
  Bot.sendMessage("Usage: /del {keyword}");
  return;
}

let filters = Bot.getProperty("filters", {});
if (filters[keyword]) {
  delete filters[keyword];
  Bot.setProperty("filters", filters, "json");
  Bot.sendMessage("Filter '" + keyword + "' has been deleted.");
} else {
  Bot.sendMessage("Filter '" + keyword + "' does not exist.");
}
}
