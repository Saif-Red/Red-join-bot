/*CMD
  command: /tr
  help: 
  need_reply: false
  auto_retry_time: 
  folder: translate

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

try {
  var msg = message.replace("/tr ", "")
  var lng = msg.split(" ")[0]
  var txt = msg.replace(lng, "")
  function removeEmojis(string) {
    var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g
    return string.replace(regex, "")
  }
  function translate(text, lang) {
    var txt = text
    var txt = removeEmojis(txt)
    var txt = encodeURI(txt)
    var txt = txt.replace("%5Cn", "")
    HTTP.get({
      url: "https://translate-api.ml/translate?text=" + txt + "&lang=" + lang,
      success: "sys/onTranslate"
    })
  }

  translate(txt, lng)
} catch (error) {
  Bot.sendMessage("⚠️ Error: " + error)
}
