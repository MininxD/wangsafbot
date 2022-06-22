
exports.wait = () => {
return`*[⌛] Tunggu Sebentar*`
}

exports.txt = () => {
return`*Masukan Parameter Text!*`
}

exports.err = () => {
return`*Ada Kesalahan!*`
}

exports.menu = (prefix,pushname,sender,bbv,premi,nodes,own,times) => {
return`*Sticker Bot*

*_info_*
*Server Uptime*: ${bbv(nodes)}
*Sender*: @${sender.split("@")[0]}
*Time*: ${times}
*Owner*: @${own.split("@")[0]}

*_menu :_*
*${prefix}sticker* _kirim gambar/video_
> ubah video atau foto menjadi stiker

*${prefix}takestick* _nama stiker|author_
> klaim stiker apapun jadi punyamu, contoh : meme | minin

*${prefix}toimg* _tag sticker_
> convert stikermu ke gambar


`
}




