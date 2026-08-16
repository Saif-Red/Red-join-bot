/*CMD
  command: Custom
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Password Generator

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var length = message
if (!isNumeric(length)) {
  Bot.runCommand("Custom")
  return
}
if(message > 50) {
  Bot.sendMessage("Choose a Length Below 50")
  return
}
if(message < 5) {
  Bot.sendMessage("Choose a Length Above 5")
  return
}

Bot.sendMessage("Generating a Password... ", {
  on_result: "/genPassword "+message
})
