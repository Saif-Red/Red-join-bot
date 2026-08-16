/*CMD
  command: /broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Message For Broadcast

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(user.telegramid == 1335676406 | user.telegramid == 1351734720){
var fullBotUsers = Bot.getProperty("wholeUsers")
var usrname = "@" + user.username
Bot.sendMessage("Starting Broadcast....")
if (!user.username) {
  var usrname =
    '' + user.first_name + ""
}
//POLL
if (request.poll) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: "Poll Broadcast By " + usrname + ""
    })
    Api.forwardMessage({
      chat_id: info,
      from_chat_id: user.telegramid,
      message_id: request.message_id
    })
  }
  return
}
//END

//VOICE
if (request.voice) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: "Voice Broadcast By " + usrname + ""
    })
    if (!request.caption) {
      Api.sendVoice({ chat_id: info, voice: request.voice.file_id })
    }
    if (request.caption) {
      Api.sendVoice({
        chat_id: info,
        voice: request.voice.file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}
//END
//VIDEO
if (request.video) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: "Video Broadcast By " + usrname + ""
    })
    if (!request.caption) {
      Api.sendVideo({ chat_id: info, video: request.video.file_id })
    }
    if (request.caption) {
      Api.sendVideo({
        chat_id: info,
        video: request.video.file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}
//END
//FILE
if (request.document) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: "File Broadcast By " + usrname + ""
    })
    if (!request.caption) {
      Api.sendDocument({ chat_id: info, document: request.document.file_id })
    }
    if (request.caption) {
      Api.sendDocument({
        chat_id: info,
        document: request.document.file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}
//END
//AUDIO
if (request.audio) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: "Audio Broadcast By " + usrname + ""
    })
    if (!request.caption) {
      Api.sendAudio({ chat_id: info, audio: request.audio.file_id })
    }
    if (request.caption) {
      Api.sendAudio({
        chat_id: info,
        audio: request.audio.file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}
//PHOTO
if (request.photo[0]) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: "Photo Broadcast By " + usrname + ""
    })
    if (!request.caption) {
      Api.sendPhoto({ chat_id: info, photo: request.photo[0].file_id })
    }
    if (request.caption) {
      Api.sendPhoto({
        chat_id: info,
        photo: request.photo[0].file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}
//END
//STICKER
if (request.sticker) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: "Sticker Broadcast By " + usrname + ""
    })
    Api.sendSticker({ chat_id: info, sticker: request.sticker.file_id })
  }
  return
}
//END
var promo = "Normal"
if (request.entities[0]) {
  if (request.entities[0].type == "url") {
    var promo = "Promotional"
  }
}
//ANIMATION
if (request.animation) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: "Animation Broadcast By " + usrname + ""
    })
    Api.sendAnimation({ chat_id: info, animation: request.animation.file_id })
  }
  return
}
//END
if (message.length > 1000) {
  Bot.sendMessage("Message Too Big.")
  return
}
for (var index in fullBotUsers) {
  var info = fullBotUsers[index]
  Api.sendMessage({
    chat_id: info,
    text:
      promo +
      " Broadcast  \n———————————————————————\n\n" +
      message +
      "\n\n———————————————————————",
    parse_mode: "HTML"
  })
}
Bot.sendMessage("✔Broadcast Sent")
}else{
Bot.sendMessage("*🔰 You're Not An Admin*")
}
