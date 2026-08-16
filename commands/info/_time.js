/*CMD
  command: /time
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

let now = new Date().toLocaleString("en-US", { 
  timeZone: "Asia/kolkata" 
}) 
Bot.sendMessage(now)
