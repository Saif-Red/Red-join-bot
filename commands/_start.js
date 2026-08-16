/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /start@red_join_bot, /start@red_join_bot
  group: 
CMD*/

if (params) {
  Bot.runCommand("/" + params)
  return
}
var joinbuttons = [
  [
    {
      text: "➕ Add me to a Group ➕",
      url: "https://telegram.me/" + bot.name + "?startgroup=true"
    }
  ],
  [
    { text: "Support", url: "https://t.me/Novel_GC" },
    { text: "About", callback_data: "/about" }
  ],
  [{ text: "Help", callback_data: "/help" }]
]
Api.sendMessage({
  text:
    "<a href=\"https://graph.org/file/3f1b752a04528e97bddac-54ba143a1c2d9bd652.jpg\">✧</a>\n──────「Hey, I'm Red📕」────\nI'm Red! An Anime themed personal advance group management bot with a lot of advance Features for @Novel_GC ! \n➖➖➖➖➖➖➖➖➖➖\n×× Try The Help & Command Buttons Below To Know My Abilities ××\n➖➖➖➖➖➖➖➖➖➖",
  reply_markup: {
    inline_keyboard: joinbuttons
  },
  parse_mode: "HTML"
})
