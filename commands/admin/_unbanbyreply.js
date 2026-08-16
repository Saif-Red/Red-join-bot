/*CMD
  command: /unbanbyreply
  help: 
  need_reply: false
  auto_retry_time: 
  folder: admin

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var id = ""+request.reply_to_message.from.id+""
Bot.sendMessage("*user unbanned*");
    Api.unbanChatMember({
   chat_id: chat.chatId,
   user_id: id,
   on_result: "unbans"
    })
