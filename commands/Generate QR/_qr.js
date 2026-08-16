/*CMD
  command: /qr
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Generate QR
  answer: Send text to generate QR Code.

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var qrChartUrl =
  "http://chart.apis.google.com/chart?cht=qr&chs=500x500&" +
  "chl=" +
  message +
  "&chld=H|0"

Bot.sendMessage("Generating QR Code")

Api.sendPhoto({
  photo: qrChartUrl,
  caption: "<b>Your QR code</b> ",
  parse_mode: "HTML"
})
