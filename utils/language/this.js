
exports.wait = () => {
return`*[⌛] Tunggu Sebentar +1*`
}

exports.txt = () => {
return`*Masukan Parameter Text!*`
}

exports.err = () => {
return`*Ada Kesalahan!\n*Report To Admin:*\n*wa.me/+6289501303263*`
}

exports.menu = (prefix,pushname,sender,bbv,premi,nodes,own,times) => {
return`*Whatsapp Bot*

*</info>*
*Halo Kak ${pushname}👋*
*Uptime*: ${bbv(nodes)}
*Sender*: @${sender.split("@")[0]}
*Time*: ${times}
*Prefix*: No Prefix

*</owner>*
*Owner*: @${own.split("@")[0]}

*</menu>*
*${prefix}sticker* _send image/video_
*${prefix}eval* _javascript_
*${prefix}takestick* _pack|author_
*${prefix}toimg* _tag sticker_
*${prefix}listpremium*
*${prefix}play* _text_
*${prefix}joox* _lagu_
*${prefix}wiki* _[object]_
`
}

