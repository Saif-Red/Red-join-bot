/*CMD
  command: #request
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Novel Chat Command

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (chat.chat_type != "private") {
  Bot.sendMessage("Request sent to Admin!👍")
  Bot.sendMessageToChatWithId(1335676406, "["+user.first_name+"](tg://user?id="+user.telegramid+") *user, has sended his/her information regarding their request.*\n\n*User info:*\n*User First Name:* ["+user.first_name+"]\n*User Last Name:* ["+user.last_name+"]\n*User ID:* ["+user.telegramid+"]\n*Username:* @["+user.username+"]\n*Permalink:* [link](tg://user?id="+user.telegramid+")\n\n*User's Message:*\n`"+message+"`")
} else {
  if ((chat.chat_type = "private")) {
  Bot.sendMessage("Use this command for requesting Novels in @NovelGC")
  }
}
