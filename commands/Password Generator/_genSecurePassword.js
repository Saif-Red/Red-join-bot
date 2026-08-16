/*CMD
  command: /genSecurePassword
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

var characters = "$%abcdefghijklmnopqrstuvwxyz@#&-_+<>$%1234567890ABCDEFGHIJKLUVWXYZ12345678901234567890@#%&-_+<>$%abcdefghijklMNOPQRSTUVWXyZ"

function genePassword(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
Api.editMessageText({
  text: "`"+genePassword(15)+"`", 
  message_id: msg, 
  parse_mode:"markdown"
})
