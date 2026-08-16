/*CMD
  command: 🔑 Generate Password
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Password Generator

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 5, 10, 15, 20
  group: 
CMD*/

if (message == 5 || message == 10 || message == 15 || message == 20) {
  Bot.sendMessage("Generating a Password... ", {
    on_result: "/genPassword " + message
  })
} else {
  Bot.sendKeyboard(
    "5,10,15,20,Custom\n⬅️ Return",
    "*Choose Length of Password*"
  )
}

