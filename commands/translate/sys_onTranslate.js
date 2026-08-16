/*CMD
  command: sys/onTranslate
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
  var c = JSON.parse(content)
  if (c.status == "200") {
    var t = c.translated
    var g = c.given
    var msg =
      "📥 Given:\n📃 Text: " +
      g.text +
      "\n🇺🇸 Lang: " +
      g.lang +
      "\n📤 Translated:\n📃 Text: " +
      t.text +
      "\n🇺🇸 Lang: " +
      t.lang +
      "\n👅 Pronunciation: " +
      t.pronunciation +
      "\n📖 Similars: " +
      t.similars
    Bot.sendMessage(msg)
  } else {
    Bot.sendMessage("⚠️Error: " + c.error)
  }
} catch (error) {
  Bot.sendMessage("⚠️Error: " + error)
}

