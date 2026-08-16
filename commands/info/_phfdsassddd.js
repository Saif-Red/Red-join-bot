/*CMD
  command: /phfdsassddd
  help: 
  need_reply: false
  auto_retry_time: 
  folder: info

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let msg_id = options.result.message_id;
Bot.editMessage("Message I'd ::- "+msg_id+"",msg_id)
