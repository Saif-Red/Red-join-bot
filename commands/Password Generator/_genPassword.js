/*CMD
  command: /genPassword
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

var msg = options.result.message_id
var characters = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLUVWXYZ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234567890abcdefghijklmnopqrstuvwxyz12345"

function genePassword(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
Api.editMessageText({
  text: "`"+genePassword(params)+"`", 
  message_id: msg, 
  parse_mode:"markdown"
})
