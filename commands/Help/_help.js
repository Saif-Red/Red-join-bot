/*CMD
  command: /help
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Help

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /help@red_join_bot, /bk
  group: 
CMD*/

if (chat.chat_type != "private") {
  Bot.sendInlineKeyboard(
    [{ title: "PM", url: "https://t.me/"+ bot.name +"?start=help" }],
    "Contact me in PM to get the list of possible commands."
  )
} else {
  if ((chat.chat_type = "private")) {
    if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id}

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
var cap = "Hey there!\nThis is Red!\n━━━━━━━━━━━━━━━━━━━━\nMain commands available:\n ❍ /start: Check Me... If I am Alive or Not!\n ❍ /help: Use this, if you need more info about me!\n━━━━━━━━━━━━━━━━━━━━"
Api.sendPhoto({
photo: "https://graph.org/file/ed3d91101d5fda4b2f4b0-d6f05009fb8fd978aa.jpg",
caption: cap,
reply_markup: { inline_keyboard: [
    [
       { text: "Aᴅᴍɪɴ", callback_data: "/ah" },
              { text: "Iɴғᴏ", callback_data: "/ih" },
              { text: "Nᴏᴛᴇs", callback_data: "/nh" }
    ],
    [
       { text: "Fᴜɴ", callback_data: "/fh" },
              { text: "Mᴇᴍᴇs", callback_data: "/mh" },
              { text: "Uᴘʟᴏᴀᴅ", callback_data: "/uh" }
    ],
    [
       { text: "Tᴏᴏʟs", callback_data: "/th" },
              { text: "Dᴏᴡɴʟᴏᴀᴅ", callback_data: "/dh" },
              { text: "Aɴɪᴍᴇ", callback_data: "/anh" }
    ],
    [
       { text: "A.ɪ.", callback_data: "/aih" },
               { text: "Pɪᴄ Eᴅɪᴛᴏʀ", callback_data: "/peh" },
    ],
    [
       { text: "How to create a Clone?", callback_data: "/clone" }
    ],
    [
       { text: "⊙●", callback_data: "/none" },
              { text: "Thank You", callback_data: "/none" },
              { text: "●⊙", callback_data: "/none" }
    ]
  ]}
    })
  }
}
