const discord = require("discord.js-selfbot")
const client = new discord.Client()

// Alttakinleri ayarlamazsanız bot çalışmaz.

const prefix = "?" // prefixi değiştirmesenizde olur.
const author = "komutları kullanacak kişi Id'si"// komutları kullanacak kişi.
const bildirim = "Kapanmaya yakın mesaj atıcak kişi Id'si" // Kapanmaya yakın mesaj atıcak kişi
const kanal = "Mesajları atıcak kanal Id'si" // Mesajları atıcak kanal.

client.login(" User Token ") // Hesap tokeni girmelisiniz.

// Ayarlar son

client.on("ready", () => {
console.log(`Client "${client.user.username}"" Adıyla aktif oldu.`)
console.log(" ");console.log(" ");console.log(" ");
console.log(`${prefix}başlat @bot \nVeya\n${prefix}başlat hepsi\n\nYazarsanız client kasmaya başlar`)
})




// Başlatma komutları
client.on("message", message => {
if(message.author.id !== author || !message.content.toLowerCase().startsWith(prefix + "başlat")) return;
let args = message.content.split(" ").slice(1);
let etiket = message.mentions.members.first()
const mesajkanal = message.guild.channels.cache.get(kanal)
if(!args[0]) return message.channel.send("prefix + başlat bot")
if(args[0].toLowerCase() === "bot") {
  	message.channel.send("self-bot başlatıldı")
  	setInterval(() => mesajkanal.send("mesajjjjj"), 5000)

})
