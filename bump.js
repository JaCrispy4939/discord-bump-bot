var bumpssent = 0;

function loop() {
    setTimeout(loop, 7205000)
    const Request = require('request');
    const token = "NTQ2MTY1OTk4Mzg3MDY4OTI4.YPFsxw.iPUttIvOtDPzkobeyW9okeVsHWA";
    const message = "!d bump";
    bumpssent ++;
    const message2 = "Ja'Crispy coded a bot to send this message (bumps sent = " + bumpssent + ")";
    const channel = "777670787938385930";
    Request(`https://discord.com/api/v8/channels/${channel}/messages`, {method: 'POST', headers:{ "authorization": token }, formData:{ "content": message }});
    Request(`https://discord.com/api/v8/channels/${channel}/messages`, {method: 'POST', headers:{ "authorization": token }, formData:{ "content": message2 }});
    console.log("Sent Bump " + bumpssent + " Times");
    }
loop()