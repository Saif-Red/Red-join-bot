/*CMD
  command: /filtersc
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

// Command: /filter
let params = message.split(" ");
let keyword = params[1];
let response = params.slice(2).join(" ");

if (!keyword || !response) {
  Bot.sendMessage("Usage: /filter {keyword} {response}");
  return;
}

let filters = Bot.getProperty("filters", {});
filters[keyword] = response;
Bot.setProperty("filters", filters, "json");

let chatName = chat.title || user.first_name;
Bot.sendMessage("Saved 1 filter in " + chatName + ": -" + keyword);
