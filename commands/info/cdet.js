/*CMD
  command: cdet
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

var subs = User.getProperty("Subs");
var photo = User.getProperty("channelogo");
Api.sendPhoto({
photo: ""+photo+"",caption:
    "Username ➤ @" +
    options.result.username +
    "\n\nCHANNEL ID ➤ " +
    options.result.id +
    "\n\nTITLE ➤ " +
    options.result.title +
    "\n\nTOTAL SUBSCRIBERS ➤ " +
    subs +
    " Subscribers\n\nTYPE ➤ " +
    options.result.type +
    "\n\nDESCRIPTION  ➤  " +
    options.result.description +
    "\n\nDetails by ➤ @" +
    bot.name +
    ""
  })
