/*CMD
  command: /hide_keyboard
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

Api.sendMessage({ text: "This command is used to hide keyboard.",
reply_markup: JSON.stringify({
hide_keyboard: true
})
})
