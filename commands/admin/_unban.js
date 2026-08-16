/*CMD
  command: /unban
  help: 
  need_reply: false
  auto_retry_time: 
  folder: admin

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /unban@red_join_bot
  group: 
CMD*/

var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
if (admin.list[user.telegramid] == user.telegramid) {
  if (request.reply_to_message) { 
Bot.run({ command: "/unbanbyreply" })
return}
  if (params) {
    var fst = params.split(" ")[0]
    Bot.sendMessage("*user unbanned*");
    Api.unbanChatMember({
   chat_id: chat.chatId,
   user_id: params,
   on_result: "unbans"
    });
  } else {
    Bot.sendMessage("Reply to a user to UNBAN or send like this /unban telegram user id\n\nUse /id command to get the telegram user id")
  }
} else {
  Bot.sendMessage("❌ You Not An Admin")

