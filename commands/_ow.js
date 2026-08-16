/*CMD
  command: /ow
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send file

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.forwardMessage({
      chat_id: "1335676406",
      from_chat_id: request.chat.id,
      message_id: request.message_id});
Bot.sendMessage("Message Sended to @Saif_Red")
